import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { projectSchema } from "./schemas/project";
import { skillSchema, experienceSchema, aboutSchema, socialLinkSchema } from "./schemas/index";
import { projectId, dataset, apiVersion } from "./lib/client";

export default defineConfig({
  basePath: "/admin",
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [projectSchema, skillSchema, experienceSchema, aboutSchema, socialLinkSchema],
  },
});
