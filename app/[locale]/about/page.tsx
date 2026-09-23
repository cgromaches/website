import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n"
import { localeAlternatesMetadata } from "@/lib/metadata/locale-alternates"
import { aboutMessages } from "@/lib/messages/about"

const aboutDescription =
  "KOMMA is a research and relational-technology studio building the finance, legal-form and technology mechanisms to hold what we have in common, beginning with land and housing."

const LINKEDIN_URL = "https://www.linkedin.com/company/komma-systems"
const TWITTER_URL = "https://x.com/komma_systems"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  return {
    title: "KOMMA / About",
    description: aboutDescription,
    openGraph: {
      title: "KOMMA / About",
      description: aboutDescription,
      url: "https://komma.systems/about",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "KOMMA / About",
      description: aboutDescription,
    },
    ...localeAlternatesMetadata("/about", locale),
  }
}

const dtClasses =
  "font-grotesk text-[11px] font-medium uppercase tracking-[0.2em] text-white/40"
const ddClasses =
  "mt-1 font-grotesk text-[14.5px] font-light leading-7 text-white/85"
const factLink =
  "font-grotesk text-[14px] font-light leading-7 text-white border-b border-white/30 hover:text-cream hover:border-cream transition-colors"

type PageProps = { params: Promise<{ locale: string }> }

export default async function AboutPage({ params }: PageProps) {
  const { locale: raw } = await params
  const locale: Locale = isLocale(raw) ? raw : defaultLocale
  const t = aboutMessages[locale]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black px-6 pb-20 pt-28 font-sourceSerif text-white sm:px-10 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <header className="mb-16">
            <Link
              href={`/${locale}`}
              className="mb-8 inline-block font-silkscreen text-xs uppercase tracking-wider text-white/60 transition-colors hover:text-cream"
            >
              {t.back}
            </Link>
            <h1 className="font-silkscreen text-5xl tracking-tight sm:text-6xl">{t.title}</h1>
            <p className="mt-6 max-w-[720px] text-lg leading-[1.7] text-slate-200">{t.tagline}</p>
          </header>

          {/* Key Facts — crawlable definition list */}
          <p className="mb-6 font-silkscreen text-base sm:text-lg uppercase tracking-[0.18em] text-cream">
            {t.factsLabel}
          </p>
          <dl className="grid max-w-[860px] grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {t.facts.map((f) => (
              <div key={f.term}>
                <dt className={dtClasses}>{f.term}</dt>
                <dd className={ddClasses}>{f.value}</dd>
              </div>
            ))}
            <div>
              <dt className={dtClasses}>{t.socialTerm}</dt>
              <dd className={ddClasses}>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={factLink}>
                  LinkedIn
                </a>
                <br />
                <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className={factLink}>
                  X (Twitter)
                </a>
              </dd>
            </div>
          </dl>

          <Link
            href={`/${locale}`}
            className="mt-20 inline-block font-silkscreen text-xs uppercase tracking-wider text-white/60 transition-colors hover:text-cream"
          >
            {t.back}
          </Link>
        </div>
      </main>
    </>
  )
}
