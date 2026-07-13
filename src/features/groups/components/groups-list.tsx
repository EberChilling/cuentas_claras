interface Group {
  id: string;
  name: string;
  description: string | null;
}

interface Props {
  groups: Group[];
}

export function GroupsList({ groups }: Props) {
  return (
    <div>
      <h2>Mis grupos</h2>

      {groups.map((group) => (
        <div key={group.id}>
          <h3>{group.name}</h3>

          {group.description && (
            <p>{group.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}