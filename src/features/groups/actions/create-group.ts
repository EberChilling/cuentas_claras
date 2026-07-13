import { createGroupSchema } from "../schemas/create-group.schema";
import * as repository from "../repositories/groups.repository";

export async function createGroup(input: {name: string; description?: string;}) 
{
  //Validate if the incoming information is correct or not using Zod
  const data = createGroupSchema.parse(input);
  
  //Return a json information from the new group created in DB
  return repository.createGroup(data);
}