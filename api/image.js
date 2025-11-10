export default async function handler(req, res) {
  const svg = `
    &lt;svg width="600" height="400" xmlns="http://www.w3.org/2000/svg"&gt;
      &lt;defs&gt;
        &lt;linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"&gt;
          &lt;stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" /&gt;
          &lt;stop offset="100%" style="stop-color:#7E22CE;stop-opacity:1" /&gt;
        &lt;/linearGradient&gt;
      &lt;/defs&gt;
      
      &lt;rect width="600" height="400" fill="url(#gradient)"/&gt;
      
      &lt;text x="300" y="40" font-family="Arial" font-size="20" fill="white" text-anchor="middle"&gt;
        YOU OWN: 0
      &lt;/text&gt;
      
      &lt;text x="300" y="80" font-family="Arial" font-size="24" fill="white" text-anchor="middle" font-weight="bold"&gt;
        @reis
      &lt;/text&gt;
      
      &lt;text x="300" y="110" font-family="Arial" font-size="16" fill="#E5E7EB" text-anchor="middle"&gt;
        293 Followers
      &lt;/text&gt;
      
      &lt;text x="300" y="170" font-family="Arial" font-size="36" fill="white" text-anchor="middle" font-weight="bold"&gt;
        0.0256
      &lt;/text&gt;
      &lt;text x="380" y="170" font-family="Arial" font-size="16" fill="#10B981" text-anchor="middle"&gt;
        0%
      &lt;/text&gt;
      
      &lt;text x="300" y="220" font-family="Arial" font-size="16" fill="#E5E7EB" text-anchor="middle"&gt;
        BALANCE: ▲ 0.0072
      &lt;/text&gt;
      
      &lt;text x="300" y="250" font-family="Arial" font-size="14" fill="#9CA3AF" text-anchor="middle"&gt;
        TOTAL FEE: 7.5%
      &lt;/text&gt;
      
      &lt;text x="300" y="320" font-family="Arial" font-size="18" fill="#FBBF24" text-anchor="middle" font-weight="bold"&gt;
        READY TO TRADE
      &lt;/text&gt;
    &lt;/svg&gt;
  `;
  
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
}
