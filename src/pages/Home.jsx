import Hero from "../components/Hero";
import Ticker from "../components/Ticker";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
<p className="text-center mb-4 text-2xl text-black font-bold border-b border-black">People Who Trust Us</p>
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                Lorem Ipsum
              </h3>

              <p className="text-slate-400 mt-3">
              Lorem Ipsum si dolori amet.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                Max Mustermann
              </h3>

              <p className="text-slate-400 mt-3">
                Mir gehen die Ideen für Platzhalter aus...
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                Etwas Text
              </h3>

              <p className="text-slate-400 mt-3">
                Hier könnte ihre Webung stehen...
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
