"use client";
import loginAction from "@/actions/login";
import { useActionState } from "react";
import * as styles from "./login-form.css";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.inputContainer}>
        <label htmlFor="id" className={styles.label}>
          아이디
        </label>
        <input
          name="id"
          id="id"
          className={styles.input}
          placeholder="아이디를 입력해주세요."
          defaultValue={state?.prevId}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>
          비밀번호
        </label>
        <input
          name="password"
          id="password"
          className={styles.input}
          type="password"
          placeholder="비밀번호를 입력해주세요."
        />
        {state?.message && (
          <span className={styles.errorText}>{state.message}</span>
        )}
      </div>
      <button type="submit" disabled={isPending} className={styles.loginButton}>
        로그인
      </button>
    </form>
  );
}
