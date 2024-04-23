import Link from "next/link";
import style from "./Header.module.css";
export default function Header() {
  return (
    <header className={style.header}>
      <Link href="/" className={style.logo}>
        Главная
      </Link>
      <div className={style.profile}>
        <span className={style.name}>Евгений</span>
        <div className={style.avatar}></div>
      </div>
    </header>
  );
}
