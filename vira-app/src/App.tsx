import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070b09] px-6 py-12 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.16),_transparent_55%)]"
      />

      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-2xl rounded-2xl border border-emerald-500/25 bg-[#0c1310]/90 p-8 text-center shadow-2xl shadow-emerald-950/30 sm:p-12"
      >
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
          <Sparkles className="h-6 w-6" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          VIRA <span className="text-emerald-400">APP</span>
        </h1>

        <p className="mt-4 text-xl font-medium text-emerald-300 sm:text-2xl">
          Sua ideia merece virar realidade.
        </p>

        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-zinc-300 sm:text-base">
          Plataforma de organização e preparação de projetos digitais.
        </p>

        <div className="mt-8 border-t border-white/10 pt-5">
          <span className="text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase">
            VERSÃO 01 — FUNDAÇÃO DO PROJETO
          </span>
        </div>
      </motion.section>
    </main>
  );
}
