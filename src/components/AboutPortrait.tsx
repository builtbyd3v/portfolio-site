import { useState } from 'react'

export default function AboutPortrait() {
  const [live, setLive] = useState(() => {
    if (typeof window === 'undefined') return true
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  return (
    <button
      type="button"
      className={`about-portrait${live ? '' : ' is-still'}`}
      onClick={() => setLive((value) => !value)}
      aria-pressed={live}
      aria-label={live ? 'Stop the portrait motion' : 'Start the portrait motion'}
    >
      <span className="about-portrait-motion">
        <img
          src="/avatar.jpg"
          alt="Profile picture: a white-haired anime character in black glasses with a red bow."
        />
      </span>
    </button>
  )
}
