import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home title={'Home'} />} />
      </Routes>
    </div>
  );
};

export default App;
