import { useState } from 'react';
import { experience } from '@/data/content';
import './ExperienceSection.css';

export default function ExperienceSection() {
  const [active, setActive] = useState(0);

  const job = experience[active];
  if (!job) return null;

  return (
    <section id="experience" className="section experience main-stage" aria-labelledby="exp-heading">
      <h2 id="exp-heading" className="section-heading">
        <span className="section-heading-num">02.</span> Experience
      </h2>
      <div className="experience__layout">
        <div className="experience__tabs" role="tablist" aria-label="Work history">
          {experience.map((item, i) => (
            <button
              key={item.company}
              type="button"
              role="tab"
              id={`tab-${i}`}
              aria-selected={active === i}
              aria-controls={`panel-${i}`}
              className={`experience__tab ${active === i ? 'experience__tab--active' : ''}`}
              onClick={() => setActive(i)}
            >
              {item.company}
            </button>
          ))}
        </div>
        <div
          className="experience__panel"
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
        >
          <h3 className="experience__title">
            {job.title}{' '}
            <span className="experience__at">
              @ {job.company}
            </span>
          </h3>
          <p className="experience__meta">
            {job.range} · {job.location}
          </p>
          <ul className="experience__highlights">
            {job.highlights.map((h, idx) => (
              <li key={`${job.company}-${idx}`}>{h}</li>
            ))}
          </ul>
          <p className="experience__tech">
            <span className="experience__tech-label">Tech:</span> {job.tech.join(', ')}
          </p>
        </div>
      </div>
    </section>
  );
}
