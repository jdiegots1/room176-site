'use client';

import {useEffect, useRef, useState} from 'react';

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setAboutVisible(entry.isIntersecting),
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <main className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-room">ROOM</span><span className="brand-176">176</span>
        </a>
        {/* nav vacío por ahora */}
      </header>

      {/* HERO centrado con PRÓXIMAMENTE */}
      <section className="center">
        <h1 className="logo-xl fade-in delay-0">
          <span className="room">ROOM</span><span className="n176">176</span>
        </h1>
        <p className="coming fade-in delay-1">PRÓXIMAMENTE</p>
      </section>

      {/* SECCIÓN: ¿QUÉ ES ROOM176? (aparece al hacer scroll) */}
      <section
        id="about"
        ref={aboutRef}
        className={`about reveal ${aboutVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <h2 className="about__title">¿QUÉ ES ROOM176?</h2>
          <article className="story story--myst">
            <p>
              Un proyecto independiente de simulación política en desarrollo. Construido paso a paso,
              con la comunidad, y con el foco en campañas, escaños y pactos.
            </p>
            <p>
              Ligero, serio y humilde: primero el fundamento, luego las palabras. Más, muy pronto.
            </p>
          </article>

          {/* Botón DEVLOG (estilo “pill” sin borde) */}
          <div className="about__cta">
            <a className="devlog-btn" href="/devlog" aria-label="Abrir Devlog">
              DEVLOG
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} ROOM176</small>
      </footer>
    </main>
  );
}
