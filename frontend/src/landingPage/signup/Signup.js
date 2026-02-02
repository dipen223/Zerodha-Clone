    import React, { useState, useEffect } from 'react';
    import { Link,Navigate,useNavigate } from 'react-router-dom';
    import axios from 'axios';

    import { ToastContainer, toast } from "react-toastify";

    function Signup() {
        const navigate = useNavigate();
        const [inputValue, setInputValue] = useState({
            email: "",
            username: "",
            password: "",

        });
        const { email, password, username } = inputValue;

        const handleOnChange = (e) => {
            const { name, value } = e.target;
            setInputValue({
                ...inputValue,
                [name]: value,
            })
        }


        const handleError = (err) =>
            toast.error(err, {
                position: "bottom-left",
            });
        const handleSuccess = (msg) =>
            toast.success(msg, {
                position: "bottom-right",
            });


        const handleSubmit = async(e)=>{
            e.preventDefault();
            try{
                const {data} = await axios.post("http://localhost:8080/signup",
                    {
                        ...inputValue,
                    },
                    {withCredentials:true}

                );

                const {success,message} = data;
                if(success){
                    handleSuccess(message);
                    setTimeout(()=>{
                        navigate("/");
                    },1000);
                }else{
                    handleError(message);
                }

            }catch(error){
                console.log(error);
            }
            setInputValue({
                ...inputValue,
                email:"",
                username:"",
                password:"",
            
            });

        };

        return (
            <div className="container">
                <h1 className='text-center mt-5'>Signup</h1>
                <p className='text-center'>Signup to start trading your favorite stocks.</p>
                <div className='col-md-6 mx-auto'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1" className='mb-1'>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="johndoe@gmail.com"
                                value={email}
                                onChange={handleOnChange}

                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="username" className='mb-1'>Username</label>
                            <input type="username" class="form-control" id="username" name="username" aria-describedby="emailHelp" placeholder="doe124"
                                value={username}
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
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <span className='mx-4'>
                            Already have an account?  <Link to={"/login"}> Login</Link>
                        </span>
                    </form>
                    <ToastContainer/>
                </div>
            </div>
        );
    }

    export default Signup;