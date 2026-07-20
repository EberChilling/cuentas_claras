import { useState } from "react";
import { GroupMember } from "../types";
import { createMember } from "../actions/create-member";

export function useMembers(groupId:string,initialMembers: GroupMember[]){
    const [members,setMembers] = useState(initialMembers);
    
    async function handleCreateMember( data:{ memberDisplayName:string; }) {
        // Once name from group member is added and the button clicked
        const input ={
            memberName: data.memberDisplayName,
            groupId: groupId
        }

        //Send name from new member and add it to DB
        const newGroupMember = await createMember(input);

        setMembers( prev => [...prev,newGroupMember])

    }

    return {members,handleCreateMember}
}