import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Robot from "../assets/robot.gif"

export default function Welcome() {
    const [userName,setUserName] = useState("")
    useEffect(()=>{
        const getUser = async()=>{
            setUserName(
                await JSON.parse(localStorage.getItem('chat-app-user')).username
            )
        }
        getUser()
    },[])
  return (
    <Container>
        <img src={Robot} alt="robot" />
        <h1>
            Welcome, <span>{userName}</span>
        </h1>
        <h3>Please select a chat to Start Messaging.</h3>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: white;
img{
    height: 20rem;
}
span{
    color: #4e00ff;
}

`
