import { error } from "console";
import { supabase } from "../../../lib/supabase";
import { id } from "zod/locales";
import { errorMonitor } from "events";


export async function getGroupById(groupId:string){
    const {data,error} = await supabase
        .from("groups")
        .select("*")
        .eq("id",groupId)
        .maybeSingle();
    
    if(error) throw error;

    return data
}

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