import styles from "./GroupCard.module.css"
import { Card } from "@/src/components/ui"
import { Group } from "@/src/domain/models/group";
import Link  from "next/link";

interface GroupCardProps{
    group: Group
}


export function GroupCard( {group} : GroupCardProps){
    return (
        <>
        <Link href={`/groups/${group.id}`} >
            <Card>
                <h2> {group.name} </h2>
                {group.description && (<p>{group.description}</p>)}
            </Card>
        </Link>
        </>
    )

}