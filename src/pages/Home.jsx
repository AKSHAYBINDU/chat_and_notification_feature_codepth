const Home = () => {
  return (
    <div className=" bg-slate-200 h-screen flex flex-col gap-5">
      <div className=" flex justify-between p-5 bg-gradient-to-r from-slate-400 to-slate-700 rounded-b-md ">
        <h1 className=" logo text-slate-900 tracking-tighter ml-10 text-2xl ">
          WeChat
        </h1>
        <button className=" py-1 px-6 rounded-sm font-semibold hover:font-bold text-custom-rgba bg-slate-300 ">
          Logout
        </button>
      </div>
      <div className="">
        <div className="  mt-10 mx-5 items-center">
          <p>hello</p>
          <p>messages </p>
        </div >
          <div className=" m mr-5 fixed bottom-2 sm:mx-2 md:px-40 flex gap-3 items-center justify-between align-middle w-full">
            <input
              className=" flex-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring ring-slate-300 "
              placeholder="Enter your message"
              type="text"
            />
            <button className=" bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded ">
              Send
            </button>
          </div>
      </div>
    </div>
  );
};

export default Home;
