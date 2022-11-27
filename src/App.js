import { useRef, useState } from "react";

function App() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();

  const toggleVideo = () => {
    if(playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(prev => !prev);
  }

  const updateUseRef = () => {
    videoRef.current.classList.toggle('hoge');
  }

  return (
    <>
      <video ref={videoRef}>
        <source src='https://media.istockphoto.com/id/1359576900/ja/%E3%83%93%E3%83%87%E3%82%AA/%E3%83%90%E3%83%83%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%88%E3%81%AE%E5%A4%AA%E9%99%BD%E5%85%89%E3%82%B9%E3%83%AD%E3%83%BC%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%BA%E3%83%BC%E3%83%A0%E3%82%A2%E3%82%A6%E3%83%88%E3%81%A7%E3%83%9B%E3%83%90%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%8F%E3%83%81%E3%83%89%E3%83%AA.mp4?s=mp4-640x640-is&k=20&c=gMli2pw31Rws_91FARDHTE2mJ4zteLoTXyCl8zGm-WE=' />
      </video>
      <div>
        <button onClick={toggleVideo}>
          {playing ? 'Stop' : 'Start'}
        </button>
        <button onClick={updateUseRef}>
          useRefを更新します。
        </button>
      </div>
    </>
  );
}

export default App;
