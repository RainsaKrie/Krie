import { useEffect, useState } from "react";

const CHARSET = "01EX_INFRA";

export default function DecryptText({ text }) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;
    const interval = window.setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((character, index) => {
            if (character === " ") {
              return " ";
            }

            if (index < iteration) {
              return character;
            }

            return CHARSET[Math.floor(Math.random() * CHARSET.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        window.clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 25);

    return () => window.clearInterval(interval);
  }, [text]);

  return <span className="font-mono">{displayText}</span>;
}
