import Navbar from "@/components/Navbar";
import HeroArt from "@/components/HeroArt";

export const metadata = {
  title: "About — The Process",
  description:
    "The Process is more than a platform — it's a mindset. Learn who we are and why we build discipline, strategy and progress into everything we do.",
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export default function AboutPage() {
  return (
    <>
      <main className="stage inner">
        <Navbar />

        <p className="eyebrow"><b>ABOUT</b> <i>/</i> <i>OUR STORY</i></p>
        <h1><span>Who We Are</span></h1>
        <p className="lead">
          We started The Process because talent is common —<br />
          consistency is not. We build the systems, habits and<br />
          feedback loops that turn ordinary days into real progress.
        </p>
        <a className="btn start btnrow" href="/contact">Get Started {arrow}</a>
        <a className="learn" href="/services">See Our Services</a>

        <HeroArt
          label="Our community"
          big="12K+"
          sub="members building better habits with The Process, one day at a time."
        />
      </main>

      <section className="section">
        <div className="head">
          <p className="eyebrow"><b>WHAT DRIVES US</b> <i>/</i> <i>THREE PILLARS</i></p>
          <h2>Three things we never compromise</h2>
        </div>
        <div className="row">
          <div className="feat">
            <svg viewBox="0 0 24 24"><path d="M2 20V14M6 20v-6M10 20v-9M14 20V9M18 20V6" /><path d="M3 11l5-4 4 3 8-7M15 3h5v5" /></svg>
            <h3>Discipline</h3>
            <p>Show up on the days you don’t feel like it — those are the ones that count.</p>
          </div>
          <div className="div" />
          <div className="feat">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="2" /><path d="M12 12l7-7" /></svg>
            <h3>Strategy</h3>
            <p>Effort without direction is noise. We aim first, then push hard.</p>
          </div>
          <div className="div" />
          <div className="feat">
            <svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" /></svg>
            <h3>Progress</h3>
            <p>Small wins, measured and compounded, beat occasional bursts of effort.</p>
          </div>
        </div>
      </section>

      <section className="band">
        <p className="eyebrow"><b>JOIN US</b> <i>/</i> <i>THE PROCESS</i></p>
        <h2>Your best self is built, not found.</h2>
        <a className="btn" href="/contact">Get Started {arrow}</a>
      </section>
    </>
  );
}
