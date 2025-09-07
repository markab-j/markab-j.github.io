import { z } from "zod";

export const PostMetadataSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format. Expected YYYY-MM-DD."),
  categories: z.array(z.string()),
  tags: z.array(z.string()),
  coverImage: z.string(),
  coverWidth: z.number(),
  coverHeight: z.number(),
});

export type PostMetaData = z.infer<typeof PostMetadataSchema>;
