import React from "react";

const FormAction = () => {
    const formAction=(formData)=>{
        console.log(formData.get('name'));
        console.log(formData.get('email'))
    }
  return (
    <div>
      <form action={formAction}>
        <input type="text" name="name" placeholder="Your name" />
        <br />
        <input type="email" name="email" placeholder="Enter Email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default FormAction;
