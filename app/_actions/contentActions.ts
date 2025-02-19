"use server";

import { client } from "@/sanity/lib/client";

export const getContent = async ({ path }: { path: string }) => {
  const query = `*[_type == "${path}"]`;
  const content = await client.fetch(query);
  return content;
};
