"use server";

import { client } from "@/sanity/lib/client";

export const getContent = async ({
  type,
  params,
}: {
  type: string;
  params?: JSON | undefined;
}) => {
  console.log({ params });
  const query = `*[_type == "${type}"] ${params ? { params } : " "}`;
  console.log(query);
  const content = await client.fetch(query);
  console.log(content);
  return content;
};
