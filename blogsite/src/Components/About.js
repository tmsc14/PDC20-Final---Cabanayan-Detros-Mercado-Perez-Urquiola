// About.js
import React from 'react';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: 'Edlan Perez',
      image: 'https://cdn.discordapp.com/attachments/952166523831742494/1185919674957971486/Edlan.jpg?ex=65915cc3&is=657ee7c3&hm=7c96e383c203a357cc21bb4ca61acb4f7d265c5cfdba08484e828ad2ed2b645a&',
    },
    {
      name: 'Jio Detros',
      image: 'https://cdn.discordapp.com/attachments/952166523831742494/1185919674123304980/Jio.jpg?ex=65915cc3&is=657ee7c3&hm=c6b2c41d7077eeabb39e380a0f103b6535328e53b3cedb83f0ab093da3abf3f4&',
    },
    {
      name: 'John Hendrick Urquiola',
      image: 'https://cdn.discordapp.com/attachments/952166523831742494/1185919674534342757/Hendrick.png?ex=65915cc3&is=657ee7c3&hm=9a293ff717c11f13aacc22f904bef9a19c973700f0558285caf44585358bb315&',
    },
    {
      name: 'Teree Cabanayan',
      image: 'https://cdn.discordapp.com/attachments/952166523831742494/1186644299815845898/A0C0FF52-6D90-4083-B409-96496A6690CE.jpg?ex=6593ff9f&is=65818a9f&hm=cb2f0ef550aad07bdfb6ed25e5c05c47fc4f3dbd0e495f07d75a9b6a4e7ee45e&',
    },
    {
      name: 'Kaye Mercado',
      image: 'https://cdn.discordapp.com/attachments/952166523831742494/1186643163268522024/7E66EF38-0BB7-42FD-9A63-D358B5426927.jpg?ex=6593fe90&is=65818990&hm=56494edf16021777e12dc19c1a24a349e516d5459afc619378b31113bf3a81bb&',
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
          <h2>About Lens Symphony 📸</h2>
          <p>
          Lens Symphony is a captivating blogsite that orchestrates a visual symphony through the 
          art of photography. Immerse yourself in a world where each post is a unique composition, 
          capturing the essence of moments, emotions, and the beauty that surrounds us. From the 
          delicate play of light to the vibrant colors of nature, Lens Symphony invites you to 
          explore diverse perspectives through a lens. 🌈✨
          </p>
          <p>
          Dive into the eloquent narratives accompanying each image, as the blogsite weaves stories 
          that resonate with the visual melodies captured by the lens. Whether it's the hustle and 
          bustle of urban life or the serene landscapes, Lens Symphony aims to evoke emotions and 
          spark contemplation. 🏙️🍃
          </p>
          <p>
          Join the community of fellow enthusiasts who appreciate the poetry of visuals and the 
          stories they tell. Lens Symphony is not just a blogsite; it's a celebration of the 
          artistry that unfolds when creativity meets the lens, creating a symphony that 
          resonates with the soul. 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
