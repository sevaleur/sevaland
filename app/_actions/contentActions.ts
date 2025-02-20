"use server";

import { client } from "@/sanity/lib/client";

export const getContent = async ({
  type,
  params,
}: {
  type: string;
  params?: string;
}) => {
  const query = `*[_type == "${type}"] ${params ? params : " "}`;
  const content = await client.fetch(query);
  return content;
};
