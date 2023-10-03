import moment from "moment/moment";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const Message = ({ sender, message, time }) => {
  const [user] = useAuthState(auth);
  return (
    <div className=" sm:mx-1 md:mx-1 lg:mx-20 ">
      <div
        className={` ${
          sender === user?.displayName
            ? " mb-1 p-2 ml-auto w-fit"
            : "  mb-1 p-2  object-right"
        }`}
      >
        <p
          className={` ${
            sender === user?.displayName
              ? " text-xs font-bold text-right"
              : "text-xs font-bold text-left"
          }`}
        >
          {sender}
        </p>
        <p
          className={` ${
            sender === user?.displayName
              ? "bg-white rounded-l-lg rounded-b-lg p-1 px-2 ml-auto w-fit min-w-full max-w-[80%] border border-slate-700"
              : "bg-slate-700 text-white  rounded-r-lg p-1 px-2 rounded-b-lg object-right w-fit max-w-[80%] border border-slate-900"
          }`}
        >
          {message}
        </p>
        <p
          className={` ${
            sender === user?.displayName
              ? " text-[10px] font-bold text-right text-slate-500"
              : "text-[10px] font-bold text-left text-slate-500"
          }`}
        >
          {moment(time).format("LT")}
        </p>
      </div>
    </div>
  );
};

export default Message;
