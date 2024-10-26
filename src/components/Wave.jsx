import React from 'react'
import dynamic from 'next/dynamic'
import  './Wave.module.css' // Using CSS Modules for styling

// Dynamically import `react-wavify` to prevent issues with SSR (Server-Side Rendering)
const Wave = dynamic(() => import('react-wavify'), { ssr: false })

const WaveComponent = () => {
  return (
    <div className="wave12-section">
      {/* Wave Container */}
      <div className="wave-container">
        <Wave
          mask="url(#mask)"
          fill="#182E4A" // Darker solid color
          paused={false}
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.25,
            points: 3,
          }}
        >
          <defs>
            <mask id="mask">
              <rect
                x="0"
                y="0"
                width="2000"
                height="200"
                fill="white" // Keep white to create the mask for the wave
              />
            </mask>
          </defs>
        </Wave>
      </div>
    </div>
  )
}

export default wave
