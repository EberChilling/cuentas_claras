import { Group } from "@/src/domain/models/group";

import { GroupCard } from "../GroupCard";

import styles from "./GroupList.module.css"
interface GroupsListProps {
  groups: Group[];
}

export function GroupsList({ groups }: GroupsListProps) {
  
  if (groups.length === 0) {
  return <p>No hay grupos todavía.</p>;
  }
  
  return (
    <>
      <h2>Mis grupos</h2>
      <div className={styles.groupList}>

        {groups.map((group) => (
          <GroupCard 
          key = {group.id}
          group={group} />
        ))}

      </div>
    </>
  );
}