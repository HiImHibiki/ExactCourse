import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../components/Footer';
import PrimaryNavbar from '../components/PrimaryNavbar';
import RegStep1 from '../components/RegStep1';
import RegStep2 from '../components/RegStep2';
import { register, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
// import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: '',
    phoneNumber: '',
    referralCode: '',
  });
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // TODO: ini lebih tepatnya bukan redirect ke homepage, tapi ke page dashboard
    // dimana dashboard bakalan check apakah user udah ada di local storage atau belum
    if (isSuccess || user) {
      navigate('/dashboard');
    }

    dispatch(reset);
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (propertyName) => (value) => {
    setFormData((prevState) => ({
      ...prevState,
      [propertyName]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const isSamePassword = formData.password === formData.confirmPassword;

    if (!isSamePassword) {
      toast.error('Password and Confirm Password must be same');
      return;
    }

    const { confirmPassword, ...userData } = formData;

    dispatch(register(userData));
  };

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const prevStep = () => {
    setStep((prevState) => prevState - 1);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <PrimaryNavbar />
      <div className="height-template flex  flex-col items-center justify-center bg-green-primary text-white">
        <h1 className="mb-10">Register</h1>

        <form onSubmit={onSubmit}>
          {step === 1 && <RegStep1 handleClick={nextStep} onChange={onChange} {...formData} />}
          {step === 2 && <RegStep2 handleClick={prevStep} onChange={onChange} {...formData} />}
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
