"use client";

import ColumnElement from "./ColumnElement";

const ColumnMenu = ({ data }: { data: Array<Record<PropertyKey, string>> }) => {
  return (
    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[253px] w-fit h-fit flex flex-col">
      {data &&
        data.map((obj: Record<PropertyKey, string>) => (
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
  );
};

export default ColumnMenu;
