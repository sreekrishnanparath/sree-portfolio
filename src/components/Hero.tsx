import { profile, socialLinks } from '@/data/content';
import './Hero.css';

function IconLinkedIn() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.063 2.063 0 1.139-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.111-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .268.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10Z"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  );
}

export default function Hero() {
  const linkedIn = socialLinks.find((s) => s.icon === 'linkedin');
  const gitHub = socialLinks.find((s) => s.icon === 'github');

  return (
    <section id="hero" className="hero main-stage">
      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">Hi, I&apos;m</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__body">
            {profile.summary}{' '}
            <a className="hero__inline-link" href="#experience">
              Jump to experience
            </a>
            .
          </p>
          <nav className="hero__social" aria-label="Social links">
            <ul className="hero__social-list">
              {linkedIn ? (
                <li>
                  <a
                    className="hero__social-link"
                    href={linkedIn.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={linkedIn.name}
                  >
                    <IconLinkedIn />
                  </a>
                </li>
              ) : null}
              {gitHub ? (
                <li>
                  <a
                    className="hero__social-link"
                    href={gitHub.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={gitHub.name}
                  >
                    <IconGitHub />
                  </a>
                </li>
              ) : null}
              <li>
                <a className="hero__social-link" href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
                  <IconMail />
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo-frame">
            <img
              className="hero__photo"
              src={profile.profileImageSrc}
              alt={profile.profileImageAlt}
              width={320}
              height={320}
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
