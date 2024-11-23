import React, { useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlay, faPause, faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const videoRef = useRef(null);
  // const [IsPlaying, SetIsPlaying] = useState(true);
  // const [IsMuted, setIsMuted] = useState(true);

  // const togglePlayPause = () => {
  //   if (IsPlaying) {
  //     videoRef.current.pause();
  //   } else {
  //     videoRef.current.play();
  //   }
  //   SetIsPlaying(!IsPlaying);
  // };

  // const toggleMute = () => {
  //   videoRef.current.muted = !IsMuted;
  //   setIsMuted(!IsMuted);
  // };

  return (
    <div style={styles.banner}>
      <video
        ref={videoRef}
        src="/videos/TRAIN DOOR.mp4" // Use relative path from public folder
        autoPlay
        loop
        muted
        disablePictureInPicture
        style={styles.video}
      />
      {/* <div style={styles.controls}>
        <button onClick={togglePlayPause} style={styles.button}>
          <FontAwesomeIcon icon={IsPlaying ? faPause : faPlay} size="lg" />
        </button>
        <button onClick={toggleMute} style={styles.button}>
          <FontAwesomeIcon icon={IsMuted ? faVolumeUp : faVolumeMute} size="lg" />
        </button>
      </div> */}

      {/* Text added to the bottom left */}
      <div className="relative xs:bottom-20 lg:bottom-5 md:bottom-20 sm:bottom-20">
  <h1 className="absolute xs:bottom-11  sm:bottom-5 md:bottom-6 lg:bottom-28 left-5 text-white font-bold text-shadow-lg lg:text-[50px] xs:text-[13px] font-canva-sans">
    WELCOME TO NECTERECLUB <br /> YOUR LAUNCHPAD TO GREATNESS
  </h1>
  <p className="xs:text-[13px] absolute xs:bottom-1 lg:bottom-10 left-5 text-white lg:text-2xl font-bold text-shadow-lg font-canva-sans">
    To unleash human potential by forging the mind with new learning habits
  </p>
  
  {/* Button added on the right side */}
  <div className=" sm:bottom-1 absolute md:bottom-2 lg:bottom-10 right-5">
    <button className="xs:text-[13px] sm:text-[23px] bg-blue-500  text-white  rounded-lg text-lg font-bold hover:bg-blue-600 transition-colors duration-300">
      Need a Club?
    </button>
  </div>
</div>

      
    </div>
  );
};

const styles = {
  banner: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  video: {
    width: '100%',
    height: '775px',
    objectFit: 'cover',
  },
  controls: {
    position: 'absolute',
    bottom: '10px',
    right: '20px',
    transform: 'translateY(-50%)',
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#333',
    color: '#fff',
    cursor: 'pointer',
  },
 
};

export default Banner;
