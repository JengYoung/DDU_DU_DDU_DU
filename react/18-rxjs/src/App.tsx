import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/todo">
            <Route path=":userId" element={<TodoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
