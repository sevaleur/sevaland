"use client";

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

import { useRef } from "react";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/sanity/lib/image";
import { useGSAP } from "@gsap/react";

const ColumnElement = ({
  slug,
  title,
  description,
  alt,
  image,
}: {
  slug: string;
  title: string;
  description: string;
  alt: string;
  image: string;
}) => {
  gsap.registerPlugin(useGSAP);

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const timelineRef = useRef<GSAPTimeline | null>(null);

  const { contextSafe } = useGSAP(
    () => {
      timelineRef.current = gsap.timeline({
        duration: 0.4,
        ease: "power2.inOut",
        paused: true,
      });

      timelineRef.current?.fromTo(
        imageRef.current,
        { scale: 0.95 },
        { scale: 1.0 },
      );
    },
    { scope: containerRef },
  );

  const handleMouseEnter = contextSafe(() => {
    timelineRef.current?.play();
  });

  const handleMouseLeave = contextSafe(() => {
    timelineRef.current?.reverse();
  });

  return (
    <Link
      href={`/projects/${slug}`}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[25rem] h-full relative">
        <div className="absolute top-6 -right-6 vertical-writing-lr orientation-sideways">
          <h2>{title}</h2>
        </div>
        <div className="absolute bottom-6 -left-6 vertical-writing-lr orientation-sideways -scale-[1]">
          <p>{description}</p>
        </div>
        <figure className="h-full w-full" ref={imageRef}>
          <Image
            className="h-full w-full object-cover"
            alt={alt}
            src={urlFor(image).url()}
            width={getImageDimensions(image).width}
            height={getImageDimensions(image).height}
            placeholder="blur"
            blurDataURL={urlFor(image).width(24).height(24).blur(10).url()}
          />
        </figure>
      </div>
    </Link>
  );
};

export default ColumnElement;
