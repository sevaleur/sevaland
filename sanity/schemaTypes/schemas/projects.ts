import { defineType, defineField } from "sanity";

const projects = defineType({
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
  ],
});

export default projects;
