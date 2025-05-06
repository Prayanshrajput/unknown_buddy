// import React, { useEffect, useState } from "react";
//  import { io } from "socket.io-client";

//  const socket = io("http://localhost:3000"); // Connect to the backend

// export const Chat = () => {
//     const[massage,setmassage]=useState([])
    
//     useEffect(()=>{
//         socket.on("msgfromserver",(msg)=>{
//             setmassage((prev)=>[...prev,{msg,"source":"server",time:""}])
//         })

//         return()=>{
//             socket.disconnect()
//         }
//     },[socket])
 
//    const [input,setinput]=useState({msg:""})
//     const inputhandler=(e)=>{
//         setinput((prev)=>{return {...prev,[e.target.name]:e.target.value}})
//         console.log(input)
//     }

//     const sendmessage=()=>{
//         setmassage((prev)=>[...prev,{msg:input.msg,"source":"client",time:""}])
//         console.log(massage)
//         socket.emit("sendtoall",input.msg)
//     }
//   return (
//     <div className="w-screen h-screen flex flex-col">
     
//       <div className="flex flex-col w-[90%] h-[80%]">
//       {
//         massage.map((data)=>{
//             return <div className={`flex ${data.source=='client'?"justify-end pr-16":"justify-start pl-16"}`}>{data.msg}</div>
//         })
//       }
//       </div>
//       <div className="flex gap-5 w-screen justify-center  ">
//       <input onChange={inputhandler} type="text" name="msg" className="w-[80%] border border-black rounded-lg pl-2" placeholder="Enter your msg" />
//       <button onClick={sendmessage} className="bg-green-400 px-2 py-1">Send</button>
//       </div>
//     </div>
//   );
// };



import React, { useState, useRef, useEffect } from 'react';
import { FaPaperclip, FaMicrophone, FaRegPaperPlane, FaCheckDouble, FaClock } from 'react-icons/fa';
import { io } from "socket.io-client";

 const socket = io("http://localhost:3000");

export const Chat = ({ recipientName }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false); // For voice messages

  useEffect(()=>{

             

            socket.on("msgfromserver",(msg)=>{
              console.log(msg)
              setMessages((prev)=>[...prev,{text:msg,sender:"server",status:'send',timestamp:new Date(),type:'text'}])
            })

            if (chatContainerRef.current) {
              chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
            }
    
            return()=>{
                socket.disconnect()
            }

        },[socket])

       


  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        text: newMessage,
        sender: 'You',
        timestamp: new Date(),
        status: 'sent', // sent, delivered, read
        type: 'text', // text, voice, image, file
      };
      setMessages((prev)=>[...prev,message]);
      socket.emit("sendtoall",newMessage)
      setNewMessage('');
    }
  };

  const handleVoiceMessage = () => {
    setIsRecording(!isRecording);
    // In a real app, you'd use the MediaRecorder API to record audio
    if (!isRecording) {
      console.log("Start Recording");
    } else {
      console.log("Stop Recording and Send");

      //simulated voice message.
      const message = {
        text: "Voice message",
        sender: "You",
        timestamp: new Date(),
        status: "sent",
        type: "voice"
      }
      setMessages([...messages, message]);
    }
  };

  const handleAttachment = () => {
    // Implement file/image attachment logic here
    console.log('Attachment clicked');
  };

  

  const getStatusIcon = (status) => {
    switch (status) {
      case 'sent':
        return <FaCheckDouble className="text-gray-500 text-xs" />;
      case 'delivered':
        return <FaCheckDouble className="text-blue-500 text-xs" />;
      case 'read':
        return <FaCheckDouble className="text-blue-500 text-xs" />; // Use a different icon if needed
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Chat Header */}
      <div className="bg-blue-300 text-white p-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Chat with {recipientName}</h2>
        <div className="flex space-x-2">
          {/* Add actions like call, video call, etc. here */}
        </div>
      </div>

      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="flex-grow p-4 overflow-y-auto space-y-2"
      >
        {messages.map((message, index) => (
     
          <>
      
         <div
            key={index}
            className={`flex ${
              message.sender === 'You' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-xs p-2 rounded-lg ${
                message.sender === 'You'
                  ? 'bg-blue-200 text-blue-800'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.type === 'text' && <p>{message.text}</p>}
              {message.type === 'voice' && <p>Voice Message</p>}
              <div className="flex items-center justify-end">
                <p className="text-xs text-gray-500 mt-1 mr-1">
                  {message.timestamp.toLocaleTimeString()}
                </p>
                {getStatusIcon(message.status)}
              </div>
            </div>
          </div> 
          </>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-300">
        <div className="flex items-center">
          <button onClick={handleAttachment} className="mr-2 text-gray-500">
            <FaPaperclip />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onKeyDown={(e)=>{e.key=='Enter'?handleSendMessage():""}}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700"
          >
            <FaRegPaperPlane />
          </button>
          <button onClick={handleVoiceMessage} className="ml-2 text-gray-500">
            <FaMicrophone />
          </button>
        </div>
      </div>
    </div>
  );
};

