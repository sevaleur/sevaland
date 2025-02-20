import { defineType, defineField } from "sanity";

const nfts = defineType({
  name: "nfts",
  type: "document",
  title: "NFTs",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
  ],
});

export default nfts;
