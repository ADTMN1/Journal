import Navbar from "@/components/Navbar";
import HeroArt from "@/components/HeroArt";

export const metadata = {
  title: "Contact — The Process",
  description:
    "Questions about coaching or programs? Reach out to The Process — we typically reply within one business day.",
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <main className="stage inner">
        <Navbar />

        <p className="eyebrow"><b>CONTACT</b> <i>/</i> <i>SAY HELLO</i></p>
        <h1><span>Get In Touch</span></h1>
        <p className="lead">
          Questions about coaching, programs or partnerships?<br />
          Tell us where you are in your journey and where you<br />
          want to go — we typically reply within one business day.
        </p>
        <a className="btn start btnrow" href="mailto:hello@theprocess.example">Email Us {arrow}</a>
        <a className="learn" href="/">Back Home</a>

        <HeroArt
          label="Response time"
          big="< 24h"
          sub="average reply time on weekdays — always from a real human."
        />
      </main>

      <section className="section">
        <div className="head">
          <p className="eyebrow"><b>DIRECT LINES</b> <i>/</i> <i>NO FORMS</i></p>
          <h2>We’re easy to find</h2>
        </div>
        <div className="row">
          <div className="feat">
            <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
            <h3>Email</h3>
            <p>hello@theprocess.example — for anything and everything.</p>
          </div>
          <div className="div" />
          <div className="feat">
            <svg viewBox="0 0 24 24"><path d="M12 21s-7-5.2-7-11a7 7 0 1 1 14 0c0 5.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
            <h3>Remote-first</h3>
            <p>Working with members across every timezone, worldwide.</p>
          </div>
          <div className="div" />
          <div className="feat">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></svg>
            <h3>Hours</h3>
            <p>Monday to Friday, 9:00–18:00 — messages welcome anytime.</p>
          </div>
        </div>
      </section>

      <section className="band">
        <p className="eyebrow"><b>WE REPLY FAST</b> <i>/</i> <i>ALWAYS HUMAN</i></p>
        <h2>Tell us where you want to go.</h2>
        <a className="btn" href="/services">See Our Services {arrow}</a>
      </section>
    </>
  );
}
