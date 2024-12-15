// import React from 'react';
import Attribute from "./Attribute.jsx";


function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center px-6 sm:px-12 lg:px-24">
                <div className="mb-6 relative w-48 h-48 mx-auto">
                    <img
                        src={Attribute.ImgProfile || 'https://via.placeholder.com/150'}
                        alt="Profile"
                        loading="lazy"
                        className="absolute rounded-full"
                    />
                    <div className="absolute w-48 h-48 rounded-full border-b-2 border-teal-500 animate-spin"/>
                </div>

                <h1 className="text-4xl font-semibold mb-2">{Attribute.Name}</h1>

                <p className="text-lg text-gray-400 mb-4">{Attribute.JobTitle}</p>

                <div className="flex justify-center space-x-6">
                    <a href={Attribute.SocialGithub} target="_blank" rel="noopener noreferrer"
                       className="text-teal-500 hover:text-teal-400">
                        <i className="fab fa-github text-2xl"></i>
                    </a>
                    <a href={Attribute.SocialLinkedin} target="_blank" rel="noopener noreferrer"
                       className="text-teal-500 hover:text-teal-400">
                        <i className="fab fa-linkedin text-2xl"></i>
                    </a>
                    <a href={Attribute.SocialTelegram} target="_blank" rel="noopener noreferrer"
                       className="text-teal-500 hover:text-teal-400">
                        <i className="fab fa-telegram text-2xl"></i>
                    </a>
                    <a href={Attribute.SocialEmail} target="_blank" rel="noopener noreferrer"
                       className="text-teal-500 hover:text-teal-400">
                        <i className="fa fa-square-envelope text-2xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
