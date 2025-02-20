import { getContent } from "@/app/_actions/contentActions";
import { urlFor } from "@/sanity/lib/image";

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
          <Image
            key={el._key}
            alt={el.alt}
            src={urlFor(el.asset._ref).url()}
            width={550}
            height={550}
          />
        ))}
    </div>
  );
};

export default Page;
