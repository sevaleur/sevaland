import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/sanity/lib/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ColumnMenu = ({ data }: { data: Array<Record<PropertyKey, string>> }) => {
  return (
    <div className="w-fit h-full relative">
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[195px] w-fit h-fit  flex flex-col gap-4 ">
        {data &&
          data.map((obj: Record<PropertyKey, string>) => (
            <Link href={`/projects/${obj.slug}`} key={obj._id}>
              <div className="w-[25rem] h-full p-4 relative">
                <div className="absolute top-4 -right-2 vertical-writing-lr orientation-sideways">
                  <h2>{obj.title}</h2>
                </div>
                <div className="absolute bottom-4 -left-2 vertical-writing-lr orientation-sideways -scale-[1]">
                  <p>{obj.yop}</p>
                </div>
                <figure className="h-full w-full">
                  <Image
                    className="h-full w-full object-cover"
                    alt={obj.alt}
                    src={urlFor(obj.preview).url()}
                    width={getImageDimensions(obj.preview).width}
                    height={getImageDimensions(obj.preview).height}
                    placeholder="blur"
                    blurDataURL={urlFor(obj.preview)
                      .width(24)
                      .height(24)
                      .blur(10)
                      .url()}
                  />
                </figure>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ColumnMenu;
