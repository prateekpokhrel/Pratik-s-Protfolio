import React, { useRef, useState, useEffect } from 'react';
import './intro.css';
import profileImg from '../../assets/image.jpg';
import { Link } from 'react-scroll';

const Intro = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const hasStarted = true;
  const [time, setTime] = useState(new Date());
  const [temperature, setTemperature] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation not supported');
      setWeatherError(true);
      setWeatherLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Got coords:', latitude, longitude);

        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=d9d03c0432a260b5b8cef39badafe8de`
          );
          console.log('Fetch response:', response.status);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log('Weather data:', data);
          if (data && data.main && typeof data.main.temp === 'number') {
            setTemperature(Math.round(data.main.temp));
          } else {
            console.error('Temperature not found in data', data);
            setWeatherError(true);
          }
        } catch (err) {
          console.error('Error fetching weather:', err);
          setWeatherError(true);
        } finally {
          setWeatherLoading(false);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        setWeatherError(true);
        setWeatherLoading(false);
      }
    );
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error('Audio play failed:', err));
    }
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <section id="intro">
      {hasStarted && (
        <audio ref={audioRef} loop style={{ display: 'none' }}>
          <source src="/music/background-music.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

      <div className="introContent">
        <h1 className="hello">Hello! I'm</h1>
        <h2 className="introName">
          Pratik Pokhrel
          <span className="underline"></span>
        </h2>
        <p className="introRole">
          Java Full Stack Developer along with AI Specialist.
        </p>
        <div className="btnGroup">
          <a
            href="https://drive.google.com/file/d/1lhosL4FhBZCnkTig589B9B2Tw4-gDMHk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Get Resume
          </a>
        </div>
        <Link>{/* Placeholder */}</Link>
        <div className="socialMedia">
          <a href="https://www.facebook.com/pratik.pokhrel.524" target="_blank" rel="noopener noreferrer" className="socialIcon">f</a>
          <a href="https://www.linkedin.com/in/pokhrelpratik/" target="_blank" rel="noopener noreferrer" className="socialIcon">in</a>
          <a href="https://x.com/PratikPokh28311" target="_blank" rel="noopener noreferrer" className="socialIcon">X</a>
        </div>
      </div>

      <div className="profileImageWrapper" style={{ textAlign: 'center' }}>
        <img src={profileImg} alt="Profile" className="profileImg" />

        <div className="timeWeatherWrapper" style={{ marginTop: '12px', color: '#666', fontSize: '1rem' }}>
          <div className="liveClock" style={{ fontWeight: '600' }}>
            Time: {formatTime(time)}
          </div>

          <div className="weatherInfo" style={{ marginTop: '6px' }}>
            {weatherLoading 
              ? 'Loading temperature...' 
              : weatherError 
                ? 'Failed to load weather' 
                : `Temperature: ${temperature}°C`}
          </div>
        </div>
      </div>

      <div className="musicWeatherWrapper" style={{ marginTop: '16px', textAlign: 'center' }}>
        <button
          className="musicToggleBtn"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          title={isPlaying ? 'Pause music' : 'Play music'}
          style={{ cursor: 'pointer' }}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
              <rect x="3" y="2" width="3" height="12" />
              <rect x="10" y="2" width="3" height="12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
              <path d="M3 2l10 6-10 6z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
};

export default Intro;

