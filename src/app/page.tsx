'use client';

import {useEffect, useState} from 'react';

const LINES = [
  'Donde se deciden mayorías.',
  'Cuando el mapa se queda quieto.',
  'Un escaño cambia un país.',
  'Próximamente.'
];

export default function Home() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % LINES.length), 3600);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-room">ROOM</span><span className="brand-176">176</span>
        </a>
        {/* nav mínimo (opcional): deja solo devlog si quieres
        <nav className="nav">
          <a href="/devlog">Devlog</a>
        </nav>
        */}
      </header>

      <section className="center">
        <h1 className="logo-xl fade-in delay-0">
          <span className="room">ROOM</span><span className="n176">176</span>
        </h1>

        {/* teaser rotatorio: cambia cada 3.6s y se desvanece */}
        <p key={i} className="teaser fade-in delay-1" aria-live="polite">
          {LINES[i]}
        </p>

        <div className="pills">
          <span className="pill">En desarrollo</span>
          <span className="pill pill--muted">Escenario oficial: España 2027</span>
        </div>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} ROOM176</small>
      </footer>
    </main>
  );
}
