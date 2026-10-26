// Turns a Stripe checkout.session.completed event into a CJdropshipping order.
// NOT run automatically. Usage: STRIPE_SECRET_KEY=... CJ_API_KEY=... node stripe-to-cj.mjs <checkout_session_id> [--submit]
// Without --submit it only prints the order payload (dry run).
const VIDS = { black: "1898282512027971586", oak: "1898282512027971587", brown: "1898282512027971588", white: "1898282512027971589" };
const [, , sid, flag] = process.argv;
const s = await (await fetch(`https://api.stripe.com/v1/checkout/sessions/${sid}?expand[]=line_items`, { headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}` } })).json();
if (s.payment_status !== "paid") throw new Error("Session not paid");
const color = s.custom_fields?.find(f => f.key === "color")?.dropdown?.value || "black";
const sh = s.shipping_details || s.collected_information?.shipping_details; const a = sh.address;
const order = {
  orderNumber: s.id, shippingCountryCode: "US", shippingCountry: "United States", shippingProvince: a.state, shippingCity: a.city,
  shippingAddress: a.line1, shippingAddress2: a.line2 || "", shippingZip: a.postal_code, shippingCustomerName: sh.name,
  shippingPhone: s.customer_details?.phone || "", email: s.customer_details?.email, fromCountryCode: "US",
  logisticName: process.env.CJ_LOGISTIC || "UPS US to US #3",
  products: [{ vid: VIDS[color], quantity: s.line_items.data[0].quantity }],
};
console.log(JSON.stringify(order, null, 2));
if (flag !== "--submit") process.exit(0);
const tok = (await (await fetch("https://developers.cjdropshipping.com/api2.0/v1/authentication/getAccessToken", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ apiKey: process.env.CJ_API_KEY }) })).json()).data.accessToken;
const r = await fetch("https://developers.cjdropshipping.com/api2.0/v1/shopping/order/createOrderV2", { method: "POST", headers: { "Content-Type": "application/json", "CJ-Access-Token": tok }, body: JSON.stringify(order) });
console.log(await r.json());
