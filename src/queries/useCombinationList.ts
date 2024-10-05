import { useSuspenseQuery } from '@tanstack/react-query';
import { ROUTINE_COMBINATION_LIST_QUERY_KEY } from 'constants/queryKeys';
import { getCombinationList } from 'fetches/getCombinationList';

export const useCombinationList = (linkedRoutineId: string) => {
  return useSuspenseQuery({
    queryKey: [ROUTINE_COMBINATION_LIST_QUERY_KEY, linkedRoutineId],
    queryFn: () => getCombinationList(linkedRoutineId),
    select: (data) => data?.combination,
  });
};
