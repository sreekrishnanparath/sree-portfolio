import { profile } from '@/data/content';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact main-stage" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-heading">
        <span className="section-heading-num">04.</span> Contact
      </h2>
      <div className="contact__card">
        <p className="contact__lead">
          I’m open to thoughtful conversations about backend platforms, API design, and AdTech-scale integrations. The
          fastest path is email—expect a reply within a couple of days.
        </p>
        <a className="contact__btn btn-outline-lg" href={`mailto:${profile.email}`}>
          Say hello
        </a>
      </div>
    </section>
  );
}
