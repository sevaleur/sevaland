import { getContent } from "@/app/_actions/contentActions";
import { urlFor } from "@/sanity/lib/image";
import { getImageDimensions } from "@sanity/asset-utils";

import Link from "next/link";
import Image from "next/image";

const Page = async () => {
  const content = (
    await getContent({
      type: `"projects"`,
      params:
        "{ ..., projects[]->{ title, _id, 'slug': slug.current, 'preview': gallery[0], gear } }",
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
              <div className="h-[10rem] w-full p-4">
                <div>
                  <h2>{project.title}</h2>
                </div>
                <div>
                  <p>{project.gear.films[0]}</p>
                </div>
                <figure className="h-full w-full">
                  <Image
                    alt={project.preview.alt}
                    src={urlFor(project.preview.asset._ref).url()}
                    width={getImageDimensions(project.preview.asset._ref).width}
                    height={
                      getImageDimensions(project.preview.asset._ref).height
                    }
                    placeholder="blur"
                    blurDataURL={urlFor(project.preview.asset._ref)
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
