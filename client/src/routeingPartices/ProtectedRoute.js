import Cookie from 'js-cookie';
import { Navigate, Route } from 'react-router-dom';
import HomePage from './Home';

const ProtectedRoute = ({childerns}) => {
    const jwtToken=Cookie.get('jwt_token');
    if(jwtToken === undefined){
        return <Navigate to='/auth' />
    }
    return childerns;
}
export default ProtectedRoute;