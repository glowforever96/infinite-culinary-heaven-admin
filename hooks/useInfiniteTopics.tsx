import { InfiniteData, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { getTopics } from "@/lib/getTopics";
import { useEffect } from "react";
import { Topic } from "@/models/topic";

export const useInfiniteTopics = () => {
  const { data, fetchNextPage, hasNextPage } = useSuspenseInfiniteQuery<
    Topic[],
    object,
    InfiniteData<Topic[]>,
    [_1: string],
    number
  >({
    queryFn: getTopics,
    queryKey: ["topics"],
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
