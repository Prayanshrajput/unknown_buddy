import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faBriefcase,
  faGraduationCap,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import user from '/user.png' // Replace with your image

const profileData = {
  profileImage: user,
  name: 'Your Name',
  headline: 'Software Developer | React | Node.js',
  location: 'City, Country',
  experience: [
    {
      title: 'Software Engineer',
      company: 'Company A',
      duration: 'Jan 2022 - Present',
      description: 'Developed and maintained web applications...',
    },
    {
      title: 'Junior Developer',
      company: 'Company B',
      duration: 'Jun 2020 - Dec 2021',
      description: 'Assisted in front-end development...',
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University X',
      duration: '2016 - 2020',
      description: 'Focused on web development and algorithms.',
    },
  ],
  website: 'https://yourwebsite.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
};

export const Profile = () => {
  // return (
  //   <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
  //     {/* Profile Header */}
  //     <button className='flex  px-4 py-2 bg-gray-300 text-lg shadow-md rounded-lg absolute end-4'>Edit</button>
  //     <div className="flex flex-col items-center mb-6 border-b pb-4">
  //       <img
  //         src={profileData.profileImage}
  //         alt="Profile"
  //         className="w-32 h-32 rounded-full object-cover mb-4  shadow-md"
  //       />
        
  //       <h2 className="text-2xl font-semibold">{profileData.name}</h2>
  //       <p className="text-gray-600">{profileData.headline}</p>
  //       <div className="flex items-center text-gray-500 mt-2">
  //         <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
  //         <span>{profileData.location}</span>
  //       </div>
  //       <div className="flex mt-2">
  //         {profileData.linkedin && (
  //           <a
  //             href={profileData.linkedin}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="mr-2"
  //           >
  //             <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-2xl" />
  //           </a>
  //         )}
  //         {profileData.github && (
  //           <a
  //             href={profileData.github}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //             className="mr-2"
  //           >
  //             <FontAwesomeIcon icon={faGithub} className="text-gray-800 text-2xl" />
  //           </a>
  //         )}
  //         {profileData.website && (
  //           <a
  //             href={profileData.website}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             <FontAwesomeIcon icon={faLink} className="text-gray-700 text-2xl" />
  //           </a>
  //         )}
  //       </div>
  //     </div>

  //     {/* Experience Section */}
  //     <div className="mb-6">
  //       <h3 className="text-lg font-semibold mb-2 flex items-center">
  //         <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
  //         Experience
  //       </h3>
  //       {profileData.experience.map((exp, index) => (
  //         <div key={index} className="mb-4">
  //           <h4 className="font-medium">{exp.title}</h4>
  //           <p className="text-gray-600">{exp.company}</p>
  //           <p className="text-sm text-gray-500">{exp.duration}</p>
  //           <p className="mt-2 text-sm">{exp.description}</p>
  //         </div>
  //       ))}
  //     </div>

  //     {/* Education Section */}
  //     <div>
  //       <h3 className="text-lg font-semibold mb-2 flex items-center">
  //         <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
  //         Education
  //       </h3>
  //       {profileData.education.map((edu, index) => (
  //         <div key={index} className="mb-4">
  //           <h4 className="font-medium">{edu.degree}</h4>
  //           <p className="text-gray-600">{edu.school}</p>
  //           <p className="text-sm text-gray-500">{edu.duration}</p>
  //           <p className="mt-2 text-sm">{edu.description}</p>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative">
      {/* Edit Button */}
      <button className="absolute top-4 right-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm md:text-base rounded-lg transition-shadow shadow-sm hover:shadow-md">
        Edit
      </button>
  
      {/* Profile Header */}
      <div className="flex flex-col items-center mb-8 border-b pb-6">
        <img
          src={profileData.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4 ring-4 ring-blue-200 shadow-lg"
        />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{profileData.name}</h2>
        <p className="text-sm md:text-base text-gray-600 mt-1">{profileData.headline}</p>
        <div className="flex items-center text-gray-500 mt-2 text-sm">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
          <span>{profileData.location}</span>
        </div>
  
        {/* Social Links */}
        <div className="flex mt-4 space-x-4">
          {profileData.linkedin && (
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
          )}
          {profileData.github && (
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900"
            >
              <FontAwesomeIcon icon={faGithub} className="text-2xl" />
            </a>
          )}
          {profileData.website && (
            <a
              href={profileData.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faLink} className="text-2xl" />
            </a>
          )}
        </div>
      </div>
  
      {/* Experience Section */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-600">
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
          Experience
        </h3>
        {profileData.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-medium text-gray-800">{exp.title}</h4>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500 italic">{exp.duration}</p>
            <p className="mt-2 text-sm text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
  
      {/* Education Section */}
      <div>
        <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-600">
          <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
          Education
        </h3>
        {profileData.education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-lg font-medium text-gray-800">{edu.degree}</h4>
            <p className="text-gray-600">{edu.school}</p>
            <p className="text-sm text-gray-500 italic">{edu.duration}</p>
            <p className="mt-2 text-sm text-gray-700">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};