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


export async function deleteGroupMember(data:{groupId:string , member_id:string}){

    const { error } = await supabase
        .from("group_members")
        .delete()
        .eq("member_id",data.member_id)
        .eq("group_id",data.groupId)

    if(error) throw error;

}