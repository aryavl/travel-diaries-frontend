import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import  FormLabel  from '@mui/material/FormLabel'
import  TextField  from '@mui/material/TextField';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import React, { useState } from 'react'
import  Button  from '@mui/material/Button';
import { addPosts } from '../../api-helpers/helper';
import { useNavigate } from 'react-router-dom';


const Add = () => {
  const [inputs, setInputs] = useState({
    title:"",
    description:"",
    image:"",
    location:"",
    date:""
  })
  const navigate=useNavigate()
  const onResReceived = (data)=>{
    console.log(data);
    navigate('/diaries')
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    addPosts(inputs)
    .then(onResReceived)
    .catch(err=>console.log(err))
    
  }
  const handleChange= e =>{
    setInputs(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }
  return (
    <Box display={"flex"}
    flexDirection="column"
    width={"100%"}
    height="100%"
    >
      <Box display={"flex"}
      margin="auto"
      padding={2}
      >
        
      <Typography variant='h4' fontFamily={"dancing script"}>
          Add your travel diary
        </Typography>
        <CardTravelIcon sx={{fontSize:'2.5rem', paddingLeft:1,color:'lightcoral'}}/>
      </Box>
       <form action="" onSubmit={handleSubmit}>
        <Box padding={3} width='80%' display="flex" margin="auto" flexDirection={"column"}>
          <FormLabel>Title</FormLabel>
          <TextField value={inputs.title} required onChange={handleChange} name="title" sx={{fontFamily:"Quicksand"}} variant="standard"margin="normal"/>
          <FormLabel>Description</FormLabel>
          <TextField value={inputs.description} required onChange={handleChange} name="description" sx={{fontFamily:"Quicksand"}} variant="standard"margin="normal"/>
          <FormLabel>Image URL</FormLabel>
          <TextField value={inputs.image} required onChange={handleChange} name="image" sx={{fontFamily:"Quicksand"}} variant="standard"margin="normal"/>
          <FormLabel>Location</FormLabel>
          <TextField value={inputs.location} required onChange={handleChange} name="location" sx={{fontFamily:"Quicksand"}} variant="standard"margin="normal"/>
          <FormLabel>Date</FormLabel>
          <TextField type={'date'} value={inputs.date} required onChange={handleChange} name="date" sx={{fontFamily:"Quicksand"}} variant="standard"margin="normal"/>
          <Button type='submit' variant='contained' color='info' sx={{width:"50%",margin:"auto",borderRadius:7,mt:2}}> Post</Button>
        </Box>
       </form>
    </Box>
  )
}

export default Add