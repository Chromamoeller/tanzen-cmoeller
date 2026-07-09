import React, { useState } from "react";
import { CalendarDays, Users, Clock, X } from "lucide-react";
import SommerFlyer from "../assets/LineDanceSommer.jpg";
import HerbstFlyer from "../assets/LineDanceHerbst.jpg";

type Availability = "free" | "few" | "full";

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
  availability: Availability;
}

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
      dates: [
        "02.08.2026",
        "09.08.2026",
        "16.08.2026",
        "23.08.2026",
        "30.08.2026",
      ],
      time: "19:15 Uhr",
      duration: "5x60 Minuten",
      flyer: SommerFlyer,
      color: "from-amber-500 to-orange-500",
      availability: "free",
    },
    {
      id: "herbst-1",
      name: "Line Dance im Herbst",
      season: "Herbst",
      level: "Einsteiger",
      icon: <Users className="w-6 h-6" />,
      dates: [
        "11.10.2026",
        "18.10.2026",
        "25.10.2026",
        "08.11.2026",
        "15.11.2026",
      ],
      time: "19:15 Uhr",
      duration: "5x60 Minuten",
      flyer: HerbstFlyer,
      color: "from-orange-600 to-red-600",
      availability: "full",
    },
    {
      id: "herbst-2",
      name: "Line Dance im Herbst",
      season: "Herbst",
      level: "Einsteiger",
      icon: <Clock className="w-6 h-6" />,
      dates: [
        "11.10.2026",
        "18.10.2026",
        "25.10.2026",
        "08.11.2026",
        "15.11.2026",
      ],
      time: "20:30 Uhr",
      duration: "5x60 Minuten",
      flyer: HerbstFlyer,
      color: "from-red-700 to-amber-700",
      availability: "full",
    },
    {
      id: "kurs-a",
      name: "Kurs A",
      season: "Februar 2027",
      level: "Einsteiger & Wiedereinsteiger",
      icon: <CalendarDays className="w-6 h-6" />,
      dates: [
        "21.02.2027",
        "28.02.2027",
        "07.03.2027",
        "14.03.2027",
        "21.03.2027",
      ],
      time: "19:15 – 20:15 Uhr",
      duration: "5x60 Minuten",
      flyer: SommerFlyer,
      color: "from-amber-500 to-orange-500",
      availability: "free",
    },
    {
      id: "kurs-b",
      name: "Kurs B",
      season: "April 2027",
      level: "Fortgeschrittene",
      icon: <Users className="w-6 h-6" />,
      dates: [
        "04.04.2027",
        "11.04.2027",
        "18.04.2027",
        "25.04.2027",
        "02.05.2027",
      ],
      time: "19:15 – 20:15 Uhr",
      duration: "5x60 Minuten",
      flyer: SommerFlyer,
      color: "from-orange-500 to-red-500",
      availability: "free",
    },
    {
      id: "kurs-c",
      name: "Kurs C",
      season: "Juni 2027",
      level: "Einsteiger & Wiedereinsteiger",
      icon: <CalendarDays className="w-6 h-6" />,
      dates: [
        "06.06.2027",
        "13.06.2027",
        "20.06.2027",
        "27.06.2027",
        "04.07.2027",
      ],
      time: "19:15 – 20:15 Uhr",
      duration: "5x60 Minuten",
      flyer: SommerFlyer,
      color: "from-yellow-600 to-amber-600",
      availability: "free",
    },
    {
      id: "kurs-d",
      name: "Kurs D",
      season: "Juni / Juli 2027",
      level: "Fortgeschrittene",
      icon: <Clock className="w-6 h-6" />,
      dates: [
        "27.06.2027",
        "04.07.2027",
        "11.07.2027",
        "18.07.2027",
        "25.07.2027",
      ],
      time: "20:30 – 21:30 Uhr",
      duration: "5x60 Minuten",
      flyer: SommerFlyer,
      color: "from-red-600 to-orange-700",
      availability: "free",
    },
    {
      id: "kurs-e",
      name: "Kurs E",
      season: "Oktober 2027",
      level: "Einsteiger & Wiedereinsteiger",
      icon: <Users className="w-6 h-6" />,
      dates: [
        "10.10.2027",
        "17.10.2027",
        "24.10.2027",
        "07.11.2027",
        "14.11.2027",
      ],
      time: "19:15 – 20:15 Uhr",
      duration: "5x60 Minuten",
      flyer: HerbstFlyer,
      color: "from-orange-600 to-red-700",
      availability: "free",
    },
  ];

  return (
    <>
      <section
        id="linedance"
        className="font-rye py-20 bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden scroll-mt-8"
      >
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
                Entdecke die Freude am
                <span className="bg-gradient-to-r from-orange-600 to-red-700 bg-clip-text text-transparent block">
                  Line Dance
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Egal ob Anfänger oder mit Tanzerfahrung – Line Dance begeistert
                Menschen jeden Alters. Freu dich auf gute Musik,
                abwechslungsreiche Choreografien und eine tolle Gemeinschaft.
                Einen Tanzpartner brauchst du nicht – nur Lust auf Bewegung!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className={`group relative cursor-pointer transition-all duration-300 w-full md:w-[calc(33.333%-1.334rem)] ${
                    selectedCourse === course.id
                      ? "scale-105"
                      : "hover:scale-105"
                  }`}
                  onClick={() => setSelectedCourse(course.id)}
                >
                  <div
                    className={`relative bg-white rounded-2xl shadow-xl border-2 overflow-hidden ${
                      selectedCourse === course.id
                        ? "border-orange-200 ring-4 ring-orange-100"
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
                      <div className="text-white/80 text-sm">
                        {course.level}
                      </div>
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

                      <div className="border-t border-gray-100 pt-4 space-y-3">
                        <div className="flex items-center justify-center gap-3">
                          <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {course.duration}
                          </span>
                        </div>
                        <div
                          className={`flex items-center justify-center gap-2 rounded-full border px-4 py-2 ${
                            availabilityConfig[course.availability].bg
                          }`}
                        >
                          <span
                            className={`w-3 h-3 rounded-full flex-shrink-0 ${
                              availabilityConfig[course.availability].dot
                            }`}
                          />
                          <span
                            className={`text-sm font-semibold ${
                              availabilityConfig[course.availability].text
                            }`}
                          >
                            {availabilityConfig[course.availability].label}
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
                Interesse an einem der Line-Dance-Kurse? Melde dich einfach –
                die Plätze sind begrenzt.
              </p>
              <a href="mailto:tanzen.cmoeller@gmx.de?subject=Anmeldung%20Line%20Dance%20Kurs&body=Hallo%2C%0D%0A%0D%0Aich%20m%C3%B6chte%20mich%20f%C3%BCr%20einen%20Line-Dance-Kurs%20anmelden.%0D%0A%0D%0A">
                <button className="px-8 py-3 bg-gradient-to-r from-orange-600 to-red-700 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-200">
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
