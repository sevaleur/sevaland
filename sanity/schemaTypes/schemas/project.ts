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
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
    }),
    defineField({
      name: "gear",
      type: "object",
      title: "Gear",
      fields: [
        defineField({
          name: "formats",
          type: "array",
          title: "Formats",
          options: { layout: "list" },
          validation: (Rule) => Rule.min(1),
          of: [
            defineField({
              name: "format",
              type: "number",
              title: "Format",
            }),
          ],
        }),
        defineField({
          name: "films",
          type: "array",
          title: "Films",
          options: { layout: "list" },
          validation: (Rule) => Rule.min(1),
          of: [
            defineField({
              name: "film",
              type: "string",
              title: "Film",
            }),
          ],
        }),
        defineField({
          name: "equipment",
          type: "array",
          title: "Equipment",
          options: { layout: "list" },
          validation: (Rule) => Rule.min(1),
          of: [
            defineField({
              name: "model",
              type: "string",
              title: "Model",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "gallery",
      type: "array",
      title: "Gallery",
      options: { layout: "grid" },
      validation: (Rule) => Rule.unique().min(1),
      of: [
        defineField({
          name: "image",
          type: "image",
          title: "Image",
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "film",
              type: "string",
              title: "Film",
            }),
          ],
        }),
      ],
    }),
  ],
});

export default project;
