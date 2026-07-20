import { supabase } from "@/src/lib/supabase";


export async function getMembersByGroupId( groupId: string){

    //Make a JOIN between 'group_members' and 'members' tables

    // Assign the name member, to the row obtained from members(*) -> member: members(*)
    const {data, error} = await supabase
        .from("group_members")
        .select(`joined_at,member: members(*)`)
        .eq("group_id",groupId)

    if(error) throw error;

    return data
}


export async function createMember(memberName: string) {

    const {data:member, error} = await supabase
        .from("members")
        .insert({
            display_name: memberName,

        })
        .select()
        .single()
    
    if(error) throw error;

    return member
    
}
