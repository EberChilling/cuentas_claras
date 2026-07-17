"use client";

import { CreateGroupForm } from "../features/groups/components/CreateGroupForm";
import { GroupsList } from "../features/groups/components/GroupList";
import { useGroups } from "../features/groups/hooks/use-groups";

export default function HomePage() {
  const {
    groups,
    loading,
    createGroup,
  } = useGroups();

  return (
    <main style={{maxWidth: 900,margin: "40px auto",}}>
      <h1>Cuentas Claras</h1>

      <CreateGroupForm onSubmit={createGroup}/>

      <hr />

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <GroupsList groups={groups} />
      )}
    </main>
  );
}