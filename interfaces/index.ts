import { z } from "zod";

export const DataSchema = z.object({
  name: z.object({
    first: z
      .string()
      .min(1, { message: "Required" })
      .max(60, { message: "Maximum character limit is 60" }),
    last: z
      .string()
      .max(60, { message: "Maximum character limit is 60" })
      .optional(),
  }),
  email: z
    .string()
    .email()
    .max(60, { message: "Maximum character limit is 60" }),
  message: z
    .string()
    .min(5, { message: "Minimum character limit is 5" })
    .max(5000, { message: "Maximum character limit is 5000" }),
});

export type Data = z.infer<typeof DataSchema>;

export interface SearchBarElement {
  blur: () => void;
}

export type Status = "OK" | "ERROR";
