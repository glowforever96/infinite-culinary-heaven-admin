import LoginForm from "@/components/form/login-form";
import * as styles from "./page.css";

export default function LoginPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>무한 요리 천국</h1>
        <span className={styles.subtitle}>관리자 페이지</span>
      </div>
      <LoginForm />
    </div>
  );
}
