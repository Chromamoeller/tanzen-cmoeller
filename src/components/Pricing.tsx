import React from "react";
import {
  Check,
  Crown,
  Users,
  User,
  Heart,
  Sparkles,
  CalendarDays,
  Sprout,
  TrendingUp,
  Gem,
  Star,
} from "lucide-react";

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
          name: "Gesellschaftstanz für Anfänger – Kurs 1 (Montag)",
          price: "105 €",
          duration: "pro Person · 6x60 Minuten",
          icon: <CalendarDays className="w-5 h-5" />,
          features: [
            "09.11. – 14.12.2026, jeweils 20:00 Uhr",
            "Wir tanzen: Walzer, Discofox, Chachacha, Tango",
            "Praktisch und leicht verständlich",
            "Probestunde am 21.09.2026 für nur 10 € pro Paar",
          ],
          availability: "free",
        },
        {
          id: "gesellschaftstanz-mittwoch",
          name: "Gesellschaftstanz für Anfänger – Kurs 2 (Mittwoch)",
          price: "105 €",
          duration: "pro Person · 6x60 Minuten",
          icon: <CalendarDays className="w-5 h-5" />,
          features: [
            "11.11. – 16.12.2026, jeweils 20:00 Uhr",
            "Wir tanzen: Walzer, Discofox, Chachacha, Tango",
            "Praktisch und leicht verständlich",
            "Probestunde am 23.09.2026 für nur 10 € pro Paar",
          ],
          availability: "free",
        },
      ],
    },
    {
      id: "fortschritt",
      title: "Fortschrittskurse",
      subtitle: "Für alle, die bereits erste Schritte gemacht haben",
      icon: <TrendingUp className="w-6 h-6" />,
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-700",
      accentBg: "bg-blue-500",
      accentText: "text-blue-700",
      offers: [
        {
          id: "gesellschaftstanz-fortgeschritten-montag",
          name: "Gesellschaftstanz für Fortgeschrittene – Kurs 1 (Montag)",
          price: "105 €",
          duration: "pro Person · 6x60 Minuten",
          icon: <CalendarDays className="w-5 h-5" />,
          features: [
            "Start: Januar 2027 – genaue Termine folgen",
            "Fortsetzung von Kurs 1 (Montag)",
            "jeweils 20:00 Uhr",
            "Wir tanzen: Walzer, Discofox, Chachacha, Tango",
          ],
        },
        {
          id: "gesellschaftstanz-fortgeschritten-mittwoch",
          name: "Gesellschaftstanz für Fortgeschrittene – Kurs 2 (Mittwoch)",
          price: "105 €",
          duration: "pro Person · 6x60 Minuten",
          icon: <CalendarDays className="w-5 h-5" />,
          features: [
            "Start: Januar 2027 – genaue Termine folgen",
            "Fortsetzung von Kurs 2 (Mittwoch)",
            "jeweils 20:00 Uhr",
            "Wir tanzen: Walzer, Discofox, Chachacha, Tango",
          ],
        },
      ],
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
          name: "Privatstunde mit Tanzlehrer",
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
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
                        className={`flex items-center justify-center gap-2 rounded-full border px-4 py-2 ${
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
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
