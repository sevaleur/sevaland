import { type SchemaTypeDefinition } from "sanity";

import metadata from "./schemas/metadata";
import navigation from "./schemas/navigation";
import home from "./schemas/home";
import projects from "./schemas/projects";
import project from "./schemas/project";
import shop from "./schemas/shop";
import about from "./schemas/about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [metadata, navigation, home, projects, project, shop, about],
};
