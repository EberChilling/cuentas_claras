import { Member } from "@/src/domain/models/member";

import { MemberCard } from "../MemberCard";

import styles from "./MemberList.module.css"

import { GroupMember } from "../../types";


interface MembersListProps {
    groupMembers: GroupMember[];
    onDeleteMember: (data: {
        groupId:string ,
        member_id:string
    }) => Promise<void>;
}

export function MembersList({groupMembers,onDeleteMember} : MembersListProps){
    if(groupMembers.length === 0 ){
        return <p>No hay miembros todavía.</p>
    }

    return (
        <>
        <div className={styles.membersListContainer}>
            
            {groupMembers.map((groupMember) => (
                <MemberCard key={groupMember.member.id} groupMember={groupMember}  onDelete = {onDeleteMember} />
            ))}

        </div>
        </>
    )
}