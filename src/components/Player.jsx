import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { ImLoop } from "react-icons/im";
import { FaRegHeart } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeMediumSharp } from "react-icons/io5";
import { BsVolumeMuteFill } from "react-icons/bs";
import { FaRandom } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import music from "../assets/music.mp3";
import { useSelector } from "react-redux";

const Player = () => {
  const { currentNaat } = useSelector((state) => state.playerState);
  const audioTag = useRef();
  const bar = useRef();
  const [volumeBar, setVolumeBar] = useState(false);
  const [loop, setLoop] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [timer, setTimer] = useState("0:00");
  const [duration, setDuration] = useState("0:00");
  const [volume, setVolume] = useState(100);

  const updateTimer = (e) => {
    audioTag.current.currentTime = e.target.value;
  };

  function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  const showVolume = () => {
    volumeBar ? setVolumeBar(false) : setVolumeBar(true);
  };

  useEffect(() => {
    audioTag.current.ontimeupdate = () => {
      let currentTime = Math.floor(audioTag.current.currentTime);
      setTimer(secondsToMinutes(currentTime));
    };
  }, []);

  const toggleLoop = () => {
    audioTag.current.loop = loop;
    loop ? setLoop(false) : setLoop(true);
  };

  const playerToggle = () => {
    let currentTime = Math.floor(audioTag.current.duration);
    setDuration(secondsToMinutes(currentTime));
    playing ? setPlaying(false) : setPlaying(true);
    if (playing) {
      audioTag.current.pause();
    } else {
      audioTag.current.play();
    }
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
    audioTag.current.volume = parseInt(e.target.value) / 100;
  };

  useEffect(() => {
    audioTag.current.play();
    setPlaying(true);
    console.log(currentNaat);
  }, [currentNaat]);

  return (
    <div className="fixed w-screen bottom-0 left-0 bg-slate-900 flex justify-center text-white p-3 items-center">
      <audio
        play={playing}
        ref={audioTag}
        src={currentNaat?.audio}
        className="hidden"
      ></audio>
      <div className="mx-6 text-sm bg--500 w-56">
        <h1>
          {currentNaat?.title?.length > 28
            ? currentNaat?.title.slice(0, 28) + "..."
            : currentNaat?.title}
        </h1>
        <p className="text-slate-300 text-xs">{currentNaat?.naat_khwan}</p>
      </div>
      <div className="controls flex">
        <MdSkipPrevious className="w-8 h-8 mx-2 cursor-pointer hover:opacity-70 transition-all" />
        {playing ? (
          <FaPause
            onClick={playerToggle}
            className="w-8 h-8 mx-2 cursor-pointer hover:opacity-70 transition-all"
          />
        ) : (
          <FaPlay
            onClick={playerToggle}
            className="w-8 h-8 mx-2 cursor-pointer hover:opacity-70 transition-all"
          />
        )}
        <MdSkipNext className="w-8 h-8 mx-2 cursor-pointer hover:opacity-70 transition-all" />
      </div>
      <div className="progress">
        <label className="mx-4" htmlFor="">
          {timer}
        </label>
        <input
          onChange={updateTimer}
          ref={bar}
          value={audioTag.current?.currentTime}
          type="range"
          className="w-96 appearance-none h-[2px] transition-all bg-white"
          max={audioTag.current?.duration}
        />
        <label className="mx-4" htmlFor="">
          {duration}
        </label>
      </div>
      <div className="flex items-center">
        {audioTag.current?.loop ? (
          <ImLoop
            onClick={toggleLoop}
            className="w-5 h-5 mx-3 cursor-pointer"
          />
        ) : (
          <FaRandom
            onClick={toggleLoop}
            className="w-5 h-5 mx-3 cursor-pointer"
          />
        )}
        <FaRegHeart className="w-5 h-5 mx-3 cursor-pointer" />
        <div className="flex items-center relative">
          {volume == 0 ? (
            <IoVolumeMute
              onMouseEnter={() => setVolumeBar(true)}
              onClick={showVolume}
              className="w-5 h-5 mx-3 cursor-pointer group"
            />
          ) : (
            <IoVolumeMediumSharp
              onMouseEnter={() => setVolumeBar(true)}
              onClick={showVolume}
              className="w-5 h-5 mx-3 cursor-pointer group"
            />
          )}

          <div
            onMouseLeave={() => setVolumeBar(false)}
            className={`bg-white absolute p-2 rounded-lg left-10 ${
              volumeBar ? null : "hidden"
            }`}
          >
            <input
              onChange={handleVolume}
              type="range"
              className={`h-21 h-1 bg-white`}
              max={100}
              value={volume}
              min={0}
            />
          </div>
        </div>
        <a
          href={music}
          download={currentNaat?.title}
          className="bg-green-500 rounded-full font-semibold py-2 px-3 mx-7 hover:opacity-75 transition-all flex items-center justify-center"
        >
          <IoMdDownload className="w-5 h-5 mx-1" />
          Download
        </a>
      </div>
    </div>
  );
};

export default Player;
