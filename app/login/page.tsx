import LoginForm from "@/components/form/login-form";
import * as styles from "./page.css";

export default function LoginPage() {
  return (
    <div className={styles.pageWrapper}>
      <div>
        <h1>무한 요리 천국</h1>
        <span>관리자 페이지</span>
      </div>
      <LoginForm />
    </div>
  );
}
