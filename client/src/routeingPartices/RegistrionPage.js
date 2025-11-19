import { useState } from "react";

const RegistrionPage=()=>{
    const [firstname,setFirstName]=useState("");
    const [lastname,setLastname]=useState("");
    // const [error,setEroor]=useState(false);
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [vaildated, setVaildated] = useState(false);
    const [loading,setLoading]=useState(false);

    const handleFirstName=(e)=>{
        setFirstName(e.target.value);
    }
    const handleLastname=(e)=>{
        setLastname(e.target.value);
    }
    const handleRegister=(e)=>{
        e.preventDefault();
        if(firstname ==="" ){
            setFirstNameError(true)
        }
        else{
            setFirstNameError(false)
        }
         if(lastname ==="" ){
            setLastNameError(true)
        }
        else{
            setLastNameError(false)
        }
        if(firstname !=="" && lastname !==""){
            setVaildated(true);
            setLoading(true);
            setTimeout(()=>{
                setLoading(false);
            },2000);
        }
        // else{
    }
    const handleAnotherForm=()=>{
        setVaildated(false);
        setFirstName("");
        setLastname("");
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
        },2000
        )
    }
    if(loading){
        return <span class="loader"></span>
    }
    return (
        <div className="min-h-[100vh] flex flex-col justify-center items-center">
            {!vaildated ? (
                <div className="py-12 px-7 shadow-xl border bg-white rounded-lg">
                <h1 className="text-2xl font-bold pb-5">Register Here</h1>
                <form className="flex flex-col gap-6" onSubmit={handleRegister}>
                    <input type="text" placeholder="firstname" className={`border-input p-3 text-lg font-medium ${firstNameError && 'bg-red-300 border-red-700'}`} value={firstname} onChange={handleFirstName} />
                    {firstNameError && <p className="text-red-400 mt-[-16px]">Required</p>}
                    <input type="text" placeholder="lastname" className={`border-input p-3 text-lg font-medium ${lastNameError && 'bg-red-300 border-red-700'}`} value={lastname} onChange={handleLastname} />
                    {lastNameError && <p className="text-red-400 mt-[-16px]">Required</p>}

                    <button type="submit" className="px-10 py-5 rounded-lg flex items-center justify-center text-white bg-red-400 font-semibold text-xl">Register Here</button>
                </form>

            </div>
            ): (
            <div className="py-12 px-7 shadow-xl border bg-white rounded-lg flex flex-col justify-center items-center">
               <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" alt="tick icon" className="w-12" />
                <h1 className="text-2xl font-bold pb-5">Successfull</h1>
                <button type="submit" onClick={handleAnotherForm} className="px-10 py-5 rounded-lg flex items-center justify-center text-white bg-red-400 font-semibold text-xl">Submit another form</button>

            </div>)}
        </div>
    )
}
export default RegistrionPage;