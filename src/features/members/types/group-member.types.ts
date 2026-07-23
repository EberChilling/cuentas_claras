import { Member } from '@/src/domain/models/member'


export interface GroupMember {
    group_id: string;
    joined_at: string;
    member: Member;
}