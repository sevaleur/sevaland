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
    defineField({
      name: "projects",
      type: "array",
      title: "Projects",
      options: { layout: "list" },
      validation: (Rule) => Rule.min(1).unique(),
      of: [
        defineField({
          name: "link",
          type: "reference",
          title: "Project",
          to: [
            {
              type: "project",
            },
          ],
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

export default projects;
