import {
     Sparkles,
     Share2,
       } from 'lucide-react';
import { useShare } from '../hooks/useShare';


export default function Hero() {
  const { shareCurrentUrl } = useShare();
  return (   
 <section className="py-32">
      


      <div className="max-w-7xl mx-auto px-6 text-center">

        <span className="bg-transparent gap-3 flex flex-row border border-black shadow-sm shadow-black-300 text-black-700 px-4 py-2 rounded-full">
         <Sparkles />  Stunning Designs
        </span>

        <h1 className="mt-8 text-6xl font-black text-black">
          ELEVEN (Shanghai)
        </h1>

        <p className="mt-6 text-slate-400 text-lg max-w-2xl mx-auto">
          Many projects around the world, featuring the Azerbaijan Pavilion at the Expo 2025 and many more! 
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-[#111] border-black border transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white text-slate-400 px-6 py-3 rounded-xl">
            Get in Touch
          </button>
          <button onClick={() =>
        shareCurrentUrl({
          title: "Eleven (Shanghai)",
          text: "From the first sketch to the last brick",
        })
      } 
  className="text-black text-lg transition duration-150 ease-in-out hover:scale-105 hover:border-b hover:border-black"
       ><Share2 />
</button> 
          <button className="border border-black-700 text-black px-6 py-3 rounded-xl">
            Learn More
         </button>

        </div>

      </div>
    </section>
  );
}
