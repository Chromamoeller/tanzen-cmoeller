import { Sparkles, ChevronRight } from "lucide-react";
import Bild from "../assets/Chris&JennyBearbeitet.jpg";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={Bild}
          alt="Elegant dance studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-indigo-900/80 to-pink-800/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white/90 text-sm font-medium">
              Hier startet deine Tanzreise
            </span>
          </div>

          <a
            href="#linedance"
            className="group inline-flex items-center gap-2 px-4 py-2 bg-amber-400/20 hover:bg-amber-400/30 backdrop-blur-sm rounded-full border border-amber-300/40 transition-colors"
          >
            <span className="text-base leading-none">🤠</span>
            <span className="text-white text-sm font-medium">
              Neu: Line Dance Kurse 2027
            </span>
            <ChevronRight className="w-4 h-4 text-amber-200 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Entdecke deine
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent block">
            Tanzwelt
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl mx-auto">
          Willkommen beim Privattanzlehrer Christian Möller! Ich bin
          ausgebildeter Tanzlehrer im BDT – dem Berufsverband Deutscher
          Tanzlehrer – Ich unterrichte seit mehreren Jahren leidenschaftlich
          Gesellschaftstanz.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">300+</div>
            <div className="text-white/70">Glückliche Paare</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">10</div>
            <div className="text-white/70">Tanz Stile </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">BDT</div>
            <div className="text-white/70">Zertifiziert</div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-indigo-400 rounded-full animate-pulse delay-500"></div>
    </section>
  );
}
