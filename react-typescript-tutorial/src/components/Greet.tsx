import React from 'react'

type GreetProps = {
  name: string;
  messagecount: number;
  isLoggedIn: boolean;
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn 
          ? `Hello, ${props.name}, your favorite number is ${props.messagecount}` 
          : `Welcome Stranger`}
      </h2>
    </div>
  );
};

export default Greet
