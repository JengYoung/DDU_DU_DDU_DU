import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import TodoDetailPage from './pages/TodoDetailPage';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/todo" element={<TodoDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
