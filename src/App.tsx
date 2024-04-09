import { useState, useEffect } from 'react';

const messages = [
  `<strong>VPS — Virtual Private Server, Servidor Privado Virtual</strong> — una máquina virtual que se alquila a un proveedor de hosting.`,
  `<strong>Self-hosting o auto-alojamiento</strong> — ejecutar y mantener un sitio web o un servicio en un servidor propio, a diferencia de utilizar un servicio controlado por terceros.`,
];

export default function App() {
  const titleStyles = "[font-size:_clamp(2em,2vw,10em)] text-center text-gray-800 leading-none text-balance text-pretty";
  const cardStyles = `w-full h-fit
                      shadow-xl drop-shadow-lg
                      flex flex-col justify-center items-center
                      bg-gray-100 px-6 py-4 h-fit w-fit rounded-xl`;

  const [isVisible, setIsVisible] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    } else if (event.key === 'ArrowLeft') {
      setCurrentMessageIndex((prevIndex) => (prevIndex - 1 + messages.length) % messages.length);
    } else if (event.key === ' ') { // Check if spacebar is pressed
      setIsVisible(!isVisible); // Hide the message
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  useEffect(() => {
    // Reset isVisible to true whenever currentMessageIndex changes
    setIsVisible(true);
  }, [currentMessageIndex]);

  return (
    <>
      <main className="container p-8 flex flex-col gap-2 w-[700px] h-[500px] overflow-clip items-center bg-[#00ff00]">
        {isVisible && ( // Render message only if isVisible is true
          <div className={cardStyles}>
            <p
              className={titleStyles}
              dangerouslySetInnerHTML={{ __html: messages[currentMessageIndex] }}
            />
          </div>
        )}
      </main>
    </>
  );
}