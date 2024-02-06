import React, { useRef } from "react";
import hover3d from "../utils/hover";
import Image from "next/image";

const ZoomSection: React.FC = () => {
  const hero = useRef<HTMLDivElement>(null);

  const hover = hover3d(hero, {
    x: -5,
    y: 10,
    z: 4,
  });

  const hover2 = hover3d(hero, {
    x: 40,
    y: 20,
    z: 7,
  });

  const hover3 = hover3d(hero, {
    x: -40,
    y: -20,
    z: -7,
  });

  return (
    <div
      ref={hero}
      className="relative overflow-hidden border rounded border-gray-300"
    >
      <div className="image h-[50rem] w-full relative">
        <Image
          src="/images/spiral.svg"
          alt="bulb tree"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          style={{
            transform: hover.transform,
            scale: 1.2,
            background: "var(--color-bg)",
          }}
        />

        <Image
          src="/images/arm2.jpg"
          alt="bulb tree"
          className="absolute top-10 right-12 monkey"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            objectPosition: "50% 0%",
            transform: hover2.transform,
            transition: hover2.transition,
          }}
        />

        <Image
          src="/images/arm.jpg"
          alt="bulb tree"
          className="absolute top-10 left-12 smoke"
          width={500}
          height={500}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            transform: hover3.transform,
            transition: hover3.transition,
          }}
        />
      </div>
    </div>
  );
};

export default ZoomSection;
