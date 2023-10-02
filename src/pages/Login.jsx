import loginImg from "../assets/login.svg";
import { auth, provider} from "../firebase"
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const signInWithGoogle  =  () => {
    
    signInWithPopup(auth,provider).catch((error) => console.log(error.message));
    
  }


  return (
    <div className=" bg-slate-200 h-screen">
      <div className="p-5 bg-gradient-to-r from-slate-400 to-slate-700 rounded-b-md ">
        <h1 className=" logo text-slate-900 tracking-tighter ml-10 sm:ml-10  text-2xl">
          WeChat
        </h1>
      </div>
      <div className=" text-center items-center">
        <div className=" mt-10 p-10 flex justify-center items-center">
          <img src={loginImg} alt="login" width="500px" />
        </div>
        <p className=" text-md leading-5 text-slate-700 font-serif mb-5">
          Welcome to <span className=" font-bold text-slate-600">WeChat</span>  - Connect, chat, and
          share moments  with <br /> friends and family seamlessly  on our
          messaging platform.
        </p>
        <button onClick={signInWithGoogle} className=" py-2 px-10 mt-5 bg-gradient-to-r from-slate-400 to-slate-700  text-slate-300 hover:font-semibold hover:text-slate-100 rounded-full shadow-lg hover:shadow-slate-400">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
