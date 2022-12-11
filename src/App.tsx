import './App.css';
import Layout from './page/layout/layout';

import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Books from './page/book/book';
import Dashbord from './page/dashbord/dashbord';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Dashbord />} />
              <Route path='books' element={<Books />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
