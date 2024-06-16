import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../Utils/helper";

function LiveChat() {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  console.log(chatMessages, "chatMessages");
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

  return (
    <div className="w-full h-[525px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      <div>
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
    </div>
  );
}

export default LiveChat;
