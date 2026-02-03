import React,{useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
          email: "",
          password: "",
      });
      const {email,password} = inputValue;

      const handleOnChange =(e) =>{
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
     };

     const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

    const handleSubmit = async(e) =>{
      e.preventDefault();
      try{
        const {data} = await axios.post("https://zerodha-clone-2qba.onrender.com/login",{
          ...inputValue,
        },
        {withCredentials:true}
      );
      console.log(data);
      const {success,message} = data;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
             window.location.href = "https://main.d2ruveth5jwm9w.amplifyapp.com/";
        },1000)
      }else{
        handleError(message);
      }
      }catch(err){
        console.log(err);
      }
      setInputValue({
        ...inputValue,
        email:"",
        password:"",
      });
    };

  return (
    <div className='container'>
          <h1 className='text-center mt-5'>Login</h1>
          <p className='text-center'>Login to start trading your favorite stocks.</p>
            <div className='col-md-6 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1" className='mb-1'>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="johndoe@gmail.com"
                            value={email}
                            onChange={handleOnChange}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="exampleInputPassword1" className='mb-1'>Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" name="password"
                            value={password}
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                    <span className='mx-4'>
                        New here? Signup here  <Link to={"/singup"}> Signup</Link>
                    </span>
                </form>
                <ToastContainer/>
            </div>



    </div>
  )
}

export default Login