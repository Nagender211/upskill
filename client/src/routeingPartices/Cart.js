import Cookie from 'js-cookie';
import { Navigate } from 'react-router-dom';
const CartPage=()=>{
    const jwtToken=Cookie.get('jwt_token');
    if(jwtToken === undefined){
        return <Navigate to='/auth' />
    }
    return (
        <div>
            <h1>cart</h1>
        </div>
    )
}
export default CartPage;