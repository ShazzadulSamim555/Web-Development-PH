import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName]= useState("");

  // FIX 1: Define the missing handler for Email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange=(event)=>{
    setName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Your Name is:", name)
    console.log("Submitted:", { email, password });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="name" name="name" value={name} onChange={handleNameChange} placeholder="Enter your NameP"/>
        <br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email} // Use value for controlled components
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password} // Removed defaultValue to avoid conflict
          onChange={handlePasswordChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <p>Character count: {password.length}</p>
    </div>
  );
};

export default ControlledField;