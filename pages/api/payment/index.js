const stripe = require('stripe')('sk_test_51KVLPSFSNhBiDSMpYfSU5GXUHrCBWI7i1czcLWL9RTepUlDjdIe0jDpmrqNGbeDkwUxhn39bKj0dxmdvmm6e2e4P00Scu52KTB')

export default async function handler(req, res) {
    
  if (req.method === 'POST') {
    try {
      const listItems = JSON.parse(req.body)
      const session = await stripe.checkout.sessions.create({
        line_items: listItems,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.json({ id: session.id })
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}