import React, { useEffect, useState } from "react";
import "./create.css";
import logos from "../../src/Component/assets/logo.png"
import { CreateUser } from "../Redux/Thunk/CreateThunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {

  //...LOGIN..........
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginData=useSelector((state)=>state.user);
  console.log("loginData",loginData)

  const login=loginData?.data?.data

  console.log("login",login)

  const auth_token=login?.jwt
  console.log("auth_token",auth_token)

  useEffect(() => {
    if (auth_token) {
      localStorage.setItem("auth_token", auth_token);
    } else {
      return;
    }
  }, [auth_token]);
  //  toastify.......................................
  const loginDatad=useSelector((state)=>state.user);
  const meassagedata=loginDatad?.data?.data?.message
  console.log("meassagedata",meassagedata) 
  
  const loginDataderr=useSelector((state)=>state.user);
  console.log("loginDataderr",loginDataderr)
  const errdata=loginDataderr?.error?.error?.message
  console.log("errdata",errdata)

   const handleSubmit=async()=>{
    try{
      const logingo=await dispatch(CreateUser({ userName, password }));
      if(CreateUser.fulfilled.match(logingo)){
    navigate("/read")

      }
      else{
        console.log("loginfailed",logingo.error)
      }
    
    }  catch(error){
      console.log("loginfailed",error)
    }
    
   
    
   }
   useEffect(() => {
    if (meassagedata) {
      toast.success(` ${JSON.stringify(meassagedata)}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [meassagedata]);
  useEffect(() => {
    if (errdata) {
      toast.error(` ${JSON.stringify(errdata)}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }, [errdata]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        handleSubmit();
    }
};
  
  

   
  return (
    <div className="Container loginpage d-flex">
      <div className="Login_page p-3">
        <div>
            <img src={logos}  className="logo"/>
        </div>
        <div className=" text-primary">
          <h1>Login</h1>
        </div>
        <div className="form p-3">
        <div className="mt-4">
          <label htmlFor="name" className="label  ">
            User Name*
          </label>
          <input
            type="text"
            id=""
            className="w-100 form-control mt-2"
            name="Name"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="password mt-3">
          <label htmlFor="Password" className="label">
            Password*
          </label>
          <input
            type="Password"
            id=""
            name="Password"
            className="w-100 form-control mt-2"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="mt-3  float-end">
        <span>Forgot Password ?</span>
           
        </div>
        <div className="mt-5">
            <button  type="logIn" onClick={handleSubmit} className="btn btn-success" >LogIn</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Create;
