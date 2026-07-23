import styles from './MemberCard.module.css'
import { Card } from '@/src/components/ui'
import { Button } from '@/src/components/ui'
import { GroupMember } from '../../types'

interface MemberCardProps {
    groupMember: GroupMember;
    onDelete: ( data: {
        groupId:string , 
        member_id:string
    }) => Promise<void>;
}

export function MemberCard( {groupMember,onDelete} : MemberCardProps){
    return (
        <>
            <Card>
                <h2>{groupMember.member.display_name}</h2>
                <Button onClick={  () => onDelete({groupId: groupMember.group_id ,member_id: groupMember.member.id})  }>
                    Del
                </Button>
            </Card>
        </>
    )
}