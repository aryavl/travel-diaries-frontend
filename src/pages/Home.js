import React from 'react'
import Box  from '@mui/material/Box'
import Typography  from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Box
    position={"relative"}
    width="100%"
    height="90vh"
    >
      <img src="https://images.unsplash.com/photo-1486673748761-a8d18475c757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9hZHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="road" width={"100%"} height="80%" />
     <Typography variant='h3'
     fontFamily={'Dancing Script,cursive'}
     
     sx={{
      textAlign:'center',
      fontWeight:"bold",
      color:"#202226",
      width:"100%",
      position:"absolute",
      top:'0'
     }}>
      Dare to live the life you've always wanted
     </Typography>
     <Box
     width={"100%"}
     height="30%"
     display={"flex"}
     flexDirection="column"
     >
        <Typography
        fontFamily={'Quicksand'}
        textAlign={"center"}
        variant="h4"
        padding={4}
        textTransform="uppercase"
        >
          share your travel diaries with us 
        </Typography>
        <Box
        margin={"auto"}
        >
          <Button 
           LinkComponent={Link}
           to="/add"
          variant="outlined"
          sx={{mr:2, textTransform:"capitalize",
          color:'#0d011f',
          borderColor:'#0d011f',
          ":hover":{
            color:'#fff',
            background:'#0d011f',
            borderColor:'#0d011f'
        }
        
        }}
          >
            Share Your story
          </Button>
          <Button
          LinkComponent={Link}
          to="/diaries"
          variant='contained'
          sx={{
            ml:2,
            textTransform:"capitalize",
            background:'#0d011f',
            ":hover":{
              color:'#0d011f',
              background:'white',
              border:'2px solid #0d011f'
          }
          }}
          >
            View your diaries
          </Button>
        </Box>
     </Box>
    </Box>
  )
}

export default Home