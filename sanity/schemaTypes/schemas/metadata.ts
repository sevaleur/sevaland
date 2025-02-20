import { defineType, defineField } from "sanity";

const metadata = defineType({
  name: "metadata",
  type: "document",
  title: "Metadata",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
  ],
});

export default metadata;
