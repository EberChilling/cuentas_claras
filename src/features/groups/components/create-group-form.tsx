"use client";

import { useState } from "react";

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
      <input
        placeholder="Nombre del grupo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button disabled={loading}>
        {loading ? "Creando..." : "Crear Grupo"}
      </button>
    </form>
  );
}