import './AuroraTextEffect.css'

function AuroraTextEffect({
  text,
  fontSize = 'clamp(3rem, 8vw, 7rem)',
}) {
  return (
    <span className="aurora-text" style={{ fontSize }}>
      {text}
    </span>
  )
}

export default AuroraTextEffect
