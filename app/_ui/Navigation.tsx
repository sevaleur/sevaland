import Link from "next/link";
import Image from "next/image";

import { getContent } from "@/app/_actions/contentActions";
import { urlFor } from "@/sanity/lib/image";
import { getImageDimensions } from "@sanity/asset-utils";

const Navigation = async () => {
  const content = (await getContent({ type: `"navigation"` }))[0];

  return (
    <nav className="w-full p-8 fixed top-0 left-0">
      <div className="w-full flex justify-between">
        <Link href="/">
          {content.logo.asset ? (
            <figure>
              <Image
                alt={content.logo.alt}
                src={urlFor(content.logo.asset._ref).url()}
                width={getImageDimensions(content.logo.asset._ref).width}
                height={getImageDimensions(content.logo.asset._ref).height}
                placeholder="blur"
                blurDataURL={urlFor(content.logo.asset._ref)
                  .width(24)
                  .height(24)
                  .blur(10)
                  .url()}
              />
            </figure>
          ) : (
            <p>{content.logo.alt}</p>
          )}
        </Link>
        <ul className="flex gap-8">
          {content.links &&
            content.links.map((link: Record<PropertyKey, string>) => (
              <li key={link._key}>
                <Link href={`/${link._ref}`}>
                  <p className="capitalize">{link._ref}</p>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
