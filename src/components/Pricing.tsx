import React, { useState } from "react";
import { Check, Crown, Users, User, Heart, Sparkles } from "lucide-react";

interface PricingTier {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  duration: string;
  icon: React.ReactNode;
  features: string[];
  recommended?: boolean;
  color: string;
}

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<string>("private");

  const pricingTiers: PricingTier[] = [
    {
      id: "group",
      name: "Gruppenkurse",
      price: "4x60 Minuten 170 €",
      duration: "pro Paar",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Als bestehende Gruppe oder mit Freunden",
        "Mehr Spaß durch gemeinsame Erlebnisse",
        "Motivation durch die Energie der Gruppe",
        "Fehler erkennen und voneinander profitieren",
        "Mehr Input durch unterschiedliche Perspektiven",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "private",
      name: "Privatstunde ein Tanzpaar",
      price: "100 €",
      duration: "pro Stunde",
      icon: <Crown className="w-6 h-6" />,
      features: [
        "Individuelle Betreuung ganz nach eurem Tempo",
        "Gezielte Korrekturen für schnellen Fortschritt",
        "Flexibilität bei Termin und Inhalt",
        "Raum für persönliche Fragen und Wünsche",
        "Perfekt zur Vorbereitung auf besondere Anlässe",
        "Fokus auf euren Lieblingstanz",
      ],
      recommended: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "private-solo",
      name: "Privatstunde ohne Partner",
      price: "150 €",
      duration: "pro Stunde",
      icon: <User className="w-6 h-6" />,
      features: [
        "Tanzen in deinem Wohlfühltempo – ohne Leistungsdruck",
        "Aufbau von Selbstvertrauen und tänzerischer Präsenz",
        "Individuelle Musikwahl passend zu deinem Stil",
        "Videoanalyse auf Wunsch – um deinen Fortschritt zu sehen",
        "Fokus auf deinen Lieblingstanz",
      ],
      recommended: true,
      color: "from-fuchsia-600 to-indigo-600",
    },
    {
      id: "package",
      name: "Fit für den Hochzeitstanz",
      price: "175 €",
      originalPrice: "",
      duration: "2x60 Minuten",
      icon: <Heart className="w-6 h-6" />,
      features: [
        "Sicher auf der Tanzfläche – ohne Lampenfieber",
        "Ein gemeinsamer Moment nur für euch zwei",
        "Euer Hochzeitstanz wird unvergesslich",
        "Perfekt abgestimmt auf euren Lieblingssong",
        "Spaß und Entspannung trotz Hochzeitsstress",
        "Auch für absolute Tanzanfänger geeignet",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      id: "package2",
      name: "Gruppen Hochzeitskurs 2-4 Paare",
      price: "550 €",
      originalPrice: "",
      duration: "6x60 Minuten",
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        "Gemeinsam lachen, üben und wachsen",
        "Ein Tanz, der euch in Erinnerung bleibt",
        "Choreografie passend zu eurem Stil",
        "Gelassen durch die Hochzeitsvorbereitung",
        "Schritt für Schritt erklärt ideal für Einsteigerpaare",
      ],
      color: "from-yellow-500 to-orange-500",
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

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`group relative cursor-pointer transition-all duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] ${
                selectedTier === tier.id ? "scale-105" : "hover:scale-105"
              }`}
              onClick={() => setSelectedTier(tier.id)}
            >
              <div
                className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden ${
                  tier.recommended
                    ? "border-purple-200 ring-4 ring-purple-100"
                    : selectedTier === tier.id
                      ? "border-purple-200"
                      : "border-gray-100"
                }`}
              >
                <div
                  className={`bg-gradient-to-r ${tier.color} p-6 text-white`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-full p-3">
                      {tier.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-white/80">{tier.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-4 mb-8">
                    {tier.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* <button
                    className={`w-full py-3 px-6 bg-gradient-to-r ${tier.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                  >
                    Book {tier.name}
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Information */}
        {/* <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Studio Schedule & Availability
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Weekday Hours
              </h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">6:00 PM - 9:00 PM</span>
                </div>
                <p className="text-sm text-gray-500">
                  Perfect for after-work lessons
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                Weekend Hours
              </h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-medium">10:00 AM - 6:00 PM</span>
                </div>
                <p className="text-sm text-gray-500">
                  More flexibility for longer sessions
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <h4 className="font-semibold text-gray-800 mb-3">
              Special Offers & Packages
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                • <strong>First-Time Students:</strong> 20% off your first
                private lesson
              </li>
              <li>
                • <strong>Wedding Couples:</strong> Complimentary consultation +
                custom song choreography
              </li>
              <li>
                • <strong>Refer a Friend:</strong> Both receive $15 off your
                next lesson
              </li>
              <li>
                • <strong>Birthday Special:</strong> Free group class during
                your birthday month
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
}
