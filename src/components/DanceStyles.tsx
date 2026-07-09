import React, { useState } from "react";
import { Heart, Zap, Crown, Star } from "lucide-react";
import WalzPic from "../assets/KIBilder/Walzer.png";
import TangoPic from "../assets/KIBilder/Tango.png";
import SalsaPic from "../assets/KIBilder/Chachacha.png";
import FoxPic from "../assets/KIBilder/Discofox.png";

interface DanceStyle {
  id: string;
  name: string;
  description: string;
  difficulty: "Standard" | "Latein" | "Erfahrener oder versierter Tänzer";
  icon: React.ReactNode;
  image: string;
  characteristics: string[];
  benefits: string[];
}

export default function DanceStyles() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const danceStyles: DanceStyle[] = [
    {
      id: "waltz",
      name: "Walzer",
      description:
        "Der eleganteste und grundlegendste aller Standardtänze – perfekt für Hochzeiten und festliche Anlässe.",
      difficulty: "Standard",
      icon: <Crown className="w-8 h-8" />,
      image: WalzPic,

      characteristics: [
        "Sanft und fließend",
        "3/4-Takt",
        "Technik des Heben und Senkens",
        "Romantisch und anmutig",
      ],
      benefits: [
        "Verbessert die Körperhaltung",
        "Stärkt das Selbstvertrauen",
        "Perfekt für Hochzeiten",
        "Fördert die Koordination",
      ],
    },
    {
      id: "tango",
      name: "Tango",
      description:
        "Leidenschaftlich und dramatisch – der Tango ist ein Tanz der Verbindung und intensiven Ausdruckskraft.",
      difficulty: "Standard",
      icon: <Heart className="w-8 h-8" />,
      image: TangoPic,
      characteristics: [
        "Präzise Bewegungen",
        "Enge Tanzhaltung",
        "Dramatische Pausen",
        "Intensive Verbindung",
      ],
      benefits: [
        "Fördert Vertrauen",
        "Verbessert die Konzentration",
        "Stärkt das musikalische Empfinden",
        "Entwickelt Kraft",
      ],
    },
    {
      id: "chachacha",
      name: "Chachacha",
      description:
        "Ein energiegeladener lateinamerikanischer Tanz, der Freude, Rhythmus und lebendige Kultur auf die Tanzfläche bringt.",
      difficulty: "Latein",
      icon: <Zap className="w-8 h-8" />,
      image: SalsaPic,
      characteristics: [
        "Schnelle Fußarbeit",
        "Hüftbewegungen",
        "Drehungen mit dem Partner",
        "Rhythmisch und unterhaltsam",
      ],
      benefits: [
        "Tolles Cardiotraining",
        "Hebt die Stimmung",
        "Geselliges Tanzen",
        "Verbessert das Rhythmusgefühl",
      ],
    },
    {
      id: "discofox",
      name: "Discofox",
      description:
        "Aufregend und klassisch – der Discofox ist ideal für geselliges Tanzen und besondere Anlässe",
      difficulty: "Standard",
      icon: <Star className="w-8 h-8" />,
      image: FoxPic,
      characteristics: [
        "Peppig und befreiend ",
        "Leicht zu lernen",
        "Vielseitig zur Musik einsetzbar",
      ],
      benefits: [
        "Einfach zu Verstehen und zu lernen",
        "Großartlig für Partys",
        "Fördert soziale Interaktion",
        "Zeitlos",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Entdecke deinen
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Lieblingstanz
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jeder Tanzstil hat seine ganz eigene Schönheit und besondere
            Wirkung. Hier sind 4 von den 10 Tänzen die ich biete. Klicke auf
            einen der untenstehenden Tänze, um mehr darüber zu erfahren – und
            vielleicht entdeckst du schon bald deinen Lieblingstanz!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {danceStyles.map((style) => (
            <div
              key={style.id}
              className={`group cursor-pointer transition-all duration-300 ${
                selectedStyle === style.id ? "scale-105" : "hover:scale-105"
              }`}
              onClick={() =>
                setSelectedStyle(selectedStyle === style.id ? null : style.id)
              }
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-purple-200 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={style.image}
                    alt={style.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4"></div>
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        style.difficulty === "Standard"
                          ? "bg-green-100 text-green-800"
                          : style.difficulty === "Latein"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}
                    >
                      {style.difficulty}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {style.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {style.description}
                  </p>

                  {selectedStyle === style.id && (
                    <div className="space-y-4 animate-fadeIn">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Hauptmerkmale:
                        </h4>
                        <ul className="space-y-1">
                          {style.characteristics.map((char, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-600 flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">
                          positive Effekte:
                        </h4>
                        <ul className="space-y-1">
                          {style.benefits.map((benefit, index) => (
                            <li
                              key={index}
                              className="text-sm text-gray-600 flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Nicht sicher welcher dieser Tänze am besten zu dir passt? Dann finde
            es in einer Privatstunde herraus.
          </p>
          <a href="#footerInfo">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200">
              Hier klicken um eine Privatstunde zu vereinbaren.
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
