import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import PrimaryNavbar from '../components/PrimaryNavbar';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { login, reset } from '../features/auth/authSlice';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate('/dashboard');
    }

    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <PrimaryNavbar />
      <div className="height-template flex  flex-col items-center justify-center bg-green-primary text-white">
        <h1 className="mb-10">Login</h1>
        <div className="log-reg-container flex flex-col items-center justify-between">
          <div className="mb-10 flex flex-col items-center gap-3">
            <h4 className="font-sen text-ash-gray">Log in to your account</h4>
            <h2 className="font-sen text-ash-gray">Welcome to ExactCourse</h2>
          </div>
          <form className="flex flex-col items-center font-sans" onSubmit={onSubmit}>
            <div className="mb-4">
              <input
                className="focus:shadow-outline w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:outline-none"
                id="email"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </div>
            <div className="mb-6">
              <input
                className="focus:shadow-outline mb-5 w-80 appearance-none rounded border py-4 px-5 leading-tight text-gray-700 shadow focus:outline-none"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
              <Link to="/">
                <p className="font-sans text-ash-gray">Forgot password?</p>
              </Link>
            </div>
            <button type="submit" className="bg mt-6 w-52 bg-green-primary text-white">
              <h5 className="px-8 py-4 text-white">LOGIN</h5>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
