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
      name: "header",
      type: "object",
      title: "Header",
      fields: [
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
        defineField({
          name: "description",
          type: "text",
          title: "Description",
        }),
      ],
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
  ],
});

export default home;
