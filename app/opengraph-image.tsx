import { ImageResponse } from 'next/og';

export const alt = 'AI Text Cleanup Tools - Free AI Text Utilities';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%)',
          color: '#f8fafc',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: '#38bdf8',
              color: '#0f172a',
              fontSize: '36px',
              fontWeight: 700,
            }}
          >
            {/* Plain ASCII only: Satori tries to fetch a Google Font for any
                glyph outside its bundled set, and a decorative mark like U+2726
                fails that lookup with a 400 and renders as tofu. */}
            AI
          </div>
          <div style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '2px' }}>
            AI Text Cleanup Tools
          </div>
        </div>
        <div style={{ fontSize: '68px', fontWeight: 800, lineHeight: 1.1, marginBottom: '28px' }}>
          AI Text Cleanup Tools
        </div>
        <div style={{ fontSize: '32px', color: '#cbd5e1', lineHeight: 1.4, maxWidth: '900px' }}>
          Free AI text cleanup tools: remove hidden Unicode, fix spacing, and
          clean ChatGPT output for publishing.
        </div>
        <div style={{ fontSize: '26px', color: '#38bdf8', marginTop: '48px' }}>
          aitextcleanuptools.com
        </div>
      </div>
    ),
    { ...size }
  );
}
