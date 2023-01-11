import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { sendAuthRequest } from "../api-helpers/helper";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authentication";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const dispatch=useDispatch()
  const [isSignUp, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const navigate= useNavigate()
  const onResReceived = (data)=>{
    if(isSignUp) localStorage.setItem("userId",data.user._id)
    else localStorage.setItem("userId",data.id)
    dispatch(authActions.login())
    navigate('/diaries')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignUp){
      sendAuthRequest(true,inputs)
      .then(onResReceived)
      .catch(err=>console.log(err))
    }else{
      sendAuthRequest(false,inputs)
      .then(onResReceived)
      .catch(err=>console.log(err))
    }
  
  };
  const handleChange = (e)=>{
setInputs(prevState=>({
  ...prevState,
  [e.target.name]:e.target.value
}))
  }
  return (
    <Box
      sx={{ width: { xs: "80%", md: "50%", lg: "40%" } }}
      borderRadius={10}
      boxShadow={"5px 5px 10px #ccc"}
      margin="3rem auto"
    >
      <form onSubmit={handleSubmit}>
        <Box
          display={"flex"}
          flexDirection="column"
          width={"60%"}
          // padding="5"
          margin={"auto"}
        >
          <Typography padding="15px 0" variant="h4" textAlign={"center"}>
            {isSignUp ? "Signup" : "Login"}
          </Typography>
          {isSignUp && (
            <>
              <FormLabel>Name</FormLabel>
              <TextField 
              value={inputs.name} 
              name="name" 
              margin="normal"
              required
              onChange={handleChange} 
              />
            </>
          )}
          <FormLabel>Email</FormLabel>
          <TextField 
          value={inputs.email} 
          name="email" 
          margin="normal" 
          type={"email"}
          required
          onChange={handleChange} 

          />
          <FormLabel>Password</FormLabel>
          <TextField
           value={inputs.password} 
           name="password" 
           margin="normal" 
           type={"password"}
           required
          onChange={handleChange} 

           />
          <Button
            sx={{ mt: 2, borderRadius: 10 }}
            type="submit"
            variant="contained"
            onChange={handleChange} 

          >
            {isSignUp ? "Signup" : "Login"}
          </Button>
          <Button
            onClick={() => {
              setIsSignup(!isSignUp);
            }}
            sx={{ mt: 2, mb: 4, borderRadius: 10 }}
            
            variant="outlined"
          >
            Change to {isSignUp ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
