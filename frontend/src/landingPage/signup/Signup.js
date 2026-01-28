import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'
function Signup() {

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


    return (
        <div className="container">
            <h1 className='text-center mt-5'>Signup</h1>
            <p className='text-center'>Signup to start trading your favorite stocks.</p>
            <div className='col-md-6 mx-auto'>
                <form>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1" className='mb-1'>Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="johndoe@gmail.com"
                            value={email}
                            onChange={handleOnChange}

                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="exampleInputEmail1" className='mb-1'>Username</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="doe124"
                            value={username}
                            onChange={handleOnChange}


                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="exampleInputPassword1" className='mb-1'>Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"
                            value={password}
                            onChange={handleOnChange}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <span className='mx-4'>
                        Already have an account?  <Link to={"/login"}> Login</Link>
                    </span>
                </form>
            </div>



        </div>
    );
}

export default Signup;