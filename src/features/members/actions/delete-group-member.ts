import { deleteGroupMember } from "../repositories/group-members.repository";

export async function deleteMember(input:{groupId:string , member_id:string}) {

    await deleteGroupMember(input)
    
}