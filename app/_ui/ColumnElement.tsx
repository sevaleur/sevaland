"use client";

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

import { useRef } from "react";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/sanity/lib/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  const container = useRef(null);
  const element = useRef(null);
  const timeline = useRef<GSAPTimeline | null>(null);

  useGSAP(
    () => {
      timeline.current = gsap.timeline({
        scrollTrigger: {
          trigger: element.current,
          scrub: true,
          start: "top bottom",
          end: "+=500px",
        },
      });

      timeline.current?.from(element.current, { scaleX: 0.8 });
    },
    { scope: container },
  );

  return (
    <Link href={`/projects/${slug}`} ref={container}>
      <div className="w-[25rem] h-full p-4 relative">
        <div className="absolute top-4 -right-2 vertical-writing-lr orientation-sideways">
          <h2>{title}</h2>
        </div>
        <div className="absolute bottom-4 -left-2 vertical-writing-lr orientation-sideways -scale-[1]">
          <p>{description}</p>
        </div>
        <figure className="h-full w-full" ref={element}>
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
