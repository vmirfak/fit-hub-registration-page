import { useState, useEffect } from 'react';
import { CheckCircle, ArrowLeftCircle } from 'lucide-react';

// Main Success Message Component
interface SuccessMessageProps {
    resetForm: () => void;
}

export default function SuccessMessage({ resetForm }: SuccessMessageProps) {
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md text-center relative overflow-hidden border-t-4 border-green-500">
                {showConfetti && <Confetti />}
                <SuccessIcon />

                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Formulário enviado com sucesso!
                </h2>

                <p className="mb-6 text-gray-600">
                    Obrigado por preencher o formulário. Nossa equipe analisará suas informações
                    e entraremos em contato em breve.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={resetForm}
                        className="flex cursor-pointer items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                    >
                        <ArrowLeftCircle size={18} />
                        <span>Preencher outro formulário</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

// Separated Success Icon Component
function SuccessIcon() {
    return (
        <div className="mb-6">
            <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
        </div>
    );
}

// Confetti Component
function Confetti() {
    // Create an array of confetti pieces
    const confettiPieces = Array.from({ length: 50 }).map((_, index) => {
        const colors = ['#FFC107', '#2196F3', '#4CAF50', '#E91E63', '#9C27B0'];
        return {
            id: index,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 8 + 5}px`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            isCircle: Math.random() > 0.5,
            animationDuration: `${Math.random() * 2 + 1}s`,
            animationDelay: `${Math.random() * 0.5}s`,
            rotation: Math.random() * 360,
        };
    });

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {confettiPieces.map((piece) => (
                <div
                    key={piece.id}
                    style={{
                        position: 'absolute',
                        left: piece.left,
                        top: '-20px',
                        width: piece.size,
                        height: piece.size,
                        backgroundColor: piece.backgroundColor,
                        borderRadius: piece.isCircle ? '50%' : '0',
                        transform: `rotate(${piece.rotation}deg)`,
                        animation: `fall ${piece.animationDuration} linear forwards`,
                        animationDelay: piece.animationDelay,
                    }}
                />
            ))}
            <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(500px) rotate(720deg); opacity: 0; }
        }
      `}</style>
        </div>
    );
}