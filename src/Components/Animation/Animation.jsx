import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
const CanvasAnimation = () => {
  const canvasRef = useRef(null);
  const isMobile = useMediaQuery({ query: '(max-width: 62.5em)' });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
      dx: Math.random() * 0.5 - 0.25,
      dy: Math.random() * 0.5 - 0.25,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 197, 46, ${star.opacity})`;
        ctx.fill();
        star.x += star.dx;
        star.y += star.dy;

        if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
      });
      requestAnimationFrame(draw);
    };

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={isMobile ? document.getElementById("tim").offsetWidth * 1.2 : document.getElementById("tim").offsetWidth}
      height={document.getElementById("tim").offsetHeight}
      style={{ position: "absolute", top: 0, left: isMobile ? 0: "50%" , zIndex: 1, transform: isMobile ? "translateX(0)" : "translateX(-50%)", borderRadius: "2rem" }}
    />
  );
};

export default CanvasAnimation;


