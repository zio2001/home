export const runtime = 'nodejs';

export async function GET() {
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200" viewBox="0 0 900 1200">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#e0e7ff" />
        <stop offset="100%" stop-color="#dbeafe" />
      </linearGradient>
    </defs>
    <rect width="900" height="1200" fill="url(#bg)"/>
    <rect x="130" y="170" width="640" height="860" rx="36" fill="#ffffff" stroke="#1e3a8a" stroke-width="6"/>
    <text x="450" y="520" text-anchor="middle" font-size="56" font-weight="700" fill="#1e3a8a">CHOI JUNHO</text>
    <text x="450" y="590" text-anchor="middle" font-size="32" fill="#334155">Digital Education Expert</text>
    <text x="450" y="660" text-anchor="middle" font-size="26" fill="#475569">MetaBlock Academy</text>
  </svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400'
    }
  });
}
