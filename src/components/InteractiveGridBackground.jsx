import { useEffect, useRef, useState } from 'react'
import './InteractiveGridBackground.css'

function InteractiveGridBackground({
  gridSize = 50,
  gridColor = '#1a1a2e',
  effectColor = 'rgba(180, 76, 224, 0.6)',
  trailLength = 3,
  idleSpeed = 0.2,
  glow = true,
  glowRadius = 20,
  showFade = true,
  fadeIntensity = 20,
  idleRandomCount = 5,
  children,
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const trailRef = useRef([])
  const idleTargetsRef = useRef([])
  const idlePositionsRef = useRef([])
  const mouseActiveRef = useRef(false)
  const lastMouseTimeRef = useRef(Date.now())
  const animIdRef = useRef(null)

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const rawX = e.clientX - rect.left
      const rawY = e.clientY - rect.top

      if (rawX < 0 || rawY < 0 || rawX > rect.width || rawY > rect.height) return

      mouseActiveRef.current = true
      lastMouseTimeRef.current = Date.now()

      const snappedX = Math.floor(rawX / gridSize)
      const snappedY = Math.floor(rawY / gridSize)

      const last = trailRef.current[0]
      if (!last || last.x !== snappedX || last.y !== snappedY) {
        trailRef.current.unshift({ x: snappedX, y: snappedY })
        if (trailRef.current.length > trailLength) trailRef.current.pop()
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [gridSize, trailLength])

  // Drawing logic
  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    function updateCanvasSize() {
      const dpr = window.devicePixelRatio || 1
      const w = container.offsetWidth
      const h = container.scrollHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      return { w, h }
    }

    let { w: canvasWidth, h: canvasHeight } = updateCanvasSize()

    const cols = Math.floor(canvasWidth / gridSize)
    const rows = Math.floor(canvasHeight / gridSize)

    idleTargetsRef.current = Array.from({ length: idleRandomCount }, () => ({
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows),
    }))
    idlePositionsRef.current = idleTargetsRef.current.map((p) => ({ ...p }))

    let lastSize = { w: canvasWidth, h: canvasHeight }

    const draw = () => {
      // Check for resize
      const currentW = container.offsetWidth
      const currentH = container.scrollHeight
      if (currentW !== lastSize.w || currentH !== lastSize.h) {
        const size = updateCanvasSize()
        canvasWidth = size.w
        canvasHeight = size.h
        lastSize = { w: canvasWidth, h: canvasHeight }
      }

      ctx.clearRect(0, 0, canvasWidth, canvasHeight)

      // Draw grid
      ctx.strokeStyle = gridColor
      ctx.lineWidth = 0.5
      ctx.globalAlpha = 0.6
      for (let x = 0; x <= canvasWidth; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvasHeight)
        ctx.stroke()
      }
      for (let y = 0; y <= canvasHeight; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvasWidth, y)
        ctx.stroke()
      }
      ctx.globalAlpha = 1.0

      // Idle animation
      const idleThreshold = 2000
      if (Date.now() - lastMouseTimeRef.current > idleThreshold) {
        mouseActiveRef.current = false
        const currentCols = Math.floor(canvasWidth / gridSize)
        const currentRows = Math.floor(canvasHeight / gridSize)

        idlePositionsRef.current.forEach((pos, i) => {
          const target = idleTargetsRef.current[i]
          if (!target) return
          const dx = target.x - pos.x
          const dy = target.y - pos.y

          if (Math.abs(dx) < 0.01 && Math.abs(dy) < 0.01) {
            idleTargetsRef.current[i] = {
              x: Math.floor(Math.random() * currentCols),
              y: Math.floor(Math.random() * currentRows),
            }
          } else {
            pos.x += dx * idleSpeed
            pos.y += dy * idleSpeed
          }

          const roundedX = Math.round(pos.x)
          const roundedY = Math.round(pos.y)
          const last = trailRef.current[0]
          if (!last || last.x !== roundedX || last.y !== roundedY) {
            trailRef.current.unshift({ x: roundedX, y: roundedY })
            if (trailRef.current.length > trailLength * idleRandomCount)
              trailRef.current.pop()
          }
        })
      }

      // Draw trail glow
      trailRef.current.forEach((cell, idx) => {
        const alpha = 1 - idx * (1 / (trailLength + 1))
        const rgbaColor = effectColor.replace(/[\d.]+\)$/g, `${alpha})`)

        ctx.fillStyle = rgbaColor
        if (glow) {
          ctx.shadowColor = rgbaColor
          ctx.shadowBlur = glowRadius
        } else {
          ctx.shadowBlur = 0
        }

        ctx.fillRect(cell.x * gridSize, cell.y * gridSize, gridSize, gridSize)
      })

      ctx.shadowBlur = 0
      animIdRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      if (animIdRef.current) cancelAnimationFrame(animIdRef.current)
    }
  }, [gridSize, gridColor, effectColor, trailLength, idleSpeed, glow, glowRadius, idleRandomCount])

  return (
    <div ref={containerRef} className="interactive-grid-container">
      <canvas ref={canvasRef} className="interactive-grid-canvas" />
      {showFade && (
        <div
          className="interactive-grid-fade"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black 100%)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black 100%)`,
          }}
        />
      )}
      <div className="interactive-grid-content">{children}</div>
    </div>
  )
}

export default InteractiveGridBackground
