import React, { useEffect, useState } from 'react'
import  Box  from '@mui/material/Box'
import  Typography  from '@mui/material/Typography'
import { getUserDetails } from '../api-helpers/helper'
import DiaryItem from '../pages/diary/DiaryItem'

const Profile = () => {
  const [user, setUser] = useState()
  useEffect(() => {
  getUserDetails()
  .then(data=>setUser(data.user))
  .catch(err=>console.log(err))
  }, [])
  let userName
  let userId
  console.log(user);
 if(user){
  userName= user.name
  userId=user._id
 }
  
  return (
    <Box display={"flex"} flexDirection="column">
      {user && <>
      
      <Typography
      textAlign={"center"}
      fontFamily="Quicksand"
      variant='h3'
      padding={2}
      >
User Profile
      </Typography>
     
          <Typography
          fontFamily={"Quicksand"}
          padding="0 1rem"
          textAlign='left'
          >
            Name : {user.name}
          </Typography>
          <Typography
          fontFamily={"Quicksand"}
          padding={"0.5rem 1rem"}
          textAlign='left'
          >
            Email : {user.email}
          </Typography>
      <Box display={"flex"}
      flexDirection="column"
      justifyContent={'center'}
      alignItems="center"
      >
        { user.posts.map((post,index)=>

        <DiaryItem 
        key={index}
        id={post._id}
        title={post.title} 
        description={post.description}
        location={post.location}
        image={post.image}
        user={userId}
        name={userName}
        date={new Date(`${post.date}`).toLocaleDateString()}
        />
        )}
      </Box>
      </>}
    </Box>
  )
}

export default Profile