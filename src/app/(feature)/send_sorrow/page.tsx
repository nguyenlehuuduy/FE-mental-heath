"use client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Star } from "../../../../components";
import { MESSAGES_SORROW } from "@/util/TextContants";

export default function SendSorrowPage() {
  const initialStars = Array.from({ length: 50 }, () => Date.now());
  const [stars, setStars] = useState<number[]>([...initialStars]);
  const [message, setMessage] = useState<string>();
  const [active, setActive] = useState<boolean>(false);
  const [moveUp, setMoveUp] = useState<boolean>(false);
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [showMessage, setShowMessage] = useState(false);

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    if (message) {
      setActive(true);
      playAudio();
    }
  };

  // Hiệu ứng di chuyển
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setMoveUp(true);
      }, 60000);

      const interval = setInterval(() => {
        setMessageIndex((prevIndex) => {
          if (prevIndex + 1 === MESSAGES_SORROW.length) {
            clearInterval(interval);
          } else {
            setShowMessage(false);
          }
          return prevIndex + 1;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [active]);

  useEffect(() => {
    if (!showMessage) {
      const timeout = setTimeout(() => {
        setShowMessage(true); // Hiển thị message mới sau khoảng thời gian nhất định
      }, 5000); // Thời gian delay trước khi hiển thị message mới
      return () => clearTimeout(timeout);
    }
  }, [showMessage]);

  // Tạo ngôi sao
  useEffect(() => {
    const interval = setInterval(() => {
      if (stars.length < 100) {
        // Chỉ thêm một ngôi sao mới nếu số lượng ngôi sao trong danh sách nhỏ hơn 100
        setStars((prevStars: number[]) => [...prevStars, Date.now()]);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [stars.length]);

  const removeStar = () => {
    setStars((prevStars: number[]) => prevStars.slice(1));
  };
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-[#515ad8] to-[#1e4157] overflow-hidden">
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-[700px] opacity-20 animate-pulse text-white text-center text-4xl">
        {active ? (
          <span className={showMessage ? "hidden-component" : "show-component"}>
            {messageIndex >= MESSAGES_SORROW.length
              ? "Hy vọng bạn cảm thấy bớt căng thẳng hơn một chút và kết nối nhiều hơn một chút"
              : MESSAGES_SORROW[messageIndex]}
          </span>
        ) : (
          <span>Đặt một muộn phiền của bạn vào đây</span>
        )}
      </div>
      {stars.map((star: number, index: number) => (
        <Star key={index} removeStar={removeStar} />
      ))}
      <div
        className={`mainStar-shadow-custom ${active && "shrinking-div"} ${moveUp && "duration-100 move-up"} border-none block absolute shadow-md h-[300px] w-[300px] rounded-full bg-[#ddd] m-auto  top-1/2 left-1/2 -ml-[127px] -mt-[150px]`}
      >
        <div className="flex justify-center items-center w-[210px] h-[210px] absolute top-[45%] left-1/2 -ml-[105px] -mt-[105px] text-center z-10">
          <span className=" text-3xl text-center font-bold z-10">
            {active && message}
          </span>
        </div>
      </div>
      <input
        placeholder="Điều gì đang làm bạn cảm thấy phiền?..."
        onChange={handleMessageChange}
        className={`absolute top-[72%] left-1/2 ${active && "hidden-component"} -ml-[150px] bg-white rounded-[16px] border-none p-2 pl-4 shadow-md  text-black text-base w-[350px] outline-none`}
      ></input>
      <button
        onClick={handleSubmit}
        className={`rounded-2xl ${active && "hidden-component"} uppercase text-center text-xl font-bold py-3 w-[150px] bg-red-400 border-none text-white overflow-hidden fixed top-[80%] left-1/2 -ml-[55px]`}
      >
        <span>Gửi</span>
      </button>
      <audio className="hidden" ref={audioRef} controls src="send_sorrow.mp3">
        <source src="send_sorrow.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
