import { useEffect, useState } from "react";
import Home from "./pages/Home"; import { Policy, ThankYou } from "./pages/Pages";
import { STORE, LINE, MAIN_SITE, SUPPORT_EMAIL } from "./data/product";
const useHash = () => { const [h, s] = useState(location.hash); useEffect(() => { const f = () => { s(location.hash); scrollTo(0,0) }; addEventListener("hashchange", f); return () => removeEventListener("hashchange", f) }, []); return h.replace(/^#\/?/, "") };
export default function App() {
  const r = useHash();
  const page = r === "thank-you" ? <ThankYou/> : ["privacy","terms","refund","shipping","contact"].includes(r) ? <Policy kind={r as any}/> : <Home/>;
  return <div className="font-sans text-brand">
    <div className="bg-brand text-paper text-xs tracking-[0.2em] text-center py-2">FREE US SHIPPING · 30-DAY RETURNS · <a href={MAIN_SITE} className="underline text-gold">SHOP LUXURIOUS.DIGITAL</a></div>
    <header className="border-b border-line bg-paper"><div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center"><a href="#/" className="flex items-center gap-3" aria-label={`${STORE} ${LINE} home`}><img src={`${import.meta.env.BASE_URL}ld-logo.png`} alt="" className="h-10 w-auto"/><span className="font-serif text-xl leading-tight">{STORE}<small className="block text-[0.65rem] tracking-[0.25em] text-goldd font-sans">{LINE.toUpperCase()}</small></span></a><nav className="flex gap-5 text-sm text-muted"><a href={MAIN_SITE} className="hover:text-goldd">Travel · Bags · Belts ↗</a><a href="#/contact" className="hover:text-goldd">Contact</a></nav></div></header>
    {page}
    <footer className="border-t border-line mt-10 bg-paper"><div className="max-w-6xl mx-auto px-4 py-8 text-sm text-muted flex flex-wrap gap-4 justify-between">
      <span>© {new Date().getFullYear()} {STORE} · {LINE} · <a className="underline" href={MAIN_SITE}>luxurious.digital</a> · <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></span>
      <nav className="flex gap-4"><a href="#/shipping">Shipping</a><a href="#/refund">Refund Policy</a><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/contact">Contact</a></nav></div></footer>
  </div>;
}
