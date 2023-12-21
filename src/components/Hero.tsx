
import { MdOutlineEmail } from "react-icons/md";
import { IoSparkles } from "react-icons/io5";

function Hero() {
  return (
    <>
      <section className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="mb-7">
          <h1 className="font-bold text-3xl text-[#F2F2F2] mb-5">Hey I'm Ioan</h1>
          <p className="text-[#D9D9D9] text-lg">A 16-year-old experienced developer from Wales, specializing in both<br></br> front-end and back-end development.</p>
        </div>
        <div className="text-white text-lg flex justify-center font-normal">
          <button className="flex items-center px-4 py-2 bg-[#175FFF] rounded-md mr-4">
            View Details <IoSparkles className="ml-2" />
          </button>
          <button className="flex items-center px-5 py-1 border border-2 border-[#3617ff] rounded-md">
            Let's Talk <MdOutlineEmail className="ml-2" />
          </button>
        </div>
      </section>
    </>
  )
}

export default Hero
