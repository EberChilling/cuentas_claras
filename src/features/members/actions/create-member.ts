import { createMemberSchema } from "../schemas/create-member.schema";

import * as members_repository from "../repositories/members.repository"


import * as groupMembers_repository from "../repositories/group-members.repository"
import { Mr_Bedfort } from "next/font/google";



export async function createMember(input: {memberName:string; groupId:string}){

    const data = createMemberSchema.parse(input);

    // Creates a new member with the Name provided
    const member = await  members_repository.createMember(data.memberName)

    //Assign the new member id to the group id
    const groupMember = await groupMembers_repository.createGroupMember(data.groupId, member.id)

    return {group_id:groupMember.group_id ,joined_at:groupMember.joined_at , member};

}