import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { authActions } from '../../store/authentication';

const linksArr=["home","diaries","auth"]
const loggedInLinks=["home","diaries","add","profile",]
const Header = () => {
    const isLoggedIn= useSelector(state=>state.auth.isLoggedIn)
    const dispatch=useDispatch()
   const navigate=  useNavigate()
    const [value, setvalue]=useState()

    const handleClick= ()=>{
        dispatch(authActions.logout())
        localStorage.removeItem("userId")
        navigate("/")
    }
  return (
    <AppBar
    sx={{
        bgcolor:"transparent",
        position:"sticky"
    }}
    >
        <Toolbar>
            <ConnectingAirportsIcon
            sx={{
                marginLeft:'3rem',
                color:"#0d011f",
                fontSize:'3rem'
            }}
            />
            <Tabs
             value={value}
             onChange={(e,val)=>{
                
                // console.log(val) --> o/p => if we click on first tab gives o/p o 2nd tab gives 1 and so on... which means the second parameter val stores the corresping index value of the tab

                setvalue(val)
            
            }}
             sx={{
                ml:'auto',
                textDecoration:'none',
                }}>
                {isLoggedIn? loggedInLinks.map(link=>(
                
                    <Tab 
                    LinkComponent={Link}
                    to={`/${link === "home"? '':link}`}
                    sx={{
                        textDecoration:"none",
                        
                        ":hover":{
                            textDecoration:"underline",
                            textUnderlineOffset:"18px",
                        }
                    }} key={link} label={link}/>
                  
                ))
                :linksArr.map(link=>(   
                    <>           
                    <Tab 
                    LinkComponent={Link}
                    to={`/${link === "home"? '':link}`}
                    sx={{
                        textDecoration:"none",
                        color:'#0d011f',
                        fontWeight:'bold',
                        letterSpacing:"1px",
                        ":hover":{
                            textDecoration:"underline",
                            textUnderlineOffset:"18px",
                        },
                       
                    }} key={link} label={link}/>
                    
                  </>
                ))}
                {isLoggedIn && 
                 <Button 
                 onClick={handleClick}
                sx={{color:'white',
                padding:'0 1rem',
          
                background:"#0d011f",
              
            ":hover":{
                color:'#0d011f',
                background:'white',
                border:'2px solid #0d011f'
            }
            }}
                >Logout
                </Button>}
            </Tabs>
        </Toolbar>
    </AppBar>
  )
}

export default Header