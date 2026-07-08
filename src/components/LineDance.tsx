import React, { useState } from "react";
import { Check, CalendarDays, Users, Clock } from "lucide-react";

interface LineDanceCourse {
  id: string;
  name: string;
  season: string;
  start: string;
  time: string;
  level: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

export default function LineDance() {
  const [selectedCourse, setSelectedCourse] = useState<string>("herbst-1");

  const courses: LineDanceCourse[] = [
    {
      id: "august",
      name: "Line Dance Schnupperkurs",
      season: "August",
      start: "ab August 2025",
      time: "6x60 Minuten",
      level: "Einsteiger",
      icon: <CalendarDays className="w-6 h-6" />,
      features: [
        "Perfekter Einstieg ohne Vorkenntnisse",
        "Ganz ohne Tanzpartner möglich",
        "Die wichtigsten Grundschritte leicht erklärt",
        "Lockere Atmosphäre und viel Spaß",
        "Ideal, um Line Dance einfach mal auszuprobieren",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "herbst-1",
      name: "Line Dance Grundkurs",
      season: "Herbst",
      start: "ab September 2025",
      time: "8x60 Minuten",
      level: "Einsteiger",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Systematischer Aufbau der Grundschritte",
        "Beliebte Choreografien Schritt für Schritt",
        "Feste Gruppe für kontinuierlichen Fortschritt",
        "Fördert Koordination und Rhythmusgefühl",
        "Gemeinsames Tanzen ohne Leistungsdruck",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "herbst-2",
      name: "Line Dance Aufbaukurs",
      season: "Herbst",
      start: "ab Oktober 2025",
      time: "8x60 Minuten",
      level: "Fortgeschritten",
      icon: <Clock className="w-6 h-6" />,
      features: [
        "Für alle mit ersten Line-Dance-Erfahrungen",
        "Anspruchsvollere Choreografien und Übergänge",
        "Verfeinerung von Technik und Ausdruck",
        "Neue Tänze zu abwechslungsreicher Musik",
        "Mehr Sicherheit und Freude auf der Tanzfläche",
      ],
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Tanzen in der Gruppe mit
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Line Dance
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Line Dance macht Spaß, hält fit und geht auch ganz ohne Tanzpartner.
            Im August startet ein Schnupperkurs, im Herbst geht es mit zwei
            weiteren Kursen für Einsteiger und Fortgeschrittene weiter. Sichere
            dir jetzt deinen Platz!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`group relative cursor-pointer transition-all duration-300 ${
                selectedCourse === course.id ? "scale-105" : "hover:scale-105"
              }`}
              onClick={() => setSelectedCourse(course.id)}
            >
              <div
                className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden ${
                  selectedCourse === course.id
                    ? "border-purple-200 ring-4 ring-purple-100"
                    : "border-gray-100"
                }`}
              >
                <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-full p-3">
                      {course.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20">
                      {course.season}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{course.start}</span>
                  </div>
                  <div className="mt-2 text-white/80 text-sm">
                    {course.time} · {course.level}
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-4">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Interesse an einem der Line-Dance-Kurse? Melde dich einfach – die
            Plätze sind begrenzt.
          </p>
          <a href="#footerInfo">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200">
              Hier klicken um dich anzumelden.
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
