import { InfiniteData, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Contest } from "@/models/contest";
import { getContests } from "@/lib/getContests";

export const useInfiniteContests = () => {
  const { data, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery<
    Contest[],
    object,
    InfiniteData<Contest[]>,
    [_1: string],
    number
  >({
    queryFn: getContests,
    queryKey: ["contests"],
    initialPageParam: 0,
    getNextPageParam: (lastPage, lastPageParam) => {
      if (lastPage.length === 0) return;
      return lastPageParam.length;
    },
  });

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      if (hasNextPage) fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return { data, ref };
};
