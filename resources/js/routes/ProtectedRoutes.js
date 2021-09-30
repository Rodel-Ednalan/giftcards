// Here we include the components which need to be accesses after successful login.
import {Route, Switch, NavLink, useHistory} from 'react-router-dom';
import {Button, Layout} from 'antd';
import routes from './routes';
import EditorModal from '../components/EditorModal'

function ProtectedRoutes() {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.go('/login')
  }
 
  return (
    <>
      <div class="sidenav">
        <EditorModal />
        <NavLink to="user">Users</NavLink>
        <NavLink to="received">Received</NavLink>
        <NavLink to="sent">Sent</NavLink>
        <button  className="btn btn-danger btn-block" onClick={logout}>Logout</button >
      </div>
      <div class="main" style={{ padding: 20 }}>
        <Switch>
          {routes.map(({component: Component, path, exact}, index) => (
            <Route path={`/${path}`} key={index} exact={exact}>
              <Component/>
            </Route>
          ))}
        </Switch>
      </div>
    </>
  );
}

export default ProtectedRoutes;
