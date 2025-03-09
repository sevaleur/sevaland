import { getContent } from "@/app/_actions/contentActions";

export default async function Home() {
  const content = (await getContent({ type: `"home"` }))[0];

  console.log(content);
  return (
    <div className="h-screen w-full grid place-content-center">
      <h1 className="text-8xl">{content.title}</h1>
    </div>
  );
}
