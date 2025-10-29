import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth without blocking the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative container mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Passwordless for builders
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Auth that disappears.
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 md:text-lg">
            Ship frictionless biometric sign‑ins with a single line of code. No passwords, no OTPs—just instant trust.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#code"
              className="rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black shadow hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Get the 1‑liner
            </a>
            <a
              href="#features"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 items-center rounded-full bg-emerald-500/15 px-2 text-emerald-300">99.99% uptime</span>
            </div>
            <div>Private by default</div>
            <div>FIDO2 / WebAuthn</div>
          </div>
        </div>
      </div>
    </section>
  );
}
