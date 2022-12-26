import './App.css';
import Layout from './page/layout/layout';

import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Books from './page/book/book';
import Dashbord from './page/dashbord/dashbord';
import Profile from './page/profile/profile';
import Users from './page/users/users';
import Admins from './page/admins/admins';
import Author from './page/auther/auters';
import Auth from './page/auth/auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path='dashbord' element={<Layout />}>
              <Route path='info' element={<Dashbord />} />
              <Route path='books' element={<Books />} />
              <Route path='auther' element={<Author />} />
              <Route path='Profile' element={<Profile/>}/>
              <Route path='users' element={<Users />} />
              <Route path='admins' element={<Admins />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
