import { Sparkles, User, } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {

return (
<>

<div className="flex flex-col gap-10 text-center text-black font-bold mt-10 items-center">
<Sparkles className="animation-bounce-10s" size={64} />
<p className="text-4xl font-bold">Contact us</p>
</div>

<div className="grid grid-rows-2 sm:grid-rows-1 gap-10 my-10">

{/*---User Cards---*/}
<div className="gap-10 w-auto mx-5 flex flex-col rounded-xl p-6 border-y border-black bg-[#001111] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-white">
<div className="w-70 flex flex-col justify-center items-center text-[yellow] border border-[yellow] rounded-xl shadow-md shadow-[yellow] p-20">
<User size={64} />
<p className="font-bold size-15px text-red-700">No Image Selected</p>
</div>
<div className="w-[70%] line-spacing-3 text-[yellow]">
<p>Lorem ipsum dolori amet</p>
</div>
<div className="p-4 border border-[yellow] rounded-lg">

<ul className="list-style-type-none">
<li><Link to="tel:012345678901" className="transition delay-150 duration-300 ease-in font-bold text-[yellow] hover:border-b hover:border-[yellow] hover:text-white">Tel: +49 15112345678</Link></li>
<li><Link to="mailto:example@example.com" className="transition delay-150 duration-300 ease-in font-bold text-[yellow] hover:border-b hover:border-[yellow] hover:text-white">Email: user@irgendwas.com</Link></li>
</ul>

</div>
</div>

<div className="gap-10 w-auto mx-5 flex flex-col rounded-xl p-6 border-y border-black bg-[#001111] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-white">
<div className="w-70 flex flex-col justify-center items-center text-[yellow] border border-[yellow] rounded-xl shadow-md shadow-[yellow] p-20">
<User size={64} />
<p className="font-bold size-15px text-red-700">No Image Selected</p>
</div>
<div className="w-[70%] line-spacing-3 text-[yellow]">
<p>Max Mustermann</p>
</div>
<div className="p-4 border border-[yellow] rounded-lg">

<ul className="list-style-type-none">
<li><Link to="tel:012345678901" className="transition delay-150 duration-300 ease-in font-bold text-[yellow] hover:border-b hover:border-[yellow] hover:text-white">Tel: +49 15112345678</Link></li>
<li><Link to="mailto:example@example.com" className="transition delay-150 duration-300 ease-in font-bold text-[yellow] hover:border-b hover:border-[yellow] hover:text-white">Email: user@irgendwas.com</Link></li>
</ul>

</div>
</div>
{/*----*/}

</div>

</>
);
}

