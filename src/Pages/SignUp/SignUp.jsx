import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        console.log(name, email, password)

        // create user

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error => console.error(error))


    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row ">
                <div className="text-center lg:text-left w-1/2 mr-5">
                    <img src={login} alt="" />

                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-4xl text-center font-bold">SignUp</h1>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='password' placeholder="your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn text-white bg-[#FF3811]" type="submit" value="Sign In" />
                        </div>
                        <p>Already Have an Account?<Link className='text-[#FF3811]' to='/login'>Sign In</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;