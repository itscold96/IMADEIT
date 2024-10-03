import Landing from 'pages/Landing';
import RoutineBoard from 'pages/RoutineBoard';
import RoutineCombination from 'pages/RoutineCombination';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/routineboard'} element={<RoutineBoard />} />
        <Route path={'/routine/:id'} element={<RoutineCombination />} />
      </Routes>
    </BrowserRouter>
  );
}
