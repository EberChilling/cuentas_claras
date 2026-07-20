import { Member } from '@/src/domain/models/member'


export interface GroupMember {
    joined_at: string;
    member: Member;
}