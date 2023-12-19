// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Home = () => {
  const recentContents = [
    {
      title: 'Sipping Serenity in a Cup ☕',
      description: 'Where coffee meets conversations, and every espresso is a shot of inspiration. #PampangaCoffeeShops',
      imageUrl: 'https://cdn.discordapp.com/attachments/952166523831742494/1186587473866932264/167FAD85-2549-4AB2-8FA9-652D29418B06.jpg?ex=6593cab3&is=658155b3&hm=891afbb26967f2194ee513659eae6070d94e7432176bf28c824baf874737863c&',
    },
    {
      title: 'ARDUINO Adventures 💡',
      description: 'Unleashing creativity, one circuit at a time. Building dreams with lines of code and the magic of Arduino. #InnovationInMotion',
      imageUrl: 'https://cdn.discordapp.com/attachments/952166523831742494/1186587717723754538/DBC65B77-D17A-468C-87F9-CCCB8A0529B5.jpg?ex=6593caed&is=658155ed&hm=a2e874c94d0ced7a17598d7f858b914cf9521db10727e96a224e9130516f5863&',
    },
    {
      title: 'School Days 🎓',
      description: 'In the hallowed halls of knowledge, every chapter unfolds a new verse. #SchoolDays',
      imageUrl: 'https://cdn.discordapp.com/attachments/952166523831742494/1186587551482531901/C9557323-2BA0-49B9-BCE7-D852E615925A.jpg?ex=6593cac6&is=658155c6&hm=b20e5f8cfd315731f96cf4c6813710b8b40d61dfef403e64f865949bd86416cc&',
    },
    {
      title: 'Parisian Elegance 🗼',
      description: 'City of Lights and Love. #ParisianCharm',
      imageUrl: 'https://cdn.discordapp.com/attachments/952166523831742494/1186587812296933517/0FDCBC6F-B79A-4515-BDBF-3F95859DE74F.jpg?ex=6593cb04&is=65815604&hm=798f1bea04f09e6a7e00068240f41a05628729666949f8f5e8013a704382201c&',
    },
    {
      title: 'Culinary Canvas 🍽️',
      description: 'Embark on a gastronomic journey where flavors dance on the palate and every dish is a masterpiece. #FoodieAdventure',
      imageUrl: 'https://cdn.discordapp.com/attachments/952166523831742494/1186587984049483807/72995251-DC11-45BA-B400-84F1D2AEC69C.jpg?ex=6593cb2d&is=6581562d&hm=422bb510f22598289269f4edb1a4273a5457aac22b61a988b8886fbd3022d22d&',
    },
    {
      title: 'Celestial Kaleidoscope 🌈🌙',
      description: 'A Symphony of Colorful Skies and Moonlit Dreams. #ColorfulSkies #Moon',
      imageUrl: 'https://cdn.discordapp.com/attachments/952166523831742494/1186588060381630494/553E67A4-9610-4D13-9086-DAEC055BC049.jpg?ex=6593cb3f&is=6581563f&hm=e76a95a6029e155ebaf60fc7ee48a38635c8083e5f44be4e23e69093a001fe91&',
    },
  ];

  return (
    <div className="home-container">
      <div className="cover-image container-fluid">
        <div className="cover-text text-center text-white">
          <h1>Welcome to My Website</h1>
          <p className="lead">Explore amazing content and more...</p>
        </div>
      </div>

      <div className="container mt-4">
        <h2 className="text-center mb-4">Recent Contents</h2>
        <div className="row">
          {recentContents.map((content, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={content.imageUrl}
                  className="card-img-top"
                  alt={content.title}
                  style={{
                    height: '600px',
                    objectFit: 'cover',
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{content.title}</h5>
                  <p className="card-text">{content.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4 text-center">
        <Link to="/blog" className="btn btn-primary">
          Add More Posts
        </Link>
      </div>
    </div>
  );
};



export default Home;
