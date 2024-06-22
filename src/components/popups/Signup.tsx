import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import logo from "../../../public/images/trt_logo_outlined.webp";
import { FaGoogle } from 'react-icons/fa';
import { TextInput } from '../TextInput';
import { AcknowledgementFooter } from '../AcknowledgementFooter';

const Signup = () => {
  return (
    <form className='w-bg-white p-8 rounded w-full flex flex-col justify-center items-center'>
      <Image src={logo} alt="Website logo" width={100} className="p-4" />
      <TextInput label={'Username'} type={"text"} />
      <TextInput label={'Email'} type={'email'} />
      <TextInput label={'Password'} type={'password'} />
      <Button
        type="submit"
        variant="contained"
        className="button-contained-default w-full my-2"
      >
        Sign Up
      </Button>

      <div>
        -------- OR ----------
      </div>

      <Button
        variant="contained"
        className="button-secondary w-full my-2"
      >
        <FaGoogle size={"20px"} className='mr-4'/>
        Continue with Google
      </Button>

      <AcknowledgementFooter/>
    </form>
  )
}

export default Signup



