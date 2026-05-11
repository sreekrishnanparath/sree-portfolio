import { education, profile, skills } from '@/data/content';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about main-stage" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-heading">
        <span className="section-heading-num">01.</span> About
      </h2>
      <div className="about__grid">
        <div className="about__copy">
          <p>
            I’m <strong>{profile.shortName}</strong>, a {profile.role.toLowerCase()} based in {profile.location}. Across
            banking, retail, logistics, computer vision, and AdTech, I’ve focused on APIs, distributed workflows, and
            platforms that stay reliable under load.
          </p>
          <p>
            Today I concentrate on integration-heavy systems—mapping external APIs into coherent models, automating
            migrations at scale, and evolving gateways toward event-driven architectures on GCP and Kubernetes.
          </p>
          <p>Here’s a snapshot of tools I reach for most often:</p>
          <ul className="about__skills">
            {[...skills.languages.slice(0, 6), ...skills.platforms.slice(0, 6)].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <aside className="about__aside">
          <h3 className="about__aside-title">Education</h3>
          <ul className="about__edu">
            {education.map((e) => (
              <li key={e.school}>
                <div className="about__edu-school">{e.school}</div>
                <div className="about__edu-detail">{e.detail}</div>
                <div className="about__edu-meta">
                  {e.range} · {e.location}
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
