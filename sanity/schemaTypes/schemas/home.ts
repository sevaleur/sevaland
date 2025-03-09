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
              validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      type: "object",
      title: "Work Section",
      fields: [
        defineField({
          name: "work",
          type: "array",
          title: "Work",
          options: { layout: "list" },
          validation: (Rule) => Rule.length(7).unique(),
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
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "parallax",
      type: "object",
      title: "Text Parallax",
      fields: [
        defineField({
          name: "images",
          type: "array",
          title: "Images",
          options: { layout: "list" },
          validation: (Rule) => Rule.length(3).unique(),
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
                  name: "text",
                  type: "string",
                  title: "Text",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "shop",
      type: "object",
      title: "Shop section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "description",
          type: "text",
          title: "Description",
        }),
        defineField({
          name: "link",
          type: "string",
          title: "Link text",
        }),
        defineField({
          name: "prints",
          type: "array",
          title: "Prints",
          options: { layout: "grid" },
          validation: (Rule) => Rule.length(9).unique(),
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
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "about",
      type: "object",
      title: "About section",
      fields: [
        defineField({
          name: "title",
          type: "string",
          title: "Title",
        }),
        defineField({
          name: "leftColumn",
          type: "object",
          title: "Left Column",
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
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
            defineField({
              name: "introduction",
              type: "text",
              title: "Introduction",
            }),
          ],
        }),
        defineField({
          name: "description",
          type: "text",
          title: "Description",
        }),
        defineField({
          name: "socials",
          type: "array",
          title: "Socials",
          options: { layout: "list" },
          of: [
            defineField({
              name: "icon",
              type: "image",
              title: "Icon",
              fields: [
                defineField({
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: "href",
                  type: "url",
                  title: "Url",
                  validation: (Rule) => Rule.required(),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});

export default home;
