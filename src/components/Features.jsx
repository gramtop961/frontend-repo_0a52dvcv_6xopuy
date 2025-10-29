import React from 'react';
import { Shield, Fingerprint, Zap, CheckCircle2 } from 'lucide-react';

const items = [
  {
    icon: Fingerprint,
    title: 'Native biometrics',
    desc: 'Face ID, Touch ID and platform authenticators via WebAuthn. Nothing to remember, nothing to phish.'
  },
  {
    icon: Shield,
    title: 'Trust built-in',
    desc: 'Attestation, device binding, and risk signals out-of-the-box. Designed for zero-trust architectures.'
  },
  {
    icon: Zap,
    title: '1-line integration',
    desc: 'Drop in a single call to enable passwordless across your app. Works with React, Next, Node, and more.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Security that feels invisible</h2>
          <p className="mt-3 text-white/65">Built on open standards with privacy at the core. Because great auth should disappear.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex size-11 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                  <it.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{it.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                <CheckCircle2 className="size-4 text-emerald-400" />
                Audited cryptography, no secrets on your servers
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 p-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold">Built for developers</h3>
              <p className="mt-1 text-sm text-white/70">SDKs for the frameworks you love, clear docs, and examples.</p>
            </div>
            <a
              href="#code"
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
            >
              Copy the snippet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
