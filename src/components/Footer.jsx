import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pb-14 pt-10 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <div className="flex size-8 items-center justify-center rounded-md bg-white text-black">VA</div>
              VanishAuth
            </div>
            <p className="mt-2 max-w-md text-sm text-white/60">
              Passwordless infrastructure you don’t have to think about. Compliance-ready and privacy-first.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <ShieldCheck className="size-4 text-emerald-400" /> SOC 2 in progress
            </div>
            <a
              href="#"
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10"
            >
              Join the waitlist
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/50">© {new Date().getFullYear()} VanishAuth, Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}
