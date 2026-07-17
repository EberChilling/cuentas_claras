import * as repository from "../repositories/groups.repository"

export async function getGroupById( inputGroupId : string){
    //  Return the specific group if the ID provided exists
    return repository.getGroupById(inputGroupId)
}

export async function getGroups(){

    return repository.getGroups()
}