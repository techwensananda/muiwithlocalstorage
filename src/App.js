import { Route, Routes } from 'react-router-dom';
import './App.css';

import AdminLayout from './components/AdminLayout';
import AdminRoute from './components/AdminRoute';
import Dashboard from './components/Dashboard';
import PublicRoute from './components/PublicRoute';
import TableLayout from './components/TableLayout';
import useAuthCheck from './hooks/useAuthCheck';
import SignInSide from './pages/SignIn';
function App() {

  const authChecked = useAuthCheck();


  return (
    <>

    {authChecked && 
    <>
    
    <Routes>
        <Route path='/' element={<PublicRoute> <SignInSide/></PublicRoute> } />
        <Route path='/login' element={<PublicRoute> <SignInSide/></PublicRoute> } />
        {/* <Route path='/register' element={<PublicRoute><Register/> </PublicRoute> } /> */}
    
      
        {/* Admin Route  */}
        <Route path='/admin' element={<AdminRoute><AdminLayout/> </AdminRoute>  } > 
        <Route path='dashboard' element={<Dashboard/> } />
        <Route path='table' element={<TableLayout/> } />
    
        {/* <Route path='videos' element={ <Videos/> } /> */}
      
        </Route>
    
    
       
       </Routes>
    </>
    
    }
    
       </>
  );
}

export default App;
