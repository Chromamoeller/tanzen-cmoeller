import React, { useState } from "react";
import { CalendarDays, Users, Clock, X } from "lucide-react";
import SommerFlyer from "../assets/LineDanceSommer.jpg";
import HerbstFlyer from "../assets/LineDanceHerbst.jpg";

interface LineDanceCourse {
  id: string;
  name: string;
  season: string;
  level: string;
  icon: React.ReactNode;
  dates: string[];
  time: string;
  duration: string;
  flyer: string;
  color: string;
}

export default function LineDance() {
  const [selectedCourse, setSelectedCourse] = useState<string>("herbst-1");
  const [preview, setPreview] = useState<string | null>(null);

  const courses: LineDanceCourse[] = [
    {
      id: "august",
      name: "Line Dance im August",
      season: "August",
      level: "Einsteiger",
      icon: <CalendarDays className="w-6 h-6" />,
      dates: ["02.08.2026", "09.08.2026", "16.08.2026", "23.08.2026", "30.08.2026"],
      time: "19:15 Uhr",
      duration: "5x60 Minuten",
      flyer: SommerFlyer,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "herbst-1",
      name: "Line Dance im Herbst",
      season: "Herbst",
      level: "Einsteiger",
      icon: <Users className="w-6 h-6" />,
      dates: ["11.10.2026", "18.10.2026", "25.10.2026", "08.11.2026", "15.11.2026"],
      time: "19:15 Uhr",
      duration: "5x60 Minuten",
      flyer: HerbstFlyer,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "herbst-2",
      name: "Line Dance im Herbst",
      season: "Herbst",
      level: "Fortgeschritten",
      icon: <Clock className="w-6 h-6" />,
      dates: ["11.10.2026", "18.10.2026", "25.10.2026", "08.11.2026", "15.11.2026"],
      time: "20:30 Uhr",
      duration: "5x60 Minuten",
      flyer: HerbstFlyer,
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <>
    <section className="font-rye py-20 bg-gradient-to-br from-gray-50 to-purple-50 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 flex gap-8 items-start">
        <img
          src={SommerFlyer}
          alt="Line Dance Sommerkurs Flyer"
          onClick={() => setPreview(SommerFlyer)}
          className="hidden xl:block w-60 flex-shrink-0 rounded-2xl shadow-xl sticky top-8 cursor-pointer transition-transform duration-300 hover:scale-105"
        />

        <div className="flex-1 min-w-0">
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
                <div
                  className={`bg-gradient-to-r ${course.color} p-6 text-white`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 rounded-full p-3">
                      {course.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreview(course.flyer);
                        }}
                        className="xl:hidden px-3 py-1 rounded-full text-sm font-medium bg-white/20 hover:bg-white/30 transition-colors"
                      >
                        Flyer
                      </button>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-white/20">
                        {course.season}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    {course.name} · {course.time}
                  </h3>
                  <div className="text-white/80 text-sm">{course.level}</div>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-4 text-center">
                    Termine
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {course.dates.map((date, index) => (
                      <li
                        key={index}
                        className="text-gray-800 text-2xl font-semibold text-center leading-relaxed"
                      >
                        {date}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-center gap-3">
                      <Clock className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {course.duration}
                      </span>
                    </div>
                  </div>
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
          <a href="mailto:tanzen.cmoeller@gmx.de?subject=Anmeldung%20Line%20Dance%20Kurs&body=Hallo%2C%0D%0A%0D%0Aich%20m%C3%B6chte%20mich%20f%C3%BCr%20einen%20Line-Dance-Kurs%20anmelden.%0D%0A%0D%0A">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200">
              Hier klicken um dich anzumelden.
            </button>
          </a>
        </div>
        </div>

        <img
          src={HerbstFlyer}
          alt="Line Dance Herbstkurs Flyer"
          onClick={() => setPreview(HerbstFlyer)}
          className="hidden xl:block w-60 flex-shrink-0 rounded-2xl shadow-xl sticky top-8 cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>

    {preview && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-zoom-out animate-fadeIn"
        onClick={() => setPreview(null)}
      >
        <button
          type="button"
          onClick={() => setPreview(null)}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          aria-label="Vorschau schließen"
        >
          <X className="w-10 h-10" />
        </button>
        <img
          src={preview}
          alt="Line Dance Flyer Vorschau"
          onClick={(e) => e.stopPropagation()}
          className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain cursor-default"
        />
      </div>
    )}
    </>
  );
}
