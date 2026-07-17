import { z } from "zod";
// A new rule or [schema] is created to limit the type of input given by the user:
export const createGroupSchema = z.object({

    name: z
        .string()
        .trim()
        .min(1)
        .max(100),

    description: z
        .string()
        .max(500)
        .optional()

});