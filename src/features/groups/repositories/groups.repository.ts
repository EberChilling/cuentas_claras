import { error } from "console";
import { supabase } from "../../../lib/supabase";

export async function getGroups() {
    const {data, error} = await supabase
        .from("groups")
        .select("*")
        .order("created_at");

    if(error) throw error;

    return data
}

export async function createGroup( data: {name: string; description?: string; }) 
{
    const {data: group , error} = await supabase
        .from("groups")
        .insert({
            name: data.name,
            description: data.description,
        })
        .select()
        .single();

    if(error) throw error;

    return group
}