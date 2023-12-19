// About.js
import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Edlan Perez',
      image: 'https://cdn.discordapp.com/attachments/952166523831742494/1185919674957971486/Edlan.jpg?ex=65915cc3&is=657ee7c3&hm=7c96e383c203a357cc21bb4ca61acb4f7d265c5cfdba08484e828ad2ed2b645a&',
      text: 'Contribution: Documentation',
    },
    {
      name: 'Jio Detros',
      image: 'https://cdn.discordapp.com/attachments/952166523831742494/1185919674123304980/Jio.jpg?ex=65915cc3&is=657ee7c3&hm=c6b2c41d7077eeabb39e380a0f103b6535328e53b3cedb83f0ab093da3abf3f4&',
      text: 'Backend and Documentation',
    },
    {
      name: 'John Hendrick Urquiola',
      image: 'https://cdn.discordapp.com/attachments/952166523831742494/1185919674534342757/Hendrick.png?ex=65915cc3&is=657ee7c3&hm=9a293ff717c11f13aacc22f904bef9a19c973700f0558285caf44585358bb315&',
      text: 'Contribution: Documentation',
    },
    {
      name: 'Teree Cabanayan',
      image: 'https://cdn.discordapp.com/attachments/952166523831742494/1185923843311816784/308727846_2915494091927877_4828211873547160614_n.png?ex=659160a5&is=657eeba5&hm=929f1c3ab20fd414dbc741daa6485502d1a2c02ab8d41ea9aac617939be13644&',
      text: 'Front-end design',
    },
    {
      name: 'Kaye Mercado',
      image: 'https://cdn.discordapp.com/attachments/952166523831742494/1185923842703630366/264605508_5208819192480701_4377748910378600105_n.png?ex=659160a5&is=657eeba5&hm=1fb0074ea3ed2f4867cbd0f554a1635a93ffe2a6dde67287a1bcabdae7c2cd55&',
      text: 'Contribution: Documentation and Design',
    },
  ];

  const pageStyle = {
    backgroundImage: 'url("https://media.discordapp.net/attachments/952166523831742494/1186596594800406578/5.png?ex=6593d332&is=65815e32&hm=edfce7bbe2ab667088871fefa1a25dc8be05953675107fc165dfb2d186160400&=&format=webp&quality=lossless&width=1177&height=662")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    margin: '0',
    padding: '0',
  };

  const containerStyle = {
    paddingTop: '2px',
    paddingBottom: '3px',
  };

  return (
    <div className="about-container" style={pageStyle}>
      <div className="container" style={containerStyle}>
        <h2 className="mt-5 mb-4">Our Team</h2>
        <div className="row team-members">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="team-member">
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '250px',
                    height: '400px',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  }}
                />
                <h3>{member.name}</h3>
                <p>{member.text}</p>
              </div>
            </div>
          ))}
        </div>

        <hr style={{ width: '100%', borderTop: '5px solid #000', margin: '20px 0' }} />

        {/* Section about Bootstrap and React.js */}
        <div className="about-bootstrap-react mt-5">
          <h2>About Bootstrap and React.js</h2>
          <p>
            Bootstrap is a versatile front-end framework that streamlines the process of creating
            responsive and visually appealing web applications. It offers a rich set of pre-designed
            components and styles, facilitating rapid development and ensuring a consistent user
            interface.
          </p>
          <p>
            React.js, developed and maintained by Facebook, is a powerful JavaScript library for
            building interactive and reusable user interfaces. Its component-based architecture and
            virtual DOM make it an excellent choice for developing modern single-page applications
            with efficient UI updates and state management.
          </p>
          <p>
            Combining Bootstrap with React.js allows developers to leverage the best of both worlds.
            Bootstrap provides ready-made styles and components, while React enables a declarative
            approach to UI development and efficient state management, resulting in a compelling and
            visually appealing web application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
