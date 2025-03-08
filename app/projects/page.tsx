import ColumnMenu from "@/app/_ui/ColumnMenu";
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
        link="/showall"
        text="view all"
      />
      <div className="w-fit h-full relative ">
        <ColumnMenu data={content.projects} />
      </div>
      <div className="text-md fixed right-28 top-[50%]">
        <p>{content.description}</p>
      </div>
    </div>
  );
};

export default Page;
