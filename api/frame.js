export default async function handler(req, res) {
  if (req.method === 'POST') {
    return res.status(200).send({
      type: 'frame',
      frame: {
        version: "vNext",
        image: "https://profile-tickets-app.vercel.app/api/image",
        buttons: [
          { label: "BUY 🚀", action: "post" },
          { label: "SELL 📉", action: "post" }
        ],
        postUrl: "https://profile-tickets-app.vercel.app/api/frame"
      }
    });
  }
  
  const html = `
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;meta property="fc:frame" content="vNext"&gt;
        &lt;meta property="fc:frame:image" content="https://profile-tickets-app.vercel.app/api/image"&gt;
        &lt;meta property="fc:frame:button:1" content="BUY 🚀"&gt;
        &lt;meta property="fc:frame:button:2" content="SELL 📉"&gt;
        &lt;meta property="fc:frame:post_url" content="https://profile-tickets-app.vercel.app/api/frame"&gt;
    &lt;/head&gt;
    &lt;body&gt;
        Profile Tickets Trading
    &lt;/body&gt;
    &lt;/html&gt;
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.send(html);
}
