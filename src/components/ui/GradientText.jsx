import "./GradientText.css";

export default function GradientText({
  children,
  className = "",
colors = [
  "#FFD600", // Amarillo eléctrico - muy vibrante
  "#FF7A00", // Naranja intenso - da energía y recuerda a Fnatic
  "#40FFAA", // Verde agua neón - conecta con tu gama anterior pero con más fuerza
  "#A6FF00", // Verde lima flúor - máximo contraste con fondo
  "#FFD600"  // Repites amarillo para cerrar el degradado
],  animationSpeed = 8,
  showBorder = false
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={gradientStyle}>{children}</div>
    </div>
  );
}
