import { useEffect, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Message from "../components/Message";
import {
  serverTimestamp,
  collection,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";


const Home = () => {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const lastMessage = useRef();

  const sendMessage = () => {
    addDoc(collection(db, "chats"), {
      sender: user?.displayName,
      message: input,
      time: serverTimestamp(),
    })
      .then(() => {
        setInput("");
        scrollToBottom();
      })
      .catch((error) => console.log(error.message));
  };

  const [messages] = useCollection(
    query(collection(db, "chats"), orderBy("time", "asc"))
  );

  const scrollToBottom = () => {
    lastMessage.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful.");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
        // An error happened.
      });
  };
  return (
    

      <div className=" bg-slate-200 flex flex-col gap-5  ">
        <div className=" flex justify-between p-5 bg-slate-600 rounded-b-md ">
          <h1 className=" logo text-white tracking-tighter ml-10 text-2xl ">
            WeChat
          </h1>
          <button
            onClick={handleSignOut}
            className=" py-1 px-2 rounded-sm font-semibold hover:font-bold text-custom-rgba bg-slate-300 "
          >
            Logout
          </button>
        </div>
        <div className="">
          <div className="  mt-10 mx-5 items-center">
            {messages?.docs?.map((message) => {
              return (
                <Message
                  key={message.id}
                  sender={message.data().sender}
                  message={message.data().message}
                  time={message?.data()?.time?.toDate().getTime()}
                />
              );
            })}
            <div ref={lastMessage} className=" mb-10"></div>
          </div>

          <div className=" m mr-5 fixed bottom-2 sm:mx-2 md:px-40 flex gap-3 items-center justify-between align-middle w-full">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className=" flex-1 border border-gray-300 rounded-md py-2 px-4 ml-2 focus:outline-none focus:ring ring-slate-300 "
              placeholder="Enter your message"
              type="text"
            />
            <button
              disabled={!input}
              onClick={sendMessage}
              className=" bg-green-500  disabled:bg-slate-500 disabled:cursor-not-allowed hover:bg-green-400 text-white font-bold py-2 px-4 rounded mr-5"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    
    
  );
};

export default Home;
