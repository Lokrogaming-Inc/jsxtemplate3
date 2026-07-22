import {
  Sparkles,
  Share2,
} from "lucide-react";
import { useShare } from "../hooks/useShare";

export default function Hero() {
  const { shareCurrentUrl } = useShare();

  return (
    <section
      className="relative h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/motocross.jpg')",
      }}
    >
      {/* Dunkler + leicht brauner Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 bg-amber-900/20 mix-blend-multiply"></div>

      {/* Inhalt */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">

        {/* Schwebender Logo-Container */}
        <div className="mb-8 rounded-3xl border border-white/10 bg-orange-600/5 p-6 shadow-2xl backdrop-blur-xl">
          <img
            src="/favicon.svg"
            alt="Logo"
            className="h-28 w-28 object-contain"
          />
        </div>

        <h1 className="text-center text-5xl font-bold text-white md:text-7xl">
          Dein Titel
        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg text-white/80">
          Hier kommt deine Beschreibung hin.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
            Loslegen
          </button>

          <button
            onClick={shareCurrentUrl}
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-white backdrop-blur transition hover:bg-white/20"
          >
            <Share2 size={18} />
            Teilen
          </button>
        </div>

        {/* Optionales Badge */}
        <div className="font-fruktur mt-8 flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-500/10 px-4 py-2 text-yellow-300 backdrop-blur">
          <Sparkles size={16} />
          JXSTEMPLATE
        </div>
      </div>
    </section>
  );
}