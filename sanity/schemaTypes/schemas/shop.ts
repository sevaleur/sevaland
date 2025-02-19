import { defineType, defineField } from "sanity";

const shop = defineType({
  name: "shop",
  type: "document",
  title: "Shop",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
  ],
});

export default shop;
