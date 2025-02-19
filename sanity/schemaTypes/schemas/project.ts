import { defineType, defineField } from "sanity";

const project = defineType({
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
  ],
});

export default project;
