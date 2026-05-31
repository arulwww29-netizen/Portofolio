import { useMemo } from 'react'
import './GradientButton.css'

function GradientButton({
  children,
  size = 'md',
  gradientColors = [
    '#ff6d1b',
    '#ffee55',
    '#5bff89',
    '#4d8aff',
    '#6b5fff',
    '#ff64f9',
    '#ff6565',
  ],
  animationSpeed = 2,
  glowEffect = true,
  glowSize = 4,
  variant = 'default',
  as: Component = 'button',
  style = {},
  ...props
}) {
  const gradientString = gradientColors.join(', ')

  const sizeStyles = {
    sm: { fontSize: '1.4rem', padding: '0.6rem 1.6rem' },
    md: { fontSize: '1.6rem', padding: '0.8rem 2.4rem' },
    lg: { fontSize: '1.8rem', padding: '1rem 3.2rem' },
    xl: { fontSize: '2.4rem', padding: '1.2rem 4rem' },
  }

  const dynamicStyles = useMemo(() => {
    const s = sizeStyles[size] || sizeStyles.md
    const baseStyle = {
      ...s,
      borderRadius: '4rem',
      backgroundSize: '200%',
      animation: `gradient-animate ${animationSpeed}s infinite linear`,
      ...style,
    }

    if (variant === 'ghost') {
      baseStyle.background = `linear-gradient(90deg, ${gradientString})`
      baseStyle.WebkitBackgroundClip = 'text'
      baseStyle.WebkitTextFillColor = 'transparent'
      baseStyle.border = '2px solid transparent'
      baseStyle.backgroundSize = '200%'
    } else if (variant === 'outline') {
      baseStyle.background = 'transparent'
      baseStyle.border = `2px solid`
      baseStyle.borderImage = `linear-gradient(90deg, ${gradientString}) 1`
      baseStyle.borderImageSlice = 1
    }

    return baseStyle
  }, [size, variant, gradientString, animationSpeed, style])

  const glowStyles = useMemo(() => ({
    background: `linear-gradient(90deg, ${gradientString})`,
    backgroundSize: '200%',
    animation: `gradient-animate ${animationSpeed}s infinite linear`,
    filter: `blur(${glowSize * 0.2}rem)`,
  }), [gradientString, animationSpeed, glowSize])

  const beforeStyles = useMemo(() => ({
    background: `linear-gradient(90deg, ${gradientString})`,
    backgroundSize: '200%',
    animation: `gradient-animate ${animationSpeed}s infinite linear`,
    filter: `blur(${glowSize * 0.2}rem)`,
  }), [gradientString, animationSpeed, glowSize])

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes gradient-animate {
              0% { background-position: 0; }
              100% { background-position: 200%; }
            }
          `,
        }}
      />
      <Component
        className="gradient-btn"
        style={dynamicStyles}
        {...props}
      >
        {/* Animated gradient border */}
        <span
          className="gradient-btn-border"
          style={{
            background: `linear-gradient(90deg, ${gradientString})`,
            backgroundSize: '200%',
            animation: `gradient-animate ${animationSpeed}s infinite linear`,
          }}
        />
        {/* Inner background */}
        <span className="gradient-btn-inner" />
        {/* Glow effect */}
        {glowEffect && (
          <span
            className="gradient-btn-glow"
            style={glowStyles}
          />
        )}
        {/* Content */}
        <span className="gradient-btn-content">{children}</span>
      </Component>
    </>
  )
}

export default GradientButton
