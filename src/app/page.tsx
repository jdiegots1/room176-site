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
            <p><b>ROOM176</b> es un proyecto independiente de simulación política en desarrollo. 
              Nace con una idea sencilla y exigente: mirar con seriedad el trayecto que va 
              del voto al escaño y del escaño al gobierno.</p>
            <p><b>El primer terreno de pruebas es España, 2027; el horizonte es abrir la puerta 
              a otros países y sistemas</b> cuando tenga sentido.</p>
            <p><b>ROOM176</b> se construye paso a paso. Algunas piezas llegarán antes, otras necesitarán tiempo.
            Cuando algo falle, se dirá; cuando mejore, también. La prioridad es la claridad: explicar qué
            hace el juego y por qué lo hace, incluso si la respuesta es "aún no".</p>
            <p><b>La comunidad forma parte del plan desde el inicio.</b> El proyecto nace con la mentalidad mod-first:
            documentación pública, esquemas abiertos y herramientas para que cualquiera pueda crear escenarios,
            reglas y materiales propios. Se aspira a un entorno respetuoso, con crédito a quien aporta y con cuidado
              por los datos.</p>
            <p>Tres principios guían el trabajo: <b>rigor, claridad y respeto.</b> Rigor para que el modelo sea comprensible
            y verificable; claridad para que la interfaz no estorbe; respeto por la diversidad política y por quienes
            juegan y contribuyen.</p>
            <p>Lo que ves aquí es un avance del contenido. <b>Falta camino y habrá cambios</b>. Si te interesa seguirlo, el Devlog
            recoge decisiones, dudas y pequeños hitos del proceso. Cuando toque contar más, se contará.</p>
          </article>

          <div className="about__cta">
            <a className="devlog-btn" href="/devlog" aria-label="Abrir Devlog">DEVLOG</a>
          </div>
        </div>
      </section>
    </main>
  );
}
