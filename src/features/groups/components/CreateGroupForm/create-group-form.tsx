"use client";

import { useState } from "react";
import {Button,Input, TextArea, InputField} from "../../../../components/ui";
interface Props {
  onSubmit: (data: {
    name: string;
    description?: string;
  }) => Promise<void>;
}

export function CreateGroupForm({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      await onSubmit({
        name,
        description,
      });

      setName("");
      setDescription("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>

      <InputField label="Nombre">
        <Input
            placeholder="Nombre del grupo"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        
        </InputField>

      <InputField label="Descripcion">
        <TextArea
          placeholder="Descripción del grupo..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          />
      </InputField>

      <Button type="submit" loading={loading}>
        Crear Nuevo Grupo
      </Button>
    </form>
  );
}