import { getContent } from "@/app/_actions/contentActions";

import ColumnMenu from "@/app/_ui/ColumnMenu";

const Page = async () => {
  const content = (
    await getContent({
      type: `"projects"`,
      params:
        "{ ..., projects[]->{ title, _id, 'slug': slug.current, 'preview': gallery[0].asset._ref, 'alt': gallery[0].alt, yop } }",
    })
  )[0];

  const title = content?.title?.split(/\s/g);

  return (
    <div className="h-screen w-full grid place-content-center relative">
      <div className="flex flex-col fixed bottom-0 left-10 p-4">
        <div className="absolute left-16 top-0">
          <p>[{content.projects.length}]</p>
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
        <div className="absolute bottom-6 right-10">
          <p>view all</p>
        </div>
      </div>
      <ColumnMenu data={content.projects} />
    </div>
  );
};

export default Page;
