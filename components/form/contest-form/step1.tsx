import useContestForm from "@/hooks/useContestForm";
import Image from "next/image";
import * as styles from "./step1.css";
import useContestState from "@/store/useContestState";
import SelectTopic from "./select-topic";

export default function Step1() {
  const { searchInput, onChangeInput, displayedTopics, selectedTopic } =
    useContestForm();

  const { updateContest } = useContestState();

  return (
    <div className={styles.step1Container}>
      <div className={styles.titleInputContainer}>
        {selectedTopic ? (
          <p className={styles.paragraph}>선택하신 재료에요.</p>
        ) : (
          <p className={styles.paragraph}>현재 등록된 재료에요.</p>
        )}
        {!selectedTopic && (
          <input
            type="text"
            placeholder="검색어 입력..."
            value={searchInput}
            onChange={onChangeInput}
          />
        )}
      </div>
      <div className={styles.contentWrapper}>
        {selectedTopic && <SelectTopic topic={selectedTopic} />}
        {displayedTopics && !selectedTopic && (
          <div className={styles.displayedTopic}>
            {displayedTopics?.map(({ name, image, id }) => (
              <div
                key={id}
                className={styles.topicItem}
                onClick={() => updateContest("topicIngredientId", id)}
              >
                <Image
                  src={image}
                  alt={name}
                  width={120}
                  height={120}
                  priority
                  style={{ borderRadius: 4 }}
                />
                <div className={styles.topicName}>{name}</div>
              </div>
            ))}
            {!displayedTopics?.length && <div>검색 결과가 없습니다.</div>}
          </div>
        )}
      </div>
    </div>
  );
}
