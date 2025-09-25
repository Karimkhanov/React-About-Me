import React from 'react';
import './AboutUs.css';


import profileImage from '../assets/me.jpg'; 

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="sidebar">
        <img src={profileImage} alt="My Photo" className="profile-photo" />
        <h1 className="name">Karimkhanov Tursynkhan</h1>
        <h3 className="title">Data-Инженер</h3>
        <div className="social-links">
          <a href="https://github.com/Karimkhanov" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://t.me/timok331" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://www.linkedin.com/in/tursynkhan-karimkhanov-90b690346/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="main-content">
        <div className="content-card">
          <h2>Обо мне</h2>
          <p>
            Привет! Я Data-Инженер, увлеченный созданием интуитивно понятных и красивых пользовательских интерфейсов. Мне нравится изучать новые технологии и применять их на практике для решения реальных задач.
          </p>
          <p>
            В настоящее время я углубляюсь в экосистему React и совершенствую свои навыки в JavaScript, HTML и CSS.
          </p>
        </div>

        <div className="content-card">
          <h2>Мои контакты</h2>
          <p>
            Вы можете связаться со мной по электронной почте или найти меня в социальных сетях. Я всегда открыт для интересных предложений и сотрудничества.
          </p>
          <a href="mailto:ktimberlen@gmail.com" className="cta-button">
            Написать на Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;