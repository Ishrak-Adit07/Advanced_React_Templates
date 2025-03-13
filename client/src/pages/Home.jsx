/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import LoginForm from '../components/forms/LoginForm';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="full-screen">
      <div className="flex justify-center items-center w-full h-full">
        {loading && <i className="fa-solid fa-spinner animate-spin text-3xl text-center-block"></i>}
        {!loading && (
          <div className="">
            <LoginForm />
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
