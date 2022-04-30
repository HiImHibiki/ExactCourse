import React, { useState } from 'react';
import RegStep1 from '../components/RegStep1';
import RegStep2 from '../components/RegStep2';
// import { Link } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    birthday: new Date(),
    gender: '',
    referralCode: '',
  });
  const [currentForm, setCurrentForm] = useState(1);

  const { name, email, password, confirmPassword, phoneNumber, birthday, gender, referralCode } =
    data;

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: dispatch react-redux
    // TODO: validasi sisanya
    console.log(data);
  };

  const nextStep = () => {
    // TODO: validation

    setCurrentForm((curr) => curr + 1);
  };

  return (
    <div className="height-template flex  flex-col items-center justify-center bg-green-primary text-white">
      <h1 className="mb-10">Register</h1>
      <form onSubmit={onSubmit}>
        {currentForm === 1 && (
          <RegStep1
            name={name}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            onChange={onChange}
            handleClick={nextStep}
          />
        )}
        {currentForm === 2 && (
          <RegStep2
            phoneNumber={phoneNumber}
            birthday={birthday}
            gender={gender}
            referralCode={referralCode}
            onChange={onChange}
          />
        )}
      </form>
    </div>
  );
};

export default Register;
