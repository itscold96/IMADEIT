import { supabase } from 'components/utils/supabaseClient';

export const getCombinationList = async (linkedRoutineId: string) => {
  const { data } = await supabase
    .from('routine_combination_list')
    .select('combination')
    .eq('linked_routine_id', linkedRoutineId)
    .single();
  return data;
};
