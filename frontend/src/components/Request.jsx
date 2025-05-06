import React, { useState } from 'react';

const Request = ({  onAccept, onReject }) => {
  let requests=[
    
    {
      name:"Prayansh",
      id:"",
      message:"Software Developer"
    },
    {
      name:"Rajneesh",
      id:"",
      message:"Software Engineer"
    },
    {
      name:"Satyam",
      id:"",
      message:"IIT Bombay"
    },
    {
      name:"Vishal",
      id:"",
      message:"Software Developer"
    }
  ]

  const [showRequests, setShowRequests] = useState(false);

  const handleToggleRequests = () => {
    setShowRequests(!showRequests);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
     
     <div>
          {requests.length === 0 ? (
            <div className="text-gray-500 font-extrabold flex justify-center items-center w-[100vw] h-[90vh] ">No pending requests.</div>
          ) : (
            <ul className="list-none pl-0">
              {requests.map((request) => (
                <li
                  key={request.id}
                  className="flex justify-between items-center border-b py-2"
                >
                  <div>
                    <span className="font-medium">{request.name}</span>
                    <p className="text-sm text-gray-600">{request.message}</p>
                  </div>
                  <div>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => onAccept(request.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => onReject(request.id)}
                    >
                      Reject
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
    </div>
  );
};

export default Request;