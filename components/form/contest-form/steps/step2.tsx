import Input from "@/components/input";
import * as styles from "./step2.css";
import useStep2State from "@/hooks/useStep2State";

export default function Step2() {
  const { contestState, onChangeInput } = useStep2State();

  return (
    <div className={styles.step2Container}>
      <p className={styles.paragraph}>대회 이름과 대회 설명을 입력 해주세요.</p>
      <div className={styles.contenstWrapper}>
        <div className={styles.inputContainer}>
          <label htmlFor="id" className={styles.label}>
            대회 이름
          </label>
          <Input
            type="text"
            name="name"
            placeholder="대회 이름을 입력 해주세요."
            onChange={onChangeInput}
            value={contestState.name}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="id" className={styles.label}>
            대회 설명
          </label>
          <Input
            type="text"
            name="description"
            placeholder="대회 설명을 입력 해주세요."
            onChange={onChangeInput}
            value={contestState.description}
          />
        </div>
      </div>
    </div>
  );
}
