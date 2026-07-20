import { Member } from "@/src/domain/models/member";

import { MemberCard } from "../MemberCard";

import styles from "./MemberList.module.css"

import { GroupMember } from "../../types";

interface MembersListProps {
    groupMembers: GroupMember[];
}

export function MembersList({groupMembers} : MembersListProps){
    if(groupMembers.length === 0 ){
        return <p>No hay miembros todavía.</p>
    }

    return (
        <>
        <div>
            
            {groupMembers.map((groupMember) => (
                <MemberCard key={groupMember.member.id} groupMember={groupMember}  />
            ))}

        </div>
        </>
    )
}