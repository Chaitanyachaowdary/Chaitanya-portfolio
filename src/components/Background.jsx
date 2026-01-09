import React from 'react';

const Background = () => {
    const [particles, setParticles] = React.useState([]);

    React.useEffect(() => {
        const generatedParticles = [...Array(15)].map(() => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 300 + 50}px`,
            height: `${Math.random() * 300 + 50}px`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.3
        }));
        setParticles(generatedParticles);
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-dark pointer-events-none">
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 opacity-20 bg-gradient-to-tr from-primary/10 via-dark to-purple-500/10 animate-pulse" />

            {/* Floating 3D Shapes */}
            {particles.map((style, i) => (
                <div
                    key={i}
                    className="absolute bg-white/5 backdrop-blur-3xl rounded-full mix-blend-overlay animate-float"
                    style={style}
                />
            ))}

            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg) scale(1);
                    }
                    50% {
                        transform: translateY(-20px) rotate(10deg) scale(1.1);
                    }
                }
                .animate-float {
                    animation-name: float;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: infinite;
                }
            `}</style>
        </div>
    );
};

export default Background;
