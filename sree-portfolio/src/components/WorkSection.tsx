import { featuredProjects } from '@/data/content';
import './WorkSection.css';

export default function WorkSection() {
  return (
    <section id="work" className="section work main-stage" aria-labelledby="work-heading">
      <h2 id="work-heading" className="section-heading">
        <span className="section-heading-num">03.</span> Selected work
      </h2>
      <ul className="work__list">
        {featuredProjects.map((p) => (
          <li key={p.title} className="work__card">
            <div className="work__card-inner">
              <h3 className="work__title">{p.title}</h3>
              <p className="work__desc">{p.description}</p>
              <ul className="work__tech">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
