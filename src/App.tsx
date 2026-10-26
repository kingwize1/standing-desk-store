import { useEffect, useState } from "react";
import Home from "./pages/Home"; import { Policy, ThankYou } from "./pages/Pages";
import { STORE, SUPPORT_EMAIL } from "./data/product";
const useHash = () => { const [h, s] = useState(location.hash); useEffect(() => { const f = () => { s(location.hash); scrollTo(0,0) }; addEventListener("hashchange", f); return () => removeEventListener("hashchange", f) }, []); return h.replace(/^#\/?/, "") };
export default function App() {
  const r = useHash();
  const page = r === "thank-you" ? <ThankYou/> : ["privacy","terms","refund","shipping","contact"].includes(r) ? <Policy kind={r as any}/> : <Home/>;
  return <div className="font-sans text-gray-900">
    <header className="border-b"><div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center"><a href="#/" className="font-bold text-xl">{STORE}</a><a href="#/contact" className="text-sm text-gray-600">Contact</a></div></header>
    {page}
    <footer className="border-t mt-10 bg-gray-50"><div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-wrap gap-4 justify-between">
      <span>© {new Date().getFullYear()} {STORE} · <a className="underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></span>
      <nav className="flex gap-4"><a href="#/shipping">Shipping</a><a href="#/refund">Refund Policy</a><a href="#/privacy">Privacy</a><a href="#/terms">Terms</a><a href="#/contact">Contact</a></nav></div></footer>
  </div>;
}
