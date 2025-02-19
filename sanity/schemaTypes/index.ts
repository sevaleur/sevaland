import { type SchemaTypeDefinition } from "sanity";

import home from "./schemas/home";
import projects from "./schemas/projects";
import project from "./schemas/project";
import about from "./schemas/about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, projects, project, about],
};
