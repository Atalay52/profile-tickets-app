export default async function handler(req, res) {
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
