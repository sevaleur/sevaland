import { getContent } from "@/app/_actions/contentActions";

import Link from "next/link";

const Page = async () => {
  const content = (
    await getContent({
      type: "projects",
      params: "{ ..., projects[]-> }",
    })
  )[0];

  console.log(content.projects);

  return (
    <div className="h-screen w-full grid place-content-center">
      <h1 className="text-8xl">{content.title}</h1>

      <div>
        {content.projects &&
          content.projects.map((project: Record<PropertyKey, string>) => (
            <div key={project._id}>
              <Link href={`/projects/${project.slug.current}`}>
                <h2>{project.title}</h2>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
