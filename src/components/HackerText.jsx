import React, { useState, useEffect } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const HackerText = ({ text, className = "" }) => {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let iteration = 0;
        let interval = null;

        const scramble = () => {
            clearInterval(interval);

            interval = setInterval(() => {
                setDisplayText(prev =>
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }

                            if (letter === " ") return " ";

                            return letters[Math.floor(Math.random() * 26)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);
        };

        scramble();

        return () => clearInterval(interval);
    }, [text]);

    return <span className={className}>{displayText}</span>;
};

export default HackerText;
