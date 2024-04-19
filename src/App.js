import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FamilyTrees from './pages/FamilyTrees/FamilyTrees';
import Flow from './pages/Flow/Flow';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home title={'Home'} />} />
        <Route path='/familytrees' element={<FamilyTrees />} />
        <Route path='/familytree' element={<Flow />} />
      </Routes>
    </div>
  );
};

export default App;
