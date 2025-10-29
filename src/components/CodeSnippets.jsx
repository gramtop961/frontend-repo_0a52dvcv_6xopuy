import React, { useState } from 'react';
import { Copy, Check, Github } from 'lucide-react';

const snippets = {
  JavaScript: `// Enable passwordless with one line\nimport { init } from '@vanishauth/js';\n\ninit({ projectId: 'proj_123', biometric: true });`,
  Python: `# Server-side verification (optional)\nfrom vanishauth import verify\n\nverify(token)  # one call, returns user claims`,
  cURL: `# Create a session (example)\ncurl -X POST https://api.vanishauth.com/sessions \\\n  -H 'Authorization: Bearer sk_test_***' \\\n  -d 'biometric=true'`
};

export default function CodeSnippets() {
  const [active, setActive] = useState('JavaScript');
  const [copied, setCopied] = useState(false);

  const code = snippets[active];

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (_) {
      // ignore
    }
  };

  return (
    <section id="code" className="relative bg-black py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Drop‑in integration</h2>
          <p className="mt-3 text-white/70">Add passwordless biometrics with a single line. Keep your stack. Keep your brand.</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex rounded-lg bg-white/5 p-1 text-sm">
              {Object.keys(snippets).map((name) => (
                <button
                  key={name}
                  onClick={() => setActive(name)}
                  className={`rounded-md px-3 py-1.5 transition ${
                    active === name ? 'bg-white text-black' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
              >
                <Github className="size-4" /> Docs & examples
              </a>
              <button
                onClick={onCopy}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-black hover:opacity-90"
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5">
            <pre className="overflow-x-auto p-5 text-sm leading-relaxed text-emerald-200/95">
              <code>{code}</code>
            </pre>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {['No passwords to steal', 'Phishing-resistant', 'Instant UX'].map((b) => (
              <div key={b} className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-xs text-white/70">
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
