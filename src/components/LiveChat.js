import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../Utils/helper";

function LiveChat() {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    let id = 1;
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(15) + " " + id++,
        })
      );
    }, 1000);

    return () => clearInterval(i);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLiveSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "SJ",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      <div className="w-full h-[525px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className=" flex w-full p-2 ml-2 border border-black"
        onSubmit={handleLiveSubmit}
      >
        <input
          className="w-full px-2"
          type="text"
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
          value={liveMessage}
        />
        <button className="px-2 mx-4 bg-green-300">Send</button>
      </form>
    </>
  );
}

export default LiveChat;
