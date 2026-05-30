import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Divider from "../components/Divider";

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
       <Divider />
      <section className="my-10 mx-3 flex flex-col items-center">
       <p className="text-2xl font-bold text-black">Our Services</p>
    <div className="overflow-x-auto">
      <table className="p-6 min-w-[700px] border border-black/20 rounded-xl overflow-hidden">
        <thead className="bg-black text-[yellow]">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Communication & Sales</th>
            <th className="text-left p-4">Design of the country pavilion</th>
            <th className="text-left p-4">Product Management</th>
            <th className="text-left p-4">Construction and Materials</th>
            <th className="text-left p-4">Productipn And Construction Of Aluminium Steel Structures</th>
            <th className="text-left p-4">Power</th>
            <th className="text-left p-4">ICT And Security Systems</th>
            <th className="text-left p-4">HVAC</th>
          </tr>
        </thead>

        <tbody className="bg-[#001111] text-[yellow]">
          <tr className="border-t border-black/30 hover:bg-black/30 transition">
            <td className="p-4"></td>
            <td className="p-4">CEO</td>
            <td className="p-4 text-green-400">Active</td>
          </tr>

          <tr className="border-t border-black/30 hover:bg-black/30 transition">
            <td className="p-4">Support Team</td>
            <td className="p-4">Support</td>
            <td className="p-4 text-yellow-400">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  
      </section>
    </>
  );
}
