import Image from "next/image";

export default function Home() {
  return (
   <>
     <div className="w-full h-screen overflow-auto flex flex-col justify-center items-center">
        <div className=" flex justify-center items-center flex-col ">
          <h1 className="text-8xl font-bold  text-white shadow-lg">Youtube Video</h1>
          <h1 className="text-4xl font-bold  text-white shadow-lg">Downloader</h1>
        </div>
        <div className="mt-4  ">
          <form action="" className="flex justify-center items-center w-fit h-fit">
          <input type="text" className="w-96 h-9 outline-none px-4 py-2 text-black" placeholder="Paste URL Here" />
          <button type="submit" className="w-fit h-9 px-3 py-1 text-center  bg-indigo-700 text-white ">Submit</button>
          </form>
        </div>
     </div>
   </>
  );
}
