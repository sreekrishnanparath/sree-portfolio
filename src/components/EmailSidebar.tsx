import { profile } from '@/data/content';
import './EmailSidebar.css';

export default function EmailSidebar() {
  return (
    <aside className="email-side" aria-label="Email">
      <a className="email-side__link" href={`mailto:${profile.email}`}>
        {profile.email}
      </a>
      <span className="email-side__rule" aria-hidden />
    </aside>
  );
}
