import NavButton from "@/components/nav.button/Nav.button";
import styles from "./page.module.css";
import AccauntCard from "@/components/accaunt.card/Accaunt.card";
export default function Accaunt() {
  const routes = [
    { title: "Пополнить", path: "deposit" },
    { title: "Оплатить", path: "pay" },
    { title: "История", path: "history" }
  ];

  const cards = [
    { currency: "₽", balance: 350000 },
    { currency: "€", balance: 200000 },
    { currency: "$", balance: 10000 }
  ];
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        {routes.map(({ title, path }) => (
          <NavButton key={path} title={title} />
        ))}
      </nav>
      <section className={styles.section}>
        <article className={styles.article}>
          <h1 className={styles.title}>Мои счета</h1>
          <div className={styles.cards_container}>
            {cards.map(({ currency, balance }, index) => (
              <AccauntCard currency={currency} balance={balance} key={index} />
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
