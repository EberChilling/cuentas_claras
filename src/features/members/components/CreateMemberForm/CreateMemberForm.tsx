import { useState } from "react";
import { Input, Button, InputField } from "@/src/components/ui";

interface CreateMemberFormProps {
    onSubmit: ( data: {
        memberDisplayName: string;

    }) => Promise<void>
}


export function CreateMemberForm({ onSubmit } : CreateMemberFormProps){
    const [memberDisplayName , setMemberDisplayName] = useState("");
    const [loading,setLoading] = useState(false);

    async function handleSubmit(e : React.FormEvent){
        e.preventDefault();
        try{
            setLoading(true);

            //Do nothing in case there isn't a correct name:
            if (!memberDisplayName.trim()) return;

            await onSubmit({memberDisplayName});

            setMemberDisplayName("")

        }finally{
            setLoading(false);
        }

    }

    return (

        <form onSubmit={handleSubmit}>
            <InputField label="Nuevo Miembro:">
                <Input 
                    placeholder="Nombre de nuevo integrante"
                    value={memberDisplayName}
                    onChange={(e) => setMemberDisplayName(e.target.value)}
                />

            </InputField>

            <Button type="submit" loading={loading} disabled={!memberDisplayName.trim()}>
                Agregar Integrante 
            </Button>

        </form>
    );

}

