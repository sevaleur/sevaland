import { defineType, defineField } from "sanity";

const navigation = defineType({
  name: "navigation",
  type: "document",
  title: "Navigation",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "links",
      type: "reference",
      title: "Links",
      to: [
        {
          type: "projects",
        },
        {
          type: "shop",
        },
        {
          type: "about",
        },
      ],
    }),
  ],
});

export default navigation;
