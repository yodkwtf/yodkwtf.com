import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (R) => R.required() }),
    defineField({ name: "summary", type: "text", rows: 3, validation: (R) => R.required() }),
    defineField({ name: "description", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({ name: "techStack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "clientWork", type: "boolean", initialValue: false }),
    defineField({ name: "githubUrl", type: "url" }),
    defineField({ name: "liveUrl", type: "url" }),
    defineField({ name: "thumbnail", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }] }),
    defineField({ name: "metrics", type: "array", of: [{ type: "object", fields: [{ name: "label", type: "string" }, { name: "value", type: "string" }] }] }),
    defineField({ name: "timeline", type: "string" }),
    defineField({ name: "challenges", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "solutions", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "architectureDetails", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "publishedAt", type: "date" }),
  ],
  preview: { select: { title: "title", subtitle: "summary", media: "thumbnail" } },
});
