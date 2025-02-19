import { getContent } from "@/app/_actions/contentActions";

export default async function Home() {
  const content = (await getContent({ path: "home" }))[0];

  return (
    <main className="h-full w-full">
      <h1 className="grid place-content-center text-8xl">{content.title}</h1>
    </main>
  );
}
