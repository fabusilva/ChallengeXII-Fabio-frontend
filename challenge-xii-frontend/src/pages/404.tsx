import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h1>404</h1>
            <p>Pagina Não disponivel</p>
            <p>Volta para <Link href="/">Home</Link></p>
        </div>
    )
}