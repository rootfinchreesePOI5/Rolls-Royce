import React from 'react';
import video1 from '../../assets/rolls-images/blackbadge.mp4';
import video2 from '../../assets/rolls-images/eklep.mp4';
import video3 from '../../assets/rolls-images/Scintilla.mp4';
import image1 from '../../assets/rolls-images/b2.jpg';
import image2 from '../../assets/rolls-images/e1.jpg';
import image3 from '../../assets/rolls-images/s1.jpg';
import play from '../../assets/rolls-images/play_icon.png';
import pause from '../../assets/rolls-images/pause_icon.png';

const Background = ({ playstatus, heroCount, heroData, setheroCount, setPlaystatus }) => {
  // Video and background image sources based on heroCount
  const videoSources = [video1, video2, video3];
  const backgroundImages = [image1, image2, image3];

  return (
    <div
      className="section"
      style={{
        backgroundImage: playstatus ? 'none' : `url(${backgroundImages[heroCount]})`,
        height: playstatus ? '100vh' : 'auto',
      }}
    >
      {playstatus && (
        <video
          playsInline
          className="video-bg"
          autoPlay
          loop
          style={{ display: playstatus ? 'block' : 'none' }}
        >
          <source src={videoSources[heroCount]} type="video/mp4" />
        </video>
      )}
      <div className="inner-text">
        <h1>{heroData.text1}</h1>
        <p>{heroData.text2}</p>
      </div>
      <div className="play-vid">
        <ul className="hero-dots">
          <li onClick={() => setheroCount(0)} className={heroCount === 0 ? 'hero-dot brown' : 'hero-dot'}></li>
          <li onClick={() => setheroCount(1)} className={heroCount === 1 ? 'hero-dot gold' : 'hero-dot'}></li>
          <li onClick={() => setheroCount(2)} className={heroCount === 2 ? 'hero-dot white' : 'hero-dot'}></li>
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlaystatus(!playstatus)}
            src={playstatus ? pause : play}
            alt="Play/Pause Icon"
          />
          <p>{playstatus ? 'Pause Video' : 'See video'}</p>
        </div>
      </div>
    </div>
  );
};

export default Background;
