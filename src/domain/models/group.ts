import { Database } from "../../lib/database.types";

//Bringing the types provided by Supabase as Typescript
export type Group = Database["public"]["Tables"]["groups"]["Row"];

export type CreateGroupInput = Database["public"]["Tables"]["groups"]["Insert"];

export type UpdateGroupInput = Database["public"]["Tables"]["groups"]["Update"];

