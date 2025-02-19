import Link from "next/link";

import { getContent } from "@/app/_actions/contentActions";

const Navigation = async () => {
  const content = (await getContent({ type: "navigation" }))[0];
  return (
    <nav className="w-full p-4 fixed top-0 left-0">
      <div className="w-full flex justify-between">
        <Link href="/">
          <p>{content.logo.alt}</p>
        </Link>
        <ul className="flex gap-4">
          {content.links &&
            content.links.map(
              (link: { _ref: string; _key: string; _type: string }) => (
                <li key={link._key}>
                  <Link href={`/${link._ref}`}>
                    <p className="capitalize">{link._ref}</p>
                  </Link>
                </li>
              ),
            )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
