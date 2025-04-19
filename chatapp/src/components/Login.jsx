import React, { useEffect, useState } from 'react'
import '../style/login.css'
import socketIOClient from 'socket.io-client';


export default function Login() {
    const socket = socketIOClient('http://192.168.1.19:3000');
        useEffect(() => {
            socket.on('chat message', (msg) => {
                setMessages((prevMessages) => [...prevMessages, msg]);
            });
            return () => {
                socket.disconnect();
            };
        }
        );
    const [username, setUsername] = useState('')
    const [login,setLogin] = useState(false);
    const handleClick=()=>{
        if(username.length>0){
            localStorage.setItem('username',username);
            console.log(username);
            setLogin(true);
        }
        else{
            alert('Please enter a valid name')
        }
    }
    const [messages,setMessages] = useState([]);
    const [message,setMessage] = useState('');
    const handleSend=()=>{
        if(message.length>0){
            setMessages([...messages,{name:username,message:message}]);
            setMessage('');
            socket.emit('chat message', {name:username,message:message});
            console.log(messages);
        }
        else{
            alert('Please enter a message')
        }
    }
    
    if(login){
        
        return(
            <div className='enter'>
                <header>
                <h1>Welcome {username}</h1>
                
                <button onClick={() => {
                    localStorage.removeItem('username');
                    setLogin(false);
                }}>Logout</button>
                </header>
                <main>
                    <section>
                        <h2>Chat Room</h2>
                        <div className="chat">
                            {messages.map((msg,index)=>(
                                <div style={{display:"flex"}} key={index} className={`message ${msg.name===username?'sent':'received'}`}>
                                    <strong>{msg.name} : <span style={{fontWeight:"200"}}>{msg.message}</span></strong>
                                    
                                </div>
                            ))}
                        </div>
                        <input onChange={(e)=>setMessage(e.target.value)} value={message} type="text"  placeholder='Type a message...' />
                        <button onClick={handleSend}>Send</button>
                    </section>
                </main>

            </div>
        )
    }
  return (
    <div className='login'>
        <div className="login__container">
            <h1>Wellcome to HMessage</h1>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter your name' />
       
            <div className="btn">
                 <button onClick={handleClick}>Login</button>
           
            </div>
           
        </div>
    </div>
  )
}
