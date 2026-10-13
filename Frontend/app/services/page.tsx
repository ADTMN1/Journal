import Navbar from "@/components/Navbar";
import HeroArt from "@/components/HeroArt";

export const metadata = {
  title: "Services — The Process",
  description:
    "Coaching, skill programs and habit systems from The Process — everything you need to build consistency and turn goals into real progress.",
};

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export default function ServicesPage() {
  return (
    <>
      <main className="stage inner">
        <Navbar />

        <p className="eyebrow"><b>SERVICES</b> <i>/</i> <i>WHAT WE DO</i></p>
        <h1><span>What We Offer</span></h1>
        <p className="lead">
          Skill programs, habit systems and one-on-one coaching —<br />
          structured around your goals so every week moves the<br />
          needle. Pick a track and let the process do the rest.
        </p>
        <a className="btn start btnrow" href="/contact">Start Your Journey {arrow}</a>
        <a className="learn" href="/about">About Us</a>

        <HeroArt
          label="Member rating"
          big="4.9/5"
          sub="average score across 2,400+ program reviews from real members."
        />
      </main>

      <section className="section">
        <div className="head">
          <p className="eyebrow"><b>HOW WE HELP</b> <i>/</i> <i>PROGRAMS</i></p>
          <h2>Built around your goals</h2>
        </div>
        <div className="row">
          <div className="feat">
            <svg viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 3z" /><path d="M8 9h8M8 12h5" /></svg>
            <h3>1:1 Coaching</h3>
            <p>Weekly sessions with a coach who keeps you accountable and honest.</p>
          </div>
          <div className="div" />
          <div className="feat">
            <svg viewBox="0 0 24 24"><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg>
            <h3>Skill Programs</h3>
            <p>Structured tracks that take you from fundamentals to fluency.</p>
          </div>
          <div className="div" />
          <div className="feat">
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></svg>
            <h3>Habit Systems</h3>
            <p>Defaults and routines that make consistency the easy option.</p>
          </div>
        </div>
      </section>

      <section className="band">
        <p className="eyebrow"><b>GET STARTED</b> <i>/</i> <i>NO PRESSURE</i></p>
        <h2>Let’s map your first 30 days.</h2>
        <a className="btn" href="/contact">Book a Call {arrow}</a>
      </section>
    </>
  );
}
