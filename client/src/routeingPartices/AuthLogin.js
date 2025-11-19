import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import Cookies from "js-cookie";
const AuthLogin = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error,setEroor]=useState('')
    const navigate=useNavigate();
    const handleUsername=(e)=>{
        setUsername(e.target.value);
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value);
    }
    // useEffect(()=>{
        
    // },[])
    const handleCookie=jwtToken=>{
        Cookies.set('jwt_token',jwtToken,{expires: 30});
        setTimeout(()=>{
            navigate('/');
        },1000)
        
    }
    const handleLogin=async(e)=>{
        e.preventDefault();
        const userDetails={username,password};
        const url='https://apis.ccbp.in/login';
        const options={
            method: 'POST',
            body: JSON.stringify(userDetails)
        }
        const respose=await fetch(url,options);
        const data=await respose.json();
        console.log(data);
        console.log(respose.ok);
        if(respose.ok===true){
            // alert('Login Successfull');
            // navigate('/')
            toast.success("login Successfull redirecting to home page");
            handleCookie(data.jwt_token);   
            

        }else{
            // setEroor(data.error_msg);
            toast.error(data.error_msg);
        }


    }
    const jwtToken=Cookies.get('jwt_token');
    if(jwtToken !== undefined){
        return <Navigate to='/' />
    }
    
    return(
        <div className="flex flex-col max-h-[100vh] justify-center items-center">
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <input type="text" placeholder="username" className="border-input" value={username} onChange={handleUsername} />
                <input type="text" placeholder="password" className="border-input" value={password} onChange={handlePassword} />
                <button type="submit">Login</button>

            </form>
            {error && <p className="text-rose-400">{error}</p>}
            <Toaster />
        </div>
    )
}
export default AuthLogin;