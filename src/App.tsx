import './App.css';
import Layout from './page/layout/layout';

import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Books from './page/book/book';
import Dashbord from './page/dashbord/dashbord';
import Profile from './page/profile/profile';
import Users from './page/users/users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Dashbord />} />
              <Route path='books' element={<Books />} />
              <Route path='Profile' element={<Profile/>}/>
              <Route path='users' element={<Users />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
