import useContestState, { ContestState } from "@/store/useContestState";
import { ChangeEvent } from "react";

const useStep2State = () => {
  const { updateContest, ...contestState } = useContestState();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateContest(name as keyof ContestState, value);
  };

  return { contestState, onChangeInput };
};

export default useStep2State;
