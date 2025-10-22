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
        <h1 className="logo-xl">
          <span className="room">ROOM</span><span className="n176">176</span>
        </h1>
        <p className="tagline">Donde se deciden mayorías.</p>
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
