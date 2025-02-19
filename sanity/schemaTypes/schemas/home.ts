import { defineField, defineType } from "sanity";

const home = defineType({
  name: "home",
  type: "document",
  title: "Home",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
  ],
});

export default home;
