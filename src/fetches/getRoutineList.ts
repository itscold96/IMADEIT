import { supabase } from 'components/utils/supabaseClient';

export const getRoutineList = async () => {
  const { data } = await supabase.from('routine_list').select('*');
  return data;
};
