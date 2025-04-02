import { Contest } from "@/models/contest";

export const ongoingContest = (data: Contest) => {
  const today = new Date();

  const ongoingContest = data.contests.filter((contest) => {
    const startDate = new Date(contest.startDate);
    const endDate = new Date(contest.endDate);
    return today >= startDate && today <= endDate;
  });

  return ongoingContest;
};
