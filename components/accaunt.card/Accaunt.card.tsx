import styles from "./Accaunt.card.module.css";
interface AccauntCardProps {
  currency: string;
  balance: number;
}
export default function AccauntCard({ currency, balance }: AccauntCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.currency}>{currency}</div>
      <div className={styles.balance}>{formatBalanse(balance)}</div>
    </div>
  );
}

function formatBalanse(balance: number) {
  return balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ");
}
