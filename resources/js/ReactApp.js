import {useEffect, useState} from 'react';
import Spinner from './components/Spinner';
import {AppRoutes} from './routes/AppRoutes';

function ReactApp() {
 const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn') == 'true') {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [])
  

  return <AppRoutes isAuthenticated={isAuthenticated}/>
}

export default ReactApp;
