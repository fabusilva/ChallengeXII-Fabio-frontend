import Link from "next/link";
import style from "../styles/NotFound.module.css";
export default function NotFound() {
  return (
    <div className={style.notFoundContainer}>
      <div className={style.notFoundCard}>
      <h1>404</h1>
        <p>Ops! Página não encontrada.</p>
        <p>Parece que você tentou acessar uma página que não existe.</p>
        <p>Vamos ajudar você a encontrar o caminho de volta:</p>
        <p>
          Clique <Link href="/">aqui para voltar para Home</Link>
        </p>
      </div>
    </div>
  );
}
