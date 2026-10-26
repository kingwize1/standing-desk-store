import { useState } from "react";
import { product as p, PAYMENT_LINK } from "../data/product";
const Buy = ({ cls = "" }) => <a href={PAYMENT_LINK} className={`block text-center bg-brand hover:bg-brandh text-white font-bold rounded-[0.65rem] py-4 active:scale-[0.98] transition ${cls}`}>BUY NOW – ${p.price}</a>;
export default function Home() {
  const [i, setI] = useState(0);
  return <main>
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid md:grid-cols-2 gap-10">
      <div className="md:sticky md:top-4 self-start">
        <img src={p.images[i]} alt={p.title} className="w-full aspect-square object-contain rounded-xl bg-gray-50"/>
        <div className="flex gap-2 overflow-x-auto mt-3 pb-2">{p.images.map((s, k) => <img key={s} src={s} onClick={() => setI(k)} alt="" className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${k === i ? "border-brand" : "border-transparent"}`}/>)}</div>
      </div>
      <div>
        <h1 className="text-3xl font-bold leading-tight">{p.title}</h1>
        <p className="text-3xl font-bold text-brand mt-4">${p.price}.00 <span className="text-base font-medium text-gray-600">+ free shipping</span></p>
        <ul className="mt-6 space-y-2">{p.bullets.map(b => <li key={b}>✔️ {b}</li>)}</ul>
        <p className="mt-6 font-medium">Available colors: <span className="text-gray-600">{p.colors.join(" · ")}</span></p>
        <p className="text-sm text-gray-600">Choose your color at checkout.</p>
        <Buy cls="mt-6"/>
        <p className="text-sm text-gray-600 mt-3 text-center">🚚 Ships from a US warehouse · Arrives in about 3–5 business days after dispatch</p>
        <details className="mt-6 border-t pt-4" open><summary className="font-bold cursor-pointer">Specifications</summary>
          <table className="w-full mt-3 text-sm">{p.specs.map(([k, v]) => <tr key={k} className="border-b"><td className="py-2 font-medium pr-4">{k}</td><td className="py-2 text-gray-700">{v}</td></tr>)}</table></details>
        <details className="mt-4 border-t pt-4"><summary className="font-bold cursor-pointer">Shipping & returns</summary>
          <p className="mt-2 text-sm text-gray-700">Free standard shipping to US addresses. Orders ship from a US warehouse with an estimated 3–5 business-day transit time. <a className="underline" href="#/refund">30-day return policy</a>.</p></details>
      </div>
    </section>
    <div className="bg-brand text-white overflow-hidden py-3"><div className="flex whitespace-nowrap animate-marquee w-max">{[...p.ticker, ...p.ticker, ...p.ticker, ...p.ticker].map((t, k) => <span key={k} className="mx-8 font-medium">★ {t}</span>)}</div></div>
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
      <img src={p.images[2]} alt="" className="rounded-xl w-full"/>
      <div><h2 className="text-2xl font-bold">Sit or stand at the touch of a button</h2>
        <p className="mt-4 text-gray-700">The electric lift raises and lowers the desktop so you can switch between sitting and standing through the day. The 63" x 24" top gives you room for monitors, a laptop and accessories, while the metal frame and wood desktop keep it sturdy. Two hooks and a cable hole help keep bags, headphones and cords organized.</p>
        <Buy cls="mt-6 max-w-xs"/></div>
    </section>
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10 grid sm:grid-cols-3 gap-6">
      {[[p.images[4], "Big desktop", '63" x 24" surface for a full work setup.'], [p.images[6], "Electric lift", "Adjust height without cranks."], [p.images[8], "Stay organized", "Built-in hooks and a cable hole."]].map(([s, t, d]) => <div key={t} className="rounded-xl border overflow-hidden"><img src={s} alt="" className="w-full aspect-square object-cover"/><div className="p-4"><h3 className="font-bold text-brand">{t}</h3><p className="text-sm text-gray-700 mt-1">{d}</p></div></div>)}
    </section>
    <section className="bg-brand text-white mt-10"><div className="max-w-6xl mx-auto px-4 md:px-6 py-12 text-center">
      <h2 className="text-2xl font-bold">30-day returns</h2><p className="mt-2 max-w-xl mx-auto">Not the right fit? Contact us within 30 days of delivery to start a return under our <a href="#/refund" className="underline">refund policy</a>. Secure payment processed by Stripe.</p></div></section>
    <div className="fixed bottom-0 inset-x-0 bg-white border-t shadow z-50"><div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
      <img src={p.images[0]} alt="" className="w-12 h-12 object-cover rounded"/><div className="flex-1 min-w-0"><p className="font-medium truncate text-sm">{p.title}</p><p className="text-brand font-bold">${p.price}</p></div>
      <a href={PAYMENT_LINK} className="bg-brand hover:bg-brandh text-white font-bold rounded-[0.65rem] px-6 py-3">BUY NOW</a></div></div>
  </main>;
}
