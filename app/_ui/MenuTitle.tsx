"use client";

import gsap from "gsap";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const MenuTitle = ({
  length,
  title,
  link,
}: {
  length: number;
  title: Array<string>;
  link: string;
}) => {
  gsap.registerPlugin(useGSAP);

  const container = useRef(null);
  const border = useRef(null);
  const tl = useRef<GSAPTimeline | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      tl.current = gsap.timeline({
        duration: 0.4,
        ease: "power2.inOut",
        paused: true,
      });

      tl.current?.to(border.current, { scaleX: 1.0 });
    },
    { scope: container },
  );

  const handleMouseOver = contextSafe(() => {
    tl.current?.play();
  });

  const handleMouseLeave = contextSafe(() => {
    tl.current?.reverse();
  });

  return (
    <div className="flex flex-col fixed bottom-0 left-10 p-4">
      <div className="absolute left-16 top-0">
        <p>[{length}]</p>
      </div>
      <div className="h-fit w-[30rem]">
        <h1 className="h-full w-full text-8xl flex flex-col uppercase">
          {title &&
            title.map((t: string) => (
              <span className="first:self-end last:self-start" key={t}>
                {t}
              </span>
            ))}
        </h1>
      </div>
      <div
        className="absolute bottom-6 right-10 cursor-pointer"
        ref={container}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <p>{link}</p>
        <div
          className="h-[1px] w-full bg-white origin-left scale-x-0"
          ref={border}
        />
      </div>
    </div>
  );
};

export default MenuTitle;
