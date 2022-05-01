import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegStep1 from "../components/RegStep1";
import RegStep2 from "../components/RegStep2";
import { register, reset } from "../features/auth/authSlice";
// import { Link } from 'react-router-dom';

// FIXME: ini harus taroh di some sort of context
// jadi setelah user register gabisa lagi neken tombol register
// karena data nya dah ada di local storage
const Register = () => {
  // TODO: tambahin sesuai keinginanya, sesuai dengan backend
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // divide form data into steps
  const { name, email, password, phoneNumber } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      alert(message);
    }

    if (isSuccess || user) {
      navigate("/");
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

    // TODO: validation
    // validasi nya bisa difront end atau di backend
    // terserah mau dimana
    const userData = {
      name,
      password,
      email,
      phoneNumber,
    };

    dispatch(register(userData));
  };

  const nextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const prevStep = () => {
    setStep((prevState) => prevState - 1);
  };

  // TODO: create <Spinner /> component?
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="height-template flex  flex-col items-center justify-center bg-green-primary text-white">
      <h1 className="mb-10">Register</h1>

      <form onSubmit={onSubmit}>
        {step === 1 && (
          <RegStep1 handleClick={nextStep} onChange={onChange} {...formData} />
        )}
        {step === 2 && (
          <RegStep2 handleClick={prevStep} onChange={onChange} {...formData} />
        )}
      </form>
    </div>
  );
};

export default Register;
