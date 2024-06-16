import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

function LiveChat() {
  useEffect(() => {
    const i = setInterval(() => {
      console.log("III")
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full h-[525px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll ">
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
      <ChatMessage name={"SJ"} message={"This is Live Comment"} />
    </div>
  );
}

export default LiveChat;
