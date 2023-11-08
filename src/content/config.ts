import { z, defineCollection } from "astro:content";

const personalCollection = defineCollection({
  type: "contnet",
  schema: z.object({
    name: z.string(),
    address1: z.string(),
    address2: z.string().optional(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    phone: z.string(),
    email: z.string().email(),
  }),
});

const opportunityCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    present: z.boolean(),
  }),
});

export const collections = {
  opportunity: opportunityCollection,
  personal: personalCollection,
};
