import React, { useState , useEffect} from "react";
import Card from "../components/Card";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  
  useEffect(()=>{
   axios.post("http://localhost:3000/api/v1/me",{token})
   .then((response)=>{
     if(response.data.success){
       navigate('/dashboard')
     }else{
       navigate('/signin')
     }
   }).catch((error)=>{
     console.log('Error in the signup navigator' , error);
     
   })
  },[token])
  const handleLogin = async()=>{
    try {
      const response = await axios.post('http://localhost:3000/api/v1/user/signin',{
        userName,
        password
      })
      console.log(response);
      localStorage.setItem('token',response.data.token)
      navigate('/dashboard')
    } catch (error) {
      console.log('Error in signin' , error);
      
    }
  }
  return (
    <>
      <Card>
        <h1 className="text-4xl mt-12">Sign In</h1>
        <p className="text-lg text-center">
          Enter your Information to access your account
        </p>
        <div>
          <h2>Email</h2>
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="px-2 rounded-md py-0.5 w-64 text-black font-normal outline-none"
            type="text"
            placeholder="demo@gmail.com"
          />
        </div>
        <div>
          <h2>Password</h2>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="px-2 rounded-md py-0.5 w-64 text-black font-normal outline-none"
            type="text"
            placeholder="Password"
          />
        </div>
        <button
          onClick={handleLogin}
          className="text-xl bg-black p-2 rounded-lg border-slate-300 border-2 text-slate-300"
        >
          Sign In
        </button>
        <p className="text-sm">
          Do not have an account ?
          <Link to={"/signup"}>
            {" "}
            <span className="underline">register</span>{" "}
          </Link>{" "}
        </p>
      </Card>
    </>
  );
}

export default SignIn;
