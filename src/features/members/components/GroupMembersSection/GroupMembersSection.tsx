"use client";


import { GroupMember } from "../../types";
import { CreateMemberForm } from "../CreateMemberForm";
import { MembersList } from "../MembersList";
import { useMembers } from "../../hooks/use-members";

interface GroupMembersSectionProps{
    groupId: string;
    initialMembers: GroupMember[];
}

export default function GroupMembersSection( { groupId , initialMembers} : GroupMembersSectionProps){

    const {members,handleCreateMember,handleDeleteGroupMember}= useMembers(groupId,initialMembers);

    return (
        <>
            <CreateMemberForm onSubmit={handleCreateMember}/>

            <MembersList groupMembers={members} onDeleteMember={handleDeleteGroupMember} />
        </>
        
    )

}