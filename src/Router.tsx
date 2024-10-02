import Landing from 'pages/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
