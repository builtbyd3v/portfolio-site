import { useState } from 'react'
import type { Media } from '../data/content'

// Shows the thumbnail first; a video loads YouTube's player in place only after a click.
export default function ProjectMedia({ media, title }: { media: Media; title: string }) {
  const [playing, setPlaying] = useState(false)

  const picture = (
    <picture>
      {media.motion ? (
        <source srcSet={media.motion} media="(prefers-reduced-motion: no-preference)" />
      ) : null}
      <img
        src={media.src}
        width={media.width}
        height={media.height}
        alt={media.alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )

  return (
    <figure className="m-0">
      {media.youtube ? (
        playing ? (
          <div className="shot shot-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${media.youtube}?autoplay=1&rel=0&playsinline=1`}
              title={`${title} demo video`}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            type="button"
            className="shot shot-video"
            onClick={() => setPlaying(true)}
            aria-label={`Play the ${title} demo video`}
          >
            {picture}
            <span className="shot-play" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.5v13l10.5-6.5z" />
              </svg>
            </span>
          </button>
        )
      ) : (
        <a className="shot" href={media.href} target="_blank" rel="noreferrer">
          {picture}
        </a>
      )}
      <figcaption className="muted mt-2 text-[13px]">{media.caption}</figcaption>
    </figure>
  )
}
