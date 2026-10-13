import Navbar from "@/components/Navbar";
import HeroArt from "@/components/HeroArt";

export const metadata = {
  title: "Blog — The Process",
  description:
    "Ideas, tactics and stories about discipline, strategy and progress — writing from The Process to help you build better every day.",
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export default function BlogPage() {
  return (
    <>
      <main className="stage inner">
        <Navbar />

        <p className="eyebrow"><b>BLOG</b> <i>/</i> <i>IDEAS &amp; INSIGHTS</i></p>
        <h1><span>Read &amp; Grow</span></h1>
        <p className="lead">
          Field notes on discipline, strategy and progress —<br />
          practical essays you can apply the same day.<br />
          New writing every week, no fluff.
        </p>
        <a className="btn start btnrow" href="/contact">Subscribe {arrow}</a>
        <a className="learn" href="/services">Explore Services</a>

        <HeroArt
          label="Fresh every week"
          big="52"
          sub="practical essays published each year — every one of them actionable."
        />
      </main>

      <section className="section">
        <div className="head">
          <p className="eyebrow"><b>LATEST ARTICLES</b> <i>/</i> <i>THE JOURNAL</i></p>
          <h2>Fresh thinking, every week</h2>
        </div>
        <div className="row">
          <article className="post">
            <p className="post-date">Oct 3, 2026</p>
            <h3>The two-minute rule, revisited</h3>
            <p>Why the smallest possible version of a habit is the one that actually sticks.</p>
            <a className="learn" href="#">Read article</a>
          </article>
          <article className="post">
            <p className="post-date">Sep 26, 2026</p>
            <h3>Motivation is a terrible plan</h3>
            <p>Systems beat willpower. Here’s how to build one that runs on autopilot.</p>
            <a className="learn" href="#">Read article</a>
          </article>
          <article className="post">
            <p className="post-date">Sep 18, 2026</p>
            <h3>Measure the input, not the outcome</h3>
            <p>The metrics that keep you consistent when results are still weeks away.</p>
            <a className="learn" href="#">Read article</a>
          </article>
        </div>
      </section>

      <section className="band">
        <p className="eyebrow"><b>STAY SHARP</b> <i>/</i> <i>WEEKLY</i></p>
        <h2>One useful email, every week.</h2>
        <a className="btn" href="/contact">Subscribe {arrow}</a>
      </section>
    </>
  );
}
