import {z} from "zod";

export const createMemberSchema = z.object({
    memberName: z
        .string()
        .trim()
        .min(1)
        .max(50)
    ,
    groupId: z
        .uuid()        
});