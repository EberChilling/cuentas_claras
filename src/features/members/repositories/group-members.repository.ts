import { supabase } from "@/src/lib/supabase";


export async function createGroupMember(groupId : string , memberId: string) {

    const {data: groupMember, error} = await supabase
        .from("group_members")
        .insert({
            group_id: groupId,
            member_id: memberId
        })
        .select()
        .single()
    
    if(error) throw error;

    return groupMember
    
}