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

export default metadata;
