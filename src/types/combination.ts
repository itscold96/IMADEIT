interface Workout {
  id: string;
  name: string;
  sets: number;
}

export interface Tabata extends Workout {
  type: 'tabata';
  rest_sec: number;
  workout_sec: number;
}

export interface Exercise extends Workout {
  type: 'exercise';
  sets: number;
  reps: number;
}

export type CombinationType = Exercise | Tabata;
