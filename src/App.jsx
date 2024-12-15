// import React from 'react';
import {Helmet} from 'react-helmet';
import Attribute from "./Attribute.jsx";
import AttributePage from "./AttributePage.jsx";


function App() {
    return (
        <>
            <Helmet>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href={AttributePage.Icon} type="image/x-icon"/>
                <link rel="shortcut icon" href={AttributePage.Icon} type="image/x-icon"/>
                <link rel="icon" href={AttributePage.Icon} type="image/png"/>
                <link rel="icon" href={AttributePage.Icon} type="image/svg+xml"/>
                <link rel="apple-touch-icon" href={AttributePage.Icon}/>
                <title>{AttributePage.Title}</title>
                <meta name="description"
                      content={AttributePage.Description}/>
                <meta name="keywords" content={AttributePage.Keywords}/>
                <meta name="author" content={AttributePage.Author}/>
                <meta name="language" content={AttributePage.Language}/>
                <meta name="robots" content={AttributePage.Robots}/>
                <link rel="canonical" href={AttributePage.Canonical}/>
                <meta property="og:title" content={AttributePage.Title}/>
                <meta property="og:description" content={AttributePage.Description}/>
                <meta property="og:image" content={AttributePage.Profile}/>
                <meta property="og:url" content={AttributePage.Canonical}/>
                <meta property="og:type" content="website"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={AttributePage.Title}/>
                <meta name="twitter:description" content={AttributePage.Description}/>
                <meta name="twitter:image" content={AttributePage.Profile}/>
                <meta name="twitter:site" content={AttributePage.Twitter}/>
                <meta name="twitter:creator" content={AttributePage.Twitter}/>
                {AttributePage.JsonLdScript}
            </Helmet>

            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <div className="text-center px-6 sm:px-12 lg:px-24">
                    <div className="mb-6 relative w-48 h-48 mx-auto">
                        <img
                            src={Attribute.ImgProfile}
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
                        <a href={Attribute.SocialInstagram} target="_blank" rel="noopener noreferrer"
                           className="text-teal-500 hover:text-teal-400">
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                        <a href={Attribute.SocialTwitter} target="_blank" rel="noopener noreferrer"
                           className="text-teal-500 hover:text-teal-400">
                            <i className="fab fa-x-twitter text-2xl"></i>
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
        </>
    );
}

export default App;
