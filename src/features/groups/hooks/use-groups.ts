import { useEffect, useState } from "react";

import { getGroups } from "../repositories/groups.repository";

import { createGroup } from "../actions/create-group";

export function useGroups() {
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    const data = await getGroups();

    setGroups(data);
  }

  async function handleCreate(data: {name: string;description?: string;}) 
  {
    await createGroup(data);

    await refresh();
  }

  useEffect(() => {
    refresh().finally(() => setLoading(false));
  }, []);

  return {groups,loading,createGroup: handleCreate};
}