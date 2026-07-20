
import { Database } from "../../lib/database.types";

//Members
export type Member = Database["public"]["Tables"]["members"]["Row"];

export type CreateNewMember = Database["public"]["Tables"]["members"]["Insert"];

export type UpdateMember = Database["public"]["Tables"]["members"]["Update"];