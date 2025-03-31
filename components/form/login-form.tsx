"use client";
import loginAction from "@/actions/login";
import { useActionState } from "react";
import * as styles from "./login-form.css";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  console.log(state);
  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="id">아이디</label>
        <input name="id" id="id" />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password">비밀번호</label>
        <input name="password" id="password" />
      </div>
      <button type="submit" disabled={isPending}>
        로그인
      </button>
      {state?.message}
    </form>
  );
}
