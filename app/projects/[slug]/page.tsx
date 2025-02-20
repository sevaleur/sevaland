import { getContent } from "@/app/_actions/contentActions";
import { urlFor } from "@/sanity/lib/image";
import { getImageDimensions } from "@sanity/asset-utils";

import Image from "next/image";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const content = (
    await getContent({
      type: `"project" && slug.current=="${slug}"`,
    })
  )[0];

  return (
    <div className="w-full h-screen grid place-content-center">
      {content.gallery &&
        content.gallery.map((el: Record<PropertyKey, string>) => (
          <div key={el._key} className="w-[20rem]">
            <figure className="h-full w-full">
              <Image
                alt={el.alt}
                src={urlFor(el.asset._ref).url()}
                width={getImageDimensions(el.asset._ref).width}
                height={getImageDimensions(el.asset._ref).height}
                placeholder="blur"
                blurDataURL={urlFor(el.asset._ref)
                  .width(24)
                  .height(24)
                  .blur(10)
                  .url()}
              />
            </figure>
          </div>
        ))}
    </div>
  );
};

export default Page;
