import Link from "next/link";

export default function NotFound(){
    return (
        <main>
            <h1>Grupo No Encontrado</h1>
            <p>El grupo no existe </p>

            <Link href='/'>Volver al inicio</Link>
        </main>
    );
}