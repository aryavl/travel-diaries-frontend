import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getPostDetails, postUpdate } from '../../api-helpers/helper'
import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import  FormLabel  from '@mui/material/FormLabel'
import  TextField  from '@mui/material/TextField';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import  Button  from '@mui/material/Button';
const DiaryUpdate = () => {
    const id= useParams().id
    const navigate=useNavigate()
    const [post, setPost] = useState()
    const [inputs, setInputs] = useState({
        title:"",
        description:"",
        image:"",
        location:"",
        
      })
    const onResReceived =(data)=>{
      console.log(data)
      navigate('/profile')
    }
    useEffect(()=>{
        getPostDetails(id)
        .then(res=>{
            setPost(res.post)
            setInputs({
                title:res.post.title,
                description:res.post.description,
                image:res.post.image,
                location:res.post.location
            })
        })
        
        .catch(err=>console.log(err))
    },[id])
      const handleSubmit = (e)=>{
        e.preventDefault()
        postUpdate(inputs,id)
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
              <Button type='submit' variant='contained' color='info' sx={{width:"50%",margin:"auto",borderRadius:7,mt:2}}> Post</Button>
            </Box>
           </form>
        </Box>
  )
}

export default DiaryUpdate