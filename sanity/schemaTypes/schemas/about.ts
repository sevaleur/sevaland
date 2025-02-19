import { defineType, defineField } from "sanity";

const about = defineType({
  name: "about",
  type: "document",
  title: "About",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
  ],
});

export default about;
