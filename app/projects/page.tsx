import { getContent } from "@/app/_actions/contentActions";
import { getImageDimensions } from "@sanity/asset-utils";
import { urlFor } from "@/sanity/lib/image";

import Link from "next/link";
import Image from "next/image";

const Page = async () => {
  const content = (
    await getContent({
      type: `"projects"`,
      params:
        "{ ..., projects[]->{ title, _id, 'slug': slug.current, 'preview': gallery[0].asset._ref, 'alt': gallery[0].alt, yop } }",
    })
  )[0];

  console.log(content.projects);

  return (
    <div className="h-screen w-full grid place-content-center relative">
      <h1 className="absolute top-50 left-0 text-8xl">{content.title}</h1>

      <div className="w-1/2 h-full flex flex-col gap-4">
        {content.projects &&
          content.projects.map((project: Record<PropertyKey, string>) => (
            <Link href={`/projects/${project.slug}`} key={project._id}>
              <div className="w-[20rem] h-full p-4 relative">
                <div className="absolute top-4 -right-2 vertical-writing-lr orientation-sideways">
                  <h2>{project.title}</h2>
                </div>
                <div className="absolute bottom-4 -left-2 vertical-writing-lr orientation-sideways">
                  <p>{project.yop}</p>
                </div>
                <figure className="h-full w-full">
                  <Image
                    className="h-full w-full object-cover"
                    alt={project.alt}
                    src={urlFor(project.preview).url()}
                    width={getImageDimensions(project.preview).width}
                    height={getImageDimensions(project.preview).height}
                    placeholder="blur"
                    blurDataURL={urlFor(project.preview)
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

export default Page;
