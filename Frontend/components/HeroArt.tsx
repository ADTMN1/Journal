import { logoSrc } from "@/lib/assets";

// Right-side hero composition for the inner pages — mirrors the home hero,
// where the photo carries a large brand watermark. Server component; layout
// comes entirely from globals.css (absolute on desktop, stacked card on mobile).
export default function HeroArt({ label, big, sub }: { label: string; big: string; sub: string }) {
  return (
    <div className="art">
      <span className="art-ring" />
      <img className="art-mark" src={logoSrc} alt="" />
      <div className="art-card">
        <p className="art-label">{label}</p>
        <p className="art-big">{big}</p>
        <p className="art-sub">{sub}</p>
      </div>
    </div>
  );
}
