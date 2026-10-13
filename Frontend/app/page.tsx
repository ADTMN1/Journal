import Navbar from "@/components/Navbar";
import { photoSrc } from "@/lib/assets";

// The original page's fit() routine, preserved verbatim: it scales the two
// headline lines so they end at their exact target widths on desktop.
const fitScript = `
function fit(){
 if(innerWidth<900){document.querySelectorAll('h1 span').forEach(e=>e.style.transform='');return}
 var rem=parseFloat(getComputedStyle(document.documentElement).fontSize);
 [['l1',56.2],['l2',46.6]].forEach(function(p){
  var e=document.getElementById(p[0]);e.style.transform='none';
  var w=e.getBoundingClientRect().width;
  if(w)e.style.transform='scaleX('+(p[1]*rem/w)+')';
 });
}
addEventListener('resize',fit);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
addEventListener('load',fit);fit();
`;

export default function Home() {
  return (
    <>
      <main className="stage">
        <Navbar />

        <div className="photo"><img alt="Young man with arms crossed" src={photoSrc} /></div>

        <p className="eyebrow"><b>DISCIPLINE</b> <i>/</i> <i>STRATEGY</i> <i>/</i> <b>PROGRESS</b></p>
        <h1><span id="l1">Build Better</span><span id="l2">Every Day</span></h1>
        <p className="lead">The Process is a platform dedicated to helping you<br />develop your skills, stay consistent, and turn your goals<br />into real progress — step by step.</p>
        <a className="btn start btnrow" href="#">Start Your Journey <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M14 6l6 6-6 6" /></svg></a>
        <a className="learn" href="#">Learn More</a>

        <div className="feat f1"><svg viewBox="0 0 24 24"><path d="M2 20V14M6 20v-6M10 20v-9M14 20V9M18 20V6" /><path d="M3 11l5-4 4 3 8-7M15 3h5v5" /></svg><h3>Better Skills</h3><p>Learn &amp; Improve</p></div>
        <div className="div d1" />
        <div className="feat f2"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="2" /><path d="M12 12l7-7" /></svg><h3>Consistent Action</h3><p>Build Habits</p></div>
        <div className="div d2" />
        <div className="feat f3"><svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" /></svg><h3>Real Progress</h3><p>Reach Your Goals</p></div>

        <div className="tag"><span /><h4>THE PROCESS</h4><p>More than just a journey.<br />It’s a mindset.</p></div>
      </main>

      <section className="section">
        <div className="head">
          <p className="eyebrow"><b>HOW IT WORKS</b> <i>/</i> <i>THREE STEPS</i></p>
          <h2>A simple system, repeated daily</h2>
        </div>
        <div className="row">
          <div className="step"><span>01</span><h3>Name the goal</h3><p>Write down what “better” means for you — specific, measurable, and yours.</p></div>
          <div className="step"><span>02</span><h3>Build the system</h3><p>Design the smallest daily actions that move you there, then schedule them.</p></div>
          <div className="step"><span>03</span><h3>Review and repeat</h3><p>Track weekly, adjust monthly, and let momentum do the heavy lifting.</p></div>
        </div>
      </section>

      <section className="band">
        <p className="eyebrow"><b>READY WHEN YOU ARE</b> <i>/</i> <i>DAY ONE</i></p>
        <h2>Better every day starts now.</h2>
        <a className="btn" href="/contact">Start Your Journey <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16M14 6l6 6-6 6" /></svg></a>
      </section>
      <script dangerouslySetInnerHTML={{ __html: fitScript }} />
    </>
  );
}
