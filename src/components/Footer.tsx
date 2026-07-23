export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <a className="wordmark wordmark--footer" href="#top" aria-label="ClassVybes home">
            Class<span>Vybes</span>
          </a>
          <p>Study tracks made from the material that matters.</p>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#how-it-works">Product</a>
          <a href="#safety">Safety</a>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </nav>
        <p className="site-footer__note">Concept landing page based on the ClassVybes July 2026 PRD.</p>
      </div>
    </footer>
  )
}
