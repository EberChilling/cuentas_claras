import { Group } from "../../../domain/models/group";

interface Props {
  groups: Group[];
}

export function GroupsList({ groups }: Props) {
  
  const styleContainer = {
    backgroundColor: '#2564eb45',
    margin: '10px 0px',
    padding: '10px',
    display: 'flex',
    cursor: 'pointer'
  }
  
  return (
    <div>
      <h2>Mis grupos</h2>

      {groups.map((group) => (
        <div key={group.id}>
          <div style={styleContainer}>
            
            <h3>{group.name}</h3>

            {group.description && (<p>- {group.description}</p>)}
          </div>
        
        </div>
      ))}
    </div>
  );
}