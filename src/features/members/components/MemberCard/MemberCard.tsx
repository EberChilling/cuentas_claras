import styles from './MemberCard.module.css'
import { Card } from '@/src/components/ui'
import { GroupMember } from '../../types'

interface MemberCardProps {
    groupMember: GroupMember
}

export function MemberCard( {groupMember} : MemberCardProps){
    return (
        <>
            <Card>
                <h2>{groupMember.member.display_name}</h2>
                <p> Joined on: {groupMember.joined_at}</p>
            </Card>
        </>
    )
}