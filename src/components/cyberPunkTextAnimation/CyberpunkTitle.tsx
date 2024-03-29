import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

interface CyberpunkTitleProps {
  children: React.ReactNode;
  className?: string;
}

const CyberpunkTitle: React.FC<CyberpunkTitleProps> = ({
  children,
  className,
}) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleMouseMove = () => {
    if (titleRef.current) {
      let iterations = 0;

      const interval = setInterval(() => {
        titleRef.current!.innerText = titleRef
          .current!.innerText.split("")
          .map((letter, index) => {
            if (index < iterations) {
              return (titleRef.current!.dataset.value = children as string)[
                index
              ];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (
          iterations >=
          (titleRef.current!.dataset.value = children as string).length
        )
          clearInterval(interval);

        iterations += 1 / 4;
      }, 300);
    }
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.innerText = children as string;
    }
  }, [children]);

  return (
    <div>
      <h1 ref={titleRef} data-value={children} onMouseMove={handleMouseMove}>
        {children}
      </h1>
    </div>
  );
};

CyberpunkTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default CyberpunkTitle;
