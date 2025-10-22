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

        <div className="pills">
          <span className="pill">En desarrollo</span>
          <span className="pill pill--muted">Escenario oficial: España 2027</span>
        </div>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Room 176 — Proyecto en desarrollo</small>
      </footer>
    </main>
  );
}
