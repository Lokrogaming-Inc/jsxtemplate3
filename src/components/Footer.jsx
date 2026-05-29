import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 py-15">
      <div className="max-w-7xl mx-auto px-6 flex flex-col">
        <p className="text-[#009999] text-center">
          © 2026 ElevenShanghai
        </p>
<Link to="https://lokrogaming.github.io">
        <p class="flex flex-row gap-4 text-md text-slate-600 text-center">
         Made with <div className="text-red"><Heart /></div> by Lokrogamer</p></Link>
      </div>
    </footer>
  );
}
