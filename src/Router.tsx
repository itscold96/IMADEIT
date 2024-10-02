import Landing from 'pages/Landing';
import RoutineBoard from 'pages/RoutineBoard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/routineboard'} element={<RoutineBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
