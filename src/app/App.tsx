import { useState } from 'react';
import { Heart } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import bearImage from 'figma:asset/e0755232883d2cac36d306587e70d2e09f1e9f4b.png';

export default function App() {
  const [answered, setAnswered] = useState(false);
  const [answer, setAnswer] = useState('');
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  const handleYes = () => {
    setAnswered(true);
    setAnswer('yes');
  };

  const handleNo = () => {
    setAnswered(true);
    setAnswer('no');
  };

  const moveNoButton = () => {
    // Generate random position
    const maxX = 200;
    const maxY = 200;
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="size-full min-h-screen bg-pink-100 flex items-center justify-center relative overflow-hidden">
      {/* OnlyFans logo link - far left */}
      <a 
        href="https://onlyfans.wtf/gayofarc" 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-4 left-4 md:top-8 md:left-8 z-20 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
      >
        <svg 
          viewBox="0 0 40 40" 
          className="w-8 h-8 md:w-12 md:h-12"
          fill="#00AFF0"
        >
          <circle cx="20" cy="20" r="18" fill="#00AFF0"/>
          <text 
            x="20" 
            y="26" 
            textAnchor="middle" 
            fill="white" 
            fontSize="20" 
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            OF
          </text>
        </svg>
      </a>

      {/* Floating hearts decoration */}
      <Heart className="absolute top-10 left-10 text-pink-300 w-8 h-8 animate-pulse" fill="currentColor" />
      <Heart className="absolute top-20 right-20 text-pink-400 w-6 h-6 animate-pulse" fill="currentColor" style={{ animationDelay: '0.5s' }} />
      <Heart className="absolute bottom-20 left-20 text-pink-300 w-10 h-10 animate-pulse" fill="currentColor" style={{ animationDelay: '1s' }} />
      <Heart className="absolute bottom-32 right-32 text-pink-400 w-7 h-7 animate-pulse" fill="currentColor" style={{ animationDelay: '1.5s' }} />
      <Heart className="absolute top-1/3 left-1/4 text-pink-200 w-5 h-5 animate-pulse" fill="currentColor" style={{ animationDelay: '0.3s' }} />
      <Heart className="absolute top-2/3 right-1/4 text-pink-300 w-6 h-6 animate-pulse" fill="currentColor" style={{ animationDelay: '0.8s' }} />
      
      {/* Main content */}
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-md text-center relative z-10">
        {!answered ? (
          <>
            {/* Bear image */}
            <div className="mb-6">
              <ImageWithFallback
                src={bearImage}
                alt="Cute Valentine Bear"
                className="w-64 h-64 object-contain rounded-2xl mx-auto"
              />
            </div>
            
            {/* Message */}
            <h1 className="text-4xl mb-8 text-pink-600">
              Would you be my Valentine?
            </h1>
            
            {/* Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleYes}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Yes! 💕
              </button>
              <button
                onClick={handleNo}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-8 py-3 rounded-full text-xl transition-all transform hover:scale-105 shadow-lg"
                style={{ transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)` }}
                onMouseEnter={moveNoButton}
              >
                No
              </button>
            </div>
          </>
        ) : (
          <div className="py-8">
            {answer === 'yes' ? (
              <>
                <div className="text-6xl mb-4">🎉💖🐻</div>
                <h2 className="text-3xl text-pink-600 mb-4">I love you so much Amela!</h2>
                <p className="text-xl text-gray-600">Thank you for choosing me for your Valentine! 💕</p>
              </>
            ) : (
              <>
                <div className="text-6xl mb-4">🥺💔</div>
                <h2 className="text-3xl text-gray-600 mb-4">Oh no...</h2>
                <p className="text-xl text-gray-500">Maybe next time? 🐻</p>
              </>
            )}
            <button
              onClick={() => {
                setAnswered(false);
                setAnswer('');
              }}
              className="mt-6 bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full transition-all"
            >
              Ask again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}