export default function Home() {
  return (
    <main className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <header className="topbar">
        <a className="brand" href="/">
          <span className="brand-room">ROOM</span><span className="brand-176">176</span>
        </a>
        <nav className="nav">
          <a href="/devlog">Devlog</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/contribuir">Contribuir</a>
          <a href="#about">¿Qué es?</a>
        </nav>
      </header>

      <section className="center">
        <h1 className="logo-xl fade-in delay-0">
          <span className="room">ROOM</span><span className="n176">176</span>
        </h1>

        <article className="story fade-in delay-1">
          <p>Luces bajas, mapas encendidos, cafés fríos. Afuera rugen los mítines; dentro, el país se reduce a una mesa larga donde tiemblan teléfonos, se cruzan miradas y los titulares llegan a deshora. Hay líderes que sostienen el gesto ante focos crueles, barones que cuentan pueblo a pueblo, alcaldes que entregan su feudo en un abrazo breve. Las promesas siguen escritas a lápiz, los pactos nacen en pasillos sin cámaras, las renuncias abren puertas que parecían cerradas.</p>
          <p>ROOM176 cuenta una historia coral de estrategia y nervio: periodistas que huelen el giro antes de que ocurra, militantes que pegan el último cartel bajo lluvia fina, vecinos que cambian de idea en un semáforo, rivales que se miden con guante y con martillo. No hay épicas limpias ni villanos de manual; hay memoria, cansancio, intuición… y un instante en el que el mapa se queda quieto.</p>
          <p>La <strong>campaña oficial transcurre en España, 2027</strong>. Noche de recuento por delante, nervios en la garganta, una década pendiendo de un gesto a tiempo. Cuando el murmullo baja y amanece sobre las capitales, la historia elige un destino. Aquí empieza ROOM176.</p>
        </article>

        {/* Botón flecha hacia la sección "¿Qué es?" */}
        <a href="#about" className="scroll-down" aria-label="Sigue leyendo">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M12 16.5l-6-6 1.4-1.4L12 13.7l4.6-4.6L18 10.5l-6 6z"/>
          </svg>
        </a>

        <div className="pills">
          <span className="pill">En desarrollo</span>
          <span className="pill pill--muted">Escenario oficial: España 2027</span>
        </div>
      </section>

      {/* Sección larga: ¿QUÉ ES ROOM176? */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="about__title">¿QUÉ ES ROOM176?</h2>
          <article className="story">
            <p>ROOM176 es un proyecto independiente de <strong>simulación política</strong> en desarrollo. Nace con una ambición sencilla y difícil a la vez: retratar con seriedad el trayecto que va del <strong>voto al escaño</strong> y del <strong>escaño al gobierno</strong>, sin exageraciones ni atajos. El primer escenario oficial transcurre en <strong>España, 2027</strong>; el horizonte del proyecto es abierto y orientado a que la comunidad pueda llevarlo a otros países y sistemas.</p>
            <p>El foco está en tres pilares: <strong>rigor</strong>, <strong>claridad</strong> y <strong>respeto</strong>. Rigor para modelar campañas, repartos y pactos con criterios transparentes; claridad para explicar qué hace el juego y por qué; respeto por los datos, por la diversidad política y por las personas que participan en la comunidad. ROOM176 no mantiene afiliación con partidos ni instituciones.</p>
            <p>Es un desarrollo vivo: habrá errores, cambios de equilibrio y decisiones que se revisarán con el tiempo. La idea es construir <strong>con</strong> la comunidad: documentación pública, herramientas de <strong>modding</strong> desde el inicio y un diálogo continuo para priorizar mejoras. La prioridad técnica es que el proyecto sea <strong>ligero, accesible</strong> y <strong>sostenible</strong> a largo plazo.</p>
            <p>Si algo define a ROOM176 es la <strong>humildad del proceso</strong>: avanzar paso a paso, escuchar, corregir y mejorar. Cuando el juego falle, se dirá; cuando mejore, también. Ese es el compromiso.</p>
          </article>
        </div>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Room 176 — Proyecto en desarrollo</small>
      </footer>
    </main>
  );
}
