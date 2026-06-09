import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Divider from "../components/Divider";
import trusted from "../data/json/trusted.json";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
<p className="text-center mb-4 text-2xl text-black font-bold border-b border-black">People Who Trust Us</p>
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

      )};
            

          </div>
        </div>
      </section>
       <Divider />
      <section className="my-10 mx-3 flex flex-col items-center">
       <p className="my-7 text-2xl font-bold text-black">Our Services</p>
<div className="grid gris-cols-1 gap-6">
      <div className="max-w-75 border border-black rounded-xl p-5 bg-black transition-transform duration-300 ease-in-out hover:scale-103 hover:-translate-y-1 "> 

        <div className="p-3 my-2">
<p className="text-yellow-300 border-b border-grey-300 text-2xl font-bold hover:border-white transition-transform duration-300 ease-in-out p-5">Communication & Sales</p>
          </div>
       <ul className="list-disc flex flex-col mx-5 my-7 text-white gap-5">

<li className="mt-5 mb-3"><p className="text-lg font-bold"> 1stLine of Engagement</p></li>

<li>To engage exhibitors as soon as possible</li>
<li>To confirm exhibitors’ participation</li>
<li>To provide exhibitor’s manual</li>
<li>To provide hall & booth space layout</li>
<li>To confirm type of booth construction</li>
<li>To process deposits for booth space booking</li>

<li className="mt-5 mb-3"><p className="text-lg font-bold">2nd Line of Engagement</p></li>

<li>To promote Design & Build Services</li>
<li>To assist with taking of design brief</li>
<li>To assist with exhibition</li>
<li>To confirm type of booth constructionrelated matters</li>
<li>To assist with any other requirements like travel</li>
        
         </ul>
       </div>
<div className="max-w-75 border border-black rounded-xl p-5 bg-black transition-transform duration-300 ease-in-out hover:scale-103 hover:-translate-y-1 ">

        <div className="p-3 my-2">
<p className="text-yellow-300 border-b border-grey-300 text-2xl font-bold hover:border-white transition-transform duration-300 ease-in-out p-5">Design of the country pavilion</p>
          </div>
       <ul className="list-disc flex flex-col mx-5 my-7 text-white gap-5">
          <li className="mt-5 mb-3"><p className="text-lg font-bold">Raw Space Design</p></li>
<li>Conceptualization & Design</li>
<li>Content Creations</li>
<li>3D Renderings</li>
<li>2D Sectional drawings</li>
<li>Technical Design and Technical Planning</li>
<li>Urban/ Rural Design</li>
<li>Service Design</li>
<li>Human - centered Design</li>
<li>Furniture Design</li>
<li>Digital Design</li>
<li>Content Design and Content Making</li>

<li className="mt-5 mb-3"><p className="text-lg font-bold">Graphic Design</p></li>
<li>Visual Content Creations</li>
<li>Design Layout</li>
<li>Used in catalogues, brochures, marketing flyers, pull-up banners, etc.</li>
        </ul>
       </div>


</div>
      </section>
    </>
  );
}
