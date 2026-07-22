import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Divider from "../components/Divider";
import trusted from "../data/json/trusted.json";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      
      <section className="py-20 bg-[#170901]">
        <div className="max-w-7xl mx-auto px-6">
<p className="text-center mb-4 text-2xl text-white font-bold border-b border-black">People Who Trust Us</p>
          <div className="grid md:grid-cols-3 gap-6">
 {trusted.map((person) => {
          
          return (
  
            <div 
              key={person.id}
              className="bg-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-xl">
                {person.name}
              </h3>

              <p className="text-slate-400 mt-3">
              {person.description}
              </p>
            </div>
          
        )}

      )}
            

          </div>
        </div>
      </section>
       <Divider className="bg-amber-400" />
    
      
    </>
  );
}
