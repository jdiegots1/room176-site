'use client';

import {useEffect, useRef, useState} from 'react';

export default function Home() {
  const aboutRef = useRef<HTMLElement | null>(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setAboutVisible(entry.isIntersecting), {threshold: 0.18});
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* HERO pantalla completa */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__overlay" />

        <header className="topbar">
          <a className="brand" href="/">
            <span className="brand-room">ROOM</span><span className="brand-176">176</span>
          </a>
        </header>

        <div className="center">
          <h1 className="logo-xl fade-in delay-0">
            <span className="room">ROOM</span><span className="n176">176</span>
          </h1>
          <p className="coming fade-in delay-1">PRÓXIMAMENTE</p>
        </div>

        <footer className="footer">
          <small>© {new Date().getFullYear()} ROOM176</small>
        </footer>
      </section>

      {/* Sección oculta hasta que haces scroll */}
      <section
        id="about"
        ref={aboutRef}
        className={`about reveal ${aboutVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <h2 className="about__title">¿QUÉ ES ROOM176?</h2>
          <article className="story story--myst">
            <p><b>ROOM176</b> aspira a ser un simulador de gestión de campaña centrado en un candidato y su equipo.</p>
            <p>El proyecto está en una fase muy temprana de desarrollo.</p>
          </article>

          <div className="about__cta">
            <a className="devlog-btn" href="/devlog" aria-label="Abrir Devlog">DEVLOG</a>
          </div>
        </div>
      </section>
    </main>
  );
}
