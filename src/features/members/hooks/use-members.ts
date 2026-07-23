import { useState } from "react";
import { GroupMember } from "../types";
import { createMember } from "../actions/create-member";
import { deleteMember } from "../actions/delete-group-member";
import { set } from "zod";


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

        //Updating UI list 
        setMembers( prev => [...prev,newGroupMember])

    }


    async function handleDeleteGroupMember(data:{groupId:string , member_id:string}) {
        try{

            //Deleting a member from an specific group
            await deleteMember(data)
            
            //Updating UI list returning all members which Id is not the same as the one that was deleted 
            setMembers( prev => prev.filter( groupMember => groupMember.member.id !== data.member_id ))
        }
        catch(error){
            console.error(error)
            alert("No se pudo eliminar al integrante")
        }
    }

    return {members,handleCreateMember,handleDeleteGroupMember}
}