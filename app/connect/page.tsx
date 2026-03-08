import type { Metadata } from 'next';
import { site } from '@/content/site';
import { links } from '@/content/links';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTA } from '@/components/ui/CTA';

export const metadata: Metadata = {
  title: 'Connect',
  description: `Get in touch with ${site.name}. Performances, volunteering, and partnerships.`,
};

export default function ConnectPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          title="Connect with us"
          subtitle="We’d love to hear from you—whether you want to invite us to perform, volunteer, partner, or just say hello."
          className="mb-12"
        />

        <div className="space-y-10">
          <section id="contact" className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
            <h3 className="text-lg font-semibold text-stone-900">Contact</h3>
            <ul className="mt-4 space-y-2 text-stone-600">
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${site.email}`} className="text-amber-700 hover:underline">
                  {site.email}
                </a>
              </li>
              {site.phone && (
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href={`tel:${site.phone.replace(/\D/g, '')}`} className="text-amber-700 hover:underline">
                    {site.phone}
                  </a>
                </li>
              )}
            </ul>
          </section>

          <section id="volunteer" className="rounded-2xl border border-stone-200 bg-amber-50/50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-stone-900">Volunteer</h3>
            <p className="mt-2 text-stone-600">
              Interested in volunteering? Use the link below to sign up. You can replace this with a SignupGenius or Google Form link in <code className="rounded bg-stone-200 px-1">content/links.ts</code>.
            </p>
            <CTA href={links.volunteer || '#volunteer'} variant="primary" className="mt-4" external={!!links.volunteer}>
              Volunteer sign-up
            </CTA>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
            <h3 className="text-lg font-semibold text-stone-900">Send a message</h3>
            <p className="mt-2 text-stone-600">
              For performance invitations, partnerships, or general questions, use the form below or email us directly.
            </p>
            <form
              action={links.contactForm}
              method="POST"
              className="mt-6 flex flex-col gap-4"
            >
              <input type="hidden" name="form" value="connect" />
              <label htmlFor="name" className="text-sm font-medium text-stone-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="rounded-lg border border-stone-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <label htmlFor="email" className="text-sm font-medium text-stone-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-stone-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <label htmlFor="message" className="text-sm font-medium text-stone-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="rounded-lg border border-stone-300 px-4 py-2 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="w-fit rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
              >
                Send message
              </button>
            </form>
            <p className="mt-3 text-xs text-stone-500">
              Form submits to the URL in <code className="rounded bg-stone-200 px-1">content/links.ts</code>. Replace with Formspree, Netlify Forms, or your backend.
            </p>
          </section>

          <section className="flex flex-wrap gap-4">
            {links.social.facebook && (
              <a href={links.social.facebook} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-amber-600">Facebook</a>
            )}
            {links.social.instagram && (
              <a href={links.social.instagram} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-amber-600">Instagram</a>
            )}
            {links.social.youtube && (
              <a href={links.social.youtube} target="_blank" rel="noopener noreferrer" className="text-stone-600 hover:text-amber-600">YouTube</a>
            )}
            {!links.social.facebook && !links.social.instagram && !links.social.youtube && (
              <p className="text-stone-500">Add social links in content/links.ts</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
