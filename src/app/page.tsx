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
    <p>
      <b>ROOM176</b> es un <b>simulador de gestión de campaña electoral</b> centrado en un <b>candidato</b> y su <b>equipo</b>. El objetivo es cubrir de forma clara las decisiones que afectan al resultado.
    </p>

    <p><b>La idea es cubrir todo el ciclo:</b></p>
    <ul>
      <li>
        <b>Pre-campaña</b>: definición de <b>listas electorales</b> por territorio, exploración de <b>coaliciones</b> y fijación de la <b>estrategia</b> inicial.
      </li>
      <li>
        <b>Campaña</b>: agenda diaria del candidato, <b>presupuesto</b> y personal, refuerzo <b>territorial</b>, coordinación de voluntariado y puerta a puerta, <b>segmentación de mensajes</b>, presencia en <b>medios</b> y respuesta a <b>debates</b> y crisis.
      </li>
      <li>
        <b>Noche electoral</b>: <b>recuento</b> y traducción de votos a escaños.
      </li>
      <li>
        <b>Postelecciones (si procede)</b>: negociación para <b>formar gobierno</b>.
      </li>
    </ul>

    <p>
      Las decisiones partirían del candidato o de la dirección de campaña: elección de jefes de área y portavoces, cabezas de lista en provincias clave, líneas rojas y pactos preferentes, calendario de actos y entrevistas, tono del mensaje (propuesta o contraste), reparto de inversión entre digital, medios y terreno, y reacción a encuestas, oportunidades y crisis. Cada acción consume <b>tiempo</b>, <b>presupuesto</b> y <b>capital político</b>.
    </p>

    <p>
      El modelo de resultados trabajaría con <b>circunscripciones</b> y reglas reales de reparto, con <b>encuestas</b> y <b>trackings</b> que evolucionan durante la partida. Se incluirían eventos de contexto (economía, vivienda, industria), apoyos o vetos de actores relevantes, endosos locales y, si los números lo requieren, negociación postelectoral.
    </p>

    <p>
      El primer escenario previsto es <b>España, 2027</b>. El proyecto está en <b>fase muy temprana</b>: se construye la base del juego y la interfaz inicial. Más adelante se publicarán herramientas para <b>crear y compartir escenarios</b> mediante <b>plantillas</b> y un <b>editor sencillo</b>, sin tocar archivos internos. El progreso se comunicará en el <b>Devlog</b> y el alcance podrá ajustarse según avance el desarrollo.
    </p>
  </article>

          <div className="about__cta">
            <a className="devlog-btn" href="/devlog" aria-label="Abrir Devlog">DEVLOG</a>
          </div>
        </div>
      </section>
    </main>
  );
}
