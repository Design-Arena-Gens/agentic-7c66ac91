import Link from "next/link";
import PerformerScene from "@/components/PerformerScene";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(80,130,255,0.35),transparent_65%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/70 to-slate-950" />
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full opacity-50 blur-3xl bg-cyan-600/40" />
        <div className="absolute -right-24 top-32 h-80 w-80 rounded-full opacity-40 blur-3xl bg-blue-500/35" />
        <div className="absolute left-1/2 top-0 hidden h-[120vh] w-[60vw] -translate-x-1/2 opacity-70 blur-3xl lg:block bg-[radial-gradient(circle_at_center,_rgba(86,152,255,0.65),transparent_70%)]" />
      </div>

      <header className="flex items-center justify-between px-6 pt-6 text-sm font-medium text-slate-300 sm:px-10">
        <span className="flex items-center gap-2 text-base font-semibold text-slate-100">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_4px_rgba(74,222,128,0.65)]" />
          PulseLive
        </span>
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#experience"
            className="transition-colors hover:text-emerald-300"
          >
            Experience
          </Link>
          <Link
            href="#tour"
            className="transition-colors hover:text-emerald-300"
          >
            Tour
          </Link>
          <Link
            href="#contact"
            className="transition-colors hover:text-emerald-300"
          >
            Contact
          </Link>
        </nav>
        <Link
          href="#tickets"
          className="rounded-full border border-emerald-400/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200 transition hover:border-emerald-300 hover:text-emerald-100"
        >
          Tickets
        </Link>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-12 px-6 py-16 sm:py-20 md:flex-row md:items-stretch md:gap-16 md:px-10 lg:py-24">
        <div className="flex w-full max-w-xl flex-col justify-center space-y-6 text-center sm:text-left">
          <span className="text-xs font-semibold uppercase tracking-[0.45em] text-emerald-300/80">
            Live Tonight · Mumbai
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Feel the pulse of an electrifying performance.
          </h1>
          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            Watch Arjun Malik turn the stage into a storm with a cinematic mix of
            soul, rhythm, and raw emotion. Vintage microphone. Soft blue lights.
            A roaring crowd. This is the heartbeat of the city.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <Link
              href="#tickets"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Reserve Your Spot
            </Link>
            <Link
              href="#experience"
              className="inline-flex items-center justify-center rounded-full border border-slate-400/40 px-8 py-3 text-sm font-semibold text-slate-200 transition hover:border-emerald-300 hover:text-emerald-200"
            >
              Discover the Story
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 text-left sm:justify-start">
            <div>
              <p className="text-3xl font-semibold text-emerald-300">12K+</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Voices in the crowd
              </p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-emerald-300">97%</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Standing ovations
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-0 -z-10 rounded-[48px] bg-gradient-to-br from-emerald-400/30 via-sky-500/20 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[42px] border border-slate-200/10 bg-slate-900/60 shadow-[0_40px_120px_-40px_rgba(56,189,248,0.85)] backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-200/10 to-transparent" />
            <div className="absolute inset-0 opacity-50 mix-blend-screen">
              <div className="absolute left-8 top-16 h-32 w-32 rounded-full bg-cyan-400/40 blur-2xl" />
              <div className="absolute right-0 top-10 h-40 w-40 rounded-full bg-blue-400/30 blur-2xl" />
              <div className="absolute left-1/3 bottom-10 h-24 w-24 rounded-full bg-emerald-400/40 blur-2xl" />
            </div>
            <div className="relative px-6 pb-10 pt-12">
              <PerformerScene />
              <div className="mt-8 grid gap-4 rounded-3xl border border-slate-200/10 bg-slate-900/70 p-6 backdrop-blur">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                  <span>Soundcheck Complete</span>
                  <span>Stage Flares Armed</span>
                </div>
                <p className="text-sm text-slate-300">
                  “The way Arjun holds that vintage mic pulls you right into his
                  world. Every verse feels like home and horizon at once.”
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full border border-emerald-300/50 bg-gradient-to-br from-emerald-400 to-sky-400" />
                  <div className="flex flex-col text-xs text-slate-300">
                    <span className="font-semibold text-slate-100">
                      Tara Desai
                    </span>
                    <span>Show Director</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer
        id="experience"
        className="flex flex-col items-center gap-3 px-6 pb-10 text-center text-xs uppercase tracking-[0.35em] text-slate-500 sm:px-10"
      >
        <span>Immersive audio. Cinematic visuals. Authentic storytelling.</span>
        <span>© {new Date().getFullYear()} PulseLive Productions</span>
      </footer>
    </div>
  );
}
