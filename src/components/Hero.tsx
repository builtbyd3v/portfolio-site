import { CONTACT } from '../data/content'

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div>
        <h1 className="hero-name">Dev Goswami</h1>
        <p className="hero-role">Software engineer building AI apps</p>
        <p className="hero-line">
          Software engineering student at Western Governors University. I build
          voice agents for VR headsets, ML models small enough for a phone, and
          full-stack products I ship solo.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="btn btn-primary" href={CONTACT.resume} target="_blank" rel="noreferrer">
            Read my resume
          </a>
          <a className="btn" href={`mailto:${CONTACT.email}`}>
            Email me
          </a>
        </div>
        <a className="hero-win" href="#projects">
          1st Place Overall and MLH Best Open Source at Gator Hack V, for Albie
        </a>
        <p className="muted mt-4 text-[14px]">Seeking Summer 2027 SWE and AI internships.</p>
      </div>
      <figure className="m-0">
        <div className="portrait">
          <div data-slot="portrait">
            <img
              src="/avatar.jpg"
              alt="Dev's profile picture, printed as a cyanotype"
              width={474}
              height={474}
            />
          </div>
        </div>
        <div className="dim mt-6" aria-hidden="true" />
        <figcaption className="mono muted mt-3 flex justify-between text-[12px]">
          <span>{CONTACT.location}</span>
          <span>WGU, class of 2027</span>
        </figcaption>
      </figure>
    </section>
  )
}
