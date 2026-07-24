import { defineField, defineType } from "sanity";

export const projectSchema = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (R) => R.required() }),
    defineField({
      name: "summary",
      type: "text",
      rows: 3,
      description: "Short summary shown on cards. Required for featured projects.",
      validation: (R) =>
        R.custom((summary, context) =>
          (context.document as { featured?: boolean } | undefined)?.featured && !summary
            ? "Summary is required for featured projects"
            : true,
        ),
    }),
    defineField({ name: "techStack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({ name: "clientWork", type: "boolean", initialValue: false }),
    defineField({ name: "githubUrl", type: "url", description: "The project detail page renders this repo's README" }),
    defineField({ name: "liveUrl", type: "url" }),
    defineField({ name: "thumbnail", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }),
  ],
  preview: { select: { title: "title", subtitle: "summary", media: "thumbnail" } },
});
