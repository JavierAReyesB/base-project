/* Enhanced3DBackground.tsx  ─ con bandas diagonales */
'use client'

import React from 'react'

const Enhanced3DBackground: React.FC = () => {
  const float1 = 'float1 25s ease-in-out infinite'
  const float2 = 'float2 30s ease-in-out infinite'
  const floatBands = 'floatBands 40s linear infinite'

  return (
    <>
      <div className='fixed inset-0 -z-10 overflow-hidden pointer-events-none'>
        {/* Fondo radial crema */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at top left,#fffffb 0%,#fffef7 25%,#fefcf3 50%,#fdf9ef 75%,#fcf6eb 100%)'
          }}
        />

        {/* Gradientes suaves */}
        <div
          className='absolute will-change-transform'
          style={{
            top: '-15%',
            left: '-15%',
            width: '130%',
            height: '130%',
            animation: float1,
            background:
              'linear-gradient(45deg,rgba(255,255,251,.9) 0%,rgba(253,249,239,.6) 40%,rgba(239,231,215,.3) 70%,transparent 100%),' +
              'linear-gradient(-30deg,rgba(255,255,251,.8) 0%,rgba(254,252,243,.5) 35%,transparent 80%)'
          }}
        />

        {/* Capa flotante secundaria */}
        <div
          className='absolute inset-0 will-change-transform'
          style={{
            animation: float2,
            background:
              'linear-gradient(120deg,rgba(255,255,251,.9) 0%,rgba(248,240,227,.4) 40%,transparent 60%),' +
              'linear-gradient(-60deg,rgba(254,252,243,.8) 10%,rgba(239,231,215,.3) 50%,transparent 70%)'
          }}
        />

        {/* ────────────────────────────────────────────────
            NUEVA CAPA “BANDS”  ↘↘↘ diagonal stripes
        ──────────────────────────────────────────────── */}
        <div
          className='absolute inset-0 will-change-transform mix-blend-soft-light'
          style={{
            animation: floatBands,
            background:
              /* 8 bandas diagonales anchas, muy suaves */
              'repeating-linear-gradient(60deg,transparent 0%, transparent 8%, rgba(239,231,215,.18) 8%, rgba(239,231,215,.18) 14%, transparent 14%, transparent 22%)'
          }}
        />

        {/* Esferas flotantes */}
        {[
          { size: 240, x: 80, y: 22 },
          { size: 200, x: 18, y: 76 },
          { size: 180, x: 62, y: 62 }
        ].map(({ size, x, y }) => (
          <div
            key={`${x}-${y}-${size}`}
            style={{
              position: 'absolute',
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%,-50%)',
              borderRadius: '50%',
              willChange: 'transform',
              animation: float1,
              background:
                'radial-gradient(circle at 25% 25%,rgba(255,255,251,1) 0%,rgba(253,249,239,.7) 60%,rgba(239,231,215,.3) 85%,transparent 100%)',
              boxShadow: `0 ${size * 0.12}px ${
                size * 0.25
              }px rgba(239,231,215,.4),
                          0 ${size * 0.08}px ${
                size * 0.15
              }px rgba(245,237,223,.3),
                          0 ${size * 0.04}px ${
                size * 0.08
              }px rgba(248,240,227,.2)`
            }}
          />
        ))}
      </div>

      {/* Keyframes (GPU only) */}
      <style jsx global>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes float1 {
            0%,
            100% {
              transform: translate3d(0, 0, 0) rotate(0deg);
            }
            50% {
              transform: translate3d(15px, -10px, 0) rotate(1deg);
            }
          }
          @keyframes float2 {
            0%,
            100% {
              transform: translate3d(0, 0, 0) rotate(0deg);
            }
            50% {
              transform: translate3d(-12px, 12px, 0) rotate(-1deg);
            }
          }
          /* Bandas se desplazan lentamente en diagonal */
          @keyframes floatBands {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-200px);
            }
          }
        }
      `}</style>
    </>
  )
}

export default Enhanced3DBackground
