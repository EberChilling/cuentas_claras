import * as repository from "../repositories/members.repository"


export async function getMembers(groupId:string) {
    //Obtain members of a group from the groupId
    const members = repository.getMembersByGroupId(groupId)

    return members;
    
}