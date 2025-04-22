import { useMediaQuery } from "react-responsive";

const Animation = () => {

    const animations = {
      1: 'moveLeft',
      2: 'moveRight',
      3: 'moveUp',
      4: 'moveDown'
    }

    const isMobile = useMediaQuery({ query: '(max-width: 62.5em)' });

  return (
    <>
      <div className="animation-container">
        {[...Array(1200)].map((_, i) => (
          <div
            key={i}
            className="dot"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              width: `${Math.floor(Math.random()*5)}px`,
              opacity: `${Math.floor(Math.random()* 6 + 5)/10}`,
              animation: `${animations[Math.floor(Math.random() * 4) + 1]} 40s ease-in-out infinite`,
              
            }}
          />
        ))}
      </div>
      <style>{`
        .animation-container {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: ${isMobile ? '100%' : '70%'};
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        .dot {
          position: absolute;
          border-radius: 100vw;
          aspect-ratio: 1/1;
          background-color: #efc52e;
          mix-blend-mode: multiply;
        }
        @keyframes moveLeft {
          0% {
            transform: translateX(0);
          }
          50%{
            transform: translateX(-40vw);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes moveRight {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(40vw);
          }
          100%{
            transform: translateX(0);
          }  
        }
        @keyframes moveUp {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-40vh);
          }
          100%{
            transform: translateY(0);
          }  
        }
        @keyframes moveDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(40vh);
          }
          100%{
            transform: translateY(0);}  
        }
      `}</style>
    </>
  );
};

export default Animation;

