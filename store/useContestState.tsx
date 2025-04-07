import { create } from "zustand";

export interface ContestState {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  topicIngredientId: null | number;
  updateContest: (
    key: keyof ContestState,
    value: string | number | null
  ) => void;
}

const useContestState = create<ContestState>((set) => ({
  name: "",
  description: "",
  startDate: "",
  endDate: "",
  topicIngredientId: null,
  updateContest: (key, value) => set((state) => ({ ...state, [key]: value })),
}));

export default useContestState;
