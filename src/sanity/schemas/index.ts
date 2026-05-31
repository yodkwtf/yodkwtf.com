import { defineField, defineType } from "sanity";

export const skillSchema = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "category", type: "string", options: { list: ["Languages", "Frontend", "Backend", "Database", "DevOps", "Tools", "Other"] } }),
    defineField({ name: "icon", type: "string" }),
    defineField({ name: "proficiency", type: "number", validation: (R) => R.min(1).max(5) }),
    defineField({ name: "order", type: "number" }),
  ],
});

export const experienceSchema = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "company", type: "string", validation: (R) => R.required() }),
    defineField({ name: "role", type: "string", validation: (R) => R.required() }),
    defineField({ name: "startDate", type: "date" }),
    defineField({ name: "endDate", type: "date" }),
    defineField({ name: "current", type: "boolean", initialValue: false }),
    defineField({ name: "description", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "techStack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "companyUrl", type: "url" }),
    defineField({ name: "logo", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }),
    defineField({ name: "order", type: "number" }),
  ],
  preview: { select: { title: "role", subtitle: "company" } },
});

export const aboutSchema = defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({ name: "headline", type: "string" }),
    defineField({ name: "subheadline", type: "string" }),
    defineField({ name: "bio", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "journey", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "philosophy", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "avatar", type: "image", options: { hotspot: true }, fields: [{ name: "alt", type: "string" }] }),
    defineField({ name: "resumeUrl", type: "url" }),
  ],
});

export const socialLinkSchema = defineType({
  name: "socialLink",
  title: "Social Link",
  type: "document",
  fields: [
    defineField({ name: "platform", type: "string" }),
    defineField({ name: "url", type: "url" }),
    defineField({ name: "icon", type: "string" }),
    defineField({ name: "order", type: "number" }),
  ],
});
