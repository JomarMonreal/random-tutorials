import { Button } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
      <article className="bg-white p-8 rounded h-full w-full flex flex-col justify-center">
        <h2 className=" font-bold mb-6 text-center">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your password"
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            className="button-contained-default w-full my-2"
          >
            Log In
          </Button>
          <Button
            variant="contained"
            className="button-secondary w-full my-2"
          >
            Log In with Google
          </Button>
        </form>
      </article>
    
  );
};

export default Login;
