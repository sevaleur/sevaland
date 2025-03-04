import ColumnElement from "@/app/_ui/ColumnElement";
import MenuTitle from "@/app/_ui/MenuTitle";

import { getContent } from "@/app/_actions/contentActions";

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
      <MenuTitle
        length={content.projects.length}
        title={title}
        link="view all"
      />
      <div className="w-fit h-full relative">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[195px] w-fit h-fit  flex flex-col gap-4 ">
          {content.projects &&
            content.projects.map((obj: Record<PropertyKey, string>) => (
              <ColumnElement
                key={obj._id}
                slug={obj.slug}
                title={obj.title}
                description={obj.yop}
                alt={obj.alt}
                image={obj.preview}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
