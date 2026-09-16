import React from "react";
import {
  Check,
  Crown,
  Users,
  Heart,
  Sparkles,
  CalendarDays,
  Sprout,
  Gem,
  Star,
  Mail,
} from "lucide-react";

const CONTACT_EMAIL = "tanzen.cmoeller@gmx.de";

function buildMailtoLink(subject: string, body: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

function buildRegistrationBody(courseLabel: string) {
  return [
    "Hallo,",
    "",
    `ich melde mich für folgenden Kurs an: ${courseLabel}`,
    "",
    "Vor- und Nachname: ",
    "Name des Tanzpartners / der Tanzpartnerin: ",
    "Telefonnummer für Rückfragen: ",
    "Vorkenntnisse (optional, z.B. Anfänger / schon Tanzerfahrung): ",
    "",
  ].join("\n");
}

function buildTrialBody(sessions: string[]) {
  return [
    "Hallo,",
    "",
    "ich möchte gerne eine Probestunde vereinbaren:",
    sessions.join(" oder\n"),
    "",
    "Vor- und Nachname: ",
    "Name des Tanzpartners / der Tanzpartnerin: ",
    "Telefonnummer für Rückfragen: ",
    "Vorkenntnisse (optional, z.B. Anfänger / schon Tanzerfahrung): ",
    "",
  ].join("\n");
}

type Availability = "free" | "few" | "full";

const availabilityConfig: Record<
  Availability,
  { label: string; dot: string; text: string; bg: string }
> = {
  free: {
    label: "Plätze frei",
    dot: "bg-green-500",
    text: "text-green-700",
    bg: "bg-green-50 border-green-200",
  },
  few: {
    label: "Nur noch wenige Plätze",
    dot: "bg-yellow-400",
    text: "text-yellow-700",
    bg: "bg-yellow-50 border-yellow-200",
  },
  full: {
    label: "Kurs voll",
    dot: "bg-red-500",
    text: "text-red-700",
    bg: "bg-red-50 border-red-200",
  },
};

interface CourseOffer {
  id: string;
  name: string;
  price: string;
  duration: string;
  icon: React.ReactNode;
  features: string[];
  popular?: boolean;
  availability?: Availability;
}

interface TrialOffer {
  title: string;
  subtitle: string;
  sessions: string[];
  price: string;
  priceNote: string;
}

interface CourseCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  badgeBg: string;
  badgeText: string;
  accentBg: string;
  accentText: string;
  offers: CourseOffer[];
  trial?: TrialOffer;
}

export default function Pricing() {
  const categories: CourseCategory[] = [
    {
      id: "einsteiger",
      title: "Einsteiger- & Anfängerkurse",
      subtitle: "Der perfekte Start ohne Vorkenntnisse",
      icon: <Sprout className="w-6 h-6" />,
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-700",
      accentBg: "bg-emerald-500",
      accentText: "text-emerald-700",
      offers: [
        {
          id: "gesellschaftstanz-montag",
          name: "Discofox Anfänger Kurs (Montag)",
          price: "210 €",
          duration: "pro Paar · 6x60 Minuten",
          icon: <CalendarDays className="w-5 h-5" />,
          features: [
            "09.11. – 14.12.2026, jeweils 20:30 Uhr",
            "Für Einsteiger – keine Vorkenntnisse nötig",
            "Der perfekte Einstieg in den Discofox",
          ],
          availability: "free",
        },
        {
          id: "gesellschaftstanz-mittwoch",
          name: "Discofox für Fortgeschrittene (Mittwoch)",
          price: "210 €",
          duration: "pro Paar · 6x60 Minuten",
          icon: <CalendarDays className="w-5 h-5" />,
          features: [
            "11.11. – 16.12.2026, jeweils 20:30 Uhr",
            "Für Tänzer mit ersten Discofox-Kenntnissen",
            "Neue Figuren & mehr Variationen",
          ],
          availability: "free",
        },
      ],
      // trial: {
      //   title: "Vorerst eine Probestunde?",
      //   subtitle: "Jetzt unverbindlich testen!",
      //   sessions: [
      //     "Montag, 21.09.2026 · 1x60 Minuten",
      //     "Mittwoch, 23.09.2026 · 1x60 Minuten",
      //   ],
      //   price: "10 €",
      //   priceNote: "pro Paar",
      // },
    },
    {
      id: "weiterfuehrend",
      title: "Weiterführende Kurse",
      subtitle: "Vertiefung für erfahrene Tänzerinnen und Tänzer",
      icon: <Gem className="w-6 h-6" />,
      badgeBg: "bg-purple-100",
      badgeText: "text-purple-700",
      accentBg: "bg-purple-500",
      accentText: "text-purple-700",
      offers: [
        {
          id: "group",
          name: "Sonntag 18:00 Uhr",
          price: "170 €",
          duration: "pro Paar · 4x60 Minuten",
          icon: <Users className="w-5 h-5" />,
          features: [
            "Einstieg immer möglich",
            "Mehr Spaß durch gemeinsame Erlebnisse",
            "Motivation durch die Energie der Gruppe",
          ],
          availability: "free",
        },
      ],
    },
    {
      id: "sonder",
      title: "Für besondere Anlässe",
      subtitle: "Maßgeschneidert für besondere Anlässe",
      icon: <Star className="w-6 h-6" />,
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-700",
      accentBg: "bg-amber-500",
      accentText: "text-amber-700",
      offers: [
        {
          id: "private",
          name: "Privatstunde",
          price: "100 €",
          duration: "pro Stunde",
          icon: <Crown className="w-5 h-5" />,
          features: [
            "Individuelle Betreuung ganz nach eurem Tempo",
            "Gezielte Korrekturen für schnellen Fortschritt",
            "Flexibilität bei Termin und Inhalt",
            "Fokus auf euren Lieblingstanz",
          ],
          popular: true,
        },

        {
          id: "package",
          name: "Fit für den Hochzeitstanz",
          price: "175 €",
          duration: "2x60 Minuten",
          icon: <Heart className="w-5 h-5" />,
          features: [
            "Sicher auf der Tanzfläche – ohne Lampenfieber",
            "Ein gemeinsamer Moment nur für euch zwei",
            "Perfekt abgestimmt auf euren Lieblingssong",
            "Auch für absolute Tanzanfänger geeignet",
          ],
          popular: true,
        },
        {
          id: "package2",
          name: "Gruppen Hochzeitskurs 2-4 Paare",
          price: "550 €",
          duration: "4x60 Minuten",
          icon: <Sparkles className="w-5 h-5" />,
          features: [
            "Gemeinsam lachen, üben und wachsen",
            "Choreografie passend zu eurem Stil",
            "Gelassen durch die Hochzeitsvorbereitung",
            "Ideal für Einsteigerpaare",
          ],
        },
      ],
    },
  ];

  return (
    <section
      id="kurse"
      className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 scroll-mt-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Schenkt euch gemeinsame
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Momente, die bleiben
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wähle das Lernformat, das zu eurem Zeitplan, Budget und euren Zielen
            passt.
          </p>
        </div>

        <div className="space-y-14">
          {categories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl ${category.badgeBg} ${category.badgeText} flex items-center justify-center flex-shrink-0`}
                >
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{category.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
                  >
                    {offer.popular && (
                      <span
                        className={`absolute -top-3 right-6 px-3 py-1 rounded-full text-xs font-semibold text-white ${category.accentBg}`}
                      >
                        Beliebt
                      </span>
                    )}

                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${category.badgeBg} ${category.badgeText} flex items-center justify-center flex-shrink-0`}
                        >
                          {offer.icon}
                        </div>
                        <h4 className="text-lg font-bold text-gray-800 leading-snug">
                          {offer.name}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-baseline gap-2 mb-5">
                      <span
                        className={`text-3xl font-bold ${category.accentText}`}
                      >
                        {offer.price}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {offer.duration}
                      </span>
                    </div>

                    <ul className="space-y-2.5 mb-5">
                      {offer.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2.5 text-sm text-gray-600"
                        >
                          <Check
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${category.accentText}`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {offer.availability && (
                      <div
                        className={`mb-4 flex items-center justify-center gap-2 rounded-full border px-4 py-2 ${
                          availabilityConfig[offer.availability].bg
                        }`}
                      >
                        <span
                          className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                            availabilityConfig[offer.availability].dot
                          }`}
                        />
                        <span
                          className={`text-sm font-semibold ${
                            availabilityConfig[offer.availability].text
                          }`}
                        >
                          {availabilityConfig[offer.availability].label}
                        </span>
                      </div>
                    )}

                    <a
                      href={buildMailtoLink(
                        `Anmeldung: ${offer.name}`,
                        buildRegistrationBody(offer.name),
                      )}
                      className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-white ${category.accentBg} hover:opacity-90 transition-opacity`}
                    >
                      <Mail className="w-4 h-4" />
                      Jetzt anmelden
                    </a>
                  </div>
                ))}
              </div>

              {category.trial && (
                <div className="relative mt-6">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-2xl blur opacity-60 animate-pulse" />

                  <div className="relative overflow-hidden rounded-2xl border-2 border-amber-300 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 shadow-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="pointer-events-none absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/70 to-transparent" />

                    <Sparkles className="pointer-events-none absolute top-3 right-4 w-4 h-4 text-amber-400 animate-pulse" />
                    <Sparkles className="pointer-events-none absolute bottom-3 left-4 w-3 h-3 text-amber-400 animate-pulse [animation-delay:700ms]" />

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-300/60">
                        <Star className="w-6 h-6 fill-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">
                          {category.trial.title}
                        </p>
                        <p className="text-sm text-gray-500">
                          {category.trial.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
                      {category.trial.sessions.map((session, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-gray-700 text-sm"
                        >
                          <CalendarDays className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          {session}
                        </div>
                      ))}
                    </div>

                    <a
                      href={buildMailtoLink(
                        `Anfrage Probestunde: ${category.title}`,
                        buildTrialBody(category.trial.sessions),
                      )}
                      className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-center flex-shrink-0 shadow-lg shadow-amber-300/60 ring-4 ring-amber-200 animate-pulse hover:scale-105 transition-transform"
                    >
                      <span className="text-lg font-bold leading-none">
                        {category.trial.price}
                      </span>
                      <span className="text-[10px] leading-none mt-1">
                        {category.trial.priceNote}
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
