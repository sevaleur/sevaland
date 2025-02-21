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
      name: "email",
      type: "email",
      title: "Email",
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Navigation menu",
      validation: (Rule) => Rule.unique(),
      of: [
        defineField({
          name: "link",
          type: "reference",
          title: "Link",
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
    }),
  ],
});

export default navigation;
