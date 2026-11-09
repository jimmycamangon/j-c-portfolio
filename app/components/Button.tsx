import React from 'react';
import { Link } from 'react-scroll';

interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps) => {
  return (
    <div className='w-full flex justify-center'>
      <Link
        to='projects'
        smooth={true}
        offset={-100}
        duration={500}
        className='bg-ink text-paper p-2 font-mono text-xs uppercase tracking-[0.18em] w-52 hover:bg-signal flex justify-center transition-transform hover:translate-y-[-5px] cursor-pointer'
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default Button;
