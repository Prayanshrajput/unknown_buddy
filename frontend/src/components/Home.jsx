// import React, { useState } from 'react'

// export const Home = () => {
//   const[data,setdata]=useState("")

//   const eventhandeling=async(event)=>{
//     setdata(event.target.value)
//     console.log(data)
//   }

//     const req=async()=>{
//       const response=await fetch("http://localhost:3000/home")

//       console.log(response)
//     }

//   return (
//     <div className='flex flex-col w-screen h-screen justify-center items-center gap-5'>
//       {/* <input onChange={eventhandeling} type="text" name="" id="" />
//       <button onClick={req}>Submit</button> */}

//       <h1 className=' text-black font-bold text-2xl'>Welcome To Skill Sharing Platform !!</h1>
//     </div>
//   )
// }


import React from 'react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     
      {/* Hero Section */}
      <section className="bg-blue-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Unlock Your Potential with Unknown buddy</h2>
          <p className="text-lg text-gray-700 mb-8">Connect, share, and grow your skills with a community of learners.</p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700">Get Started</button>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-8">Featured Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Skill Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">Web Development</h4>
              <p className="text-gray-600">Learn to build modern web applications.</p>
              <button className="mt-4 bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-300">Explore</button>
            </div>
            {/* Skill Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">Graphic Design</h4>
              <p className="text-gray-600">Create stunning visuals and designs.</p>
              <button className="mt-4 bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-300">Explore</button>
            </div>
            {/* Skill Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-semibold mb-2">Data Science</h4>
              <p className="text-gray-600">Analyze data and gain valuable insights.</p>
              <button className="mt-4 bg-gray-200 py-2 px-4 rounded-full hover:bg-gray-300">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-200 py-16 text-center">
        <div className="container mx-auto">
          <h3 className="text-3xl font-semibold mb-4">Ready to Share Your Skills?</h3>
          <p className="text-lg text-gray-700 mb-8">Join our community and start connecting with others.</p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700">Join Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} SkillUp Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

