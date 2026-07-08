import React from "react";
import { Award, Globe, Music, Heart } from "lucide-react";
import MyPic from "../assets/ChrisSW.jpg";

export default function Instructor() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={MyPic}
                alt="Elena Rossi - Professional Dance Instructor"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  15+
                </div>
                <div className="text-sm text-gray-600">Jahre Erfahtung</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Triff Deinen
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  Tanzlehrer
                </span>
              </h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                Christian Möller
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Christian bringt in jede Stunde sein fundiertes Fachwissen,
                authentische Leidenschaft und eine warme, motivierende
                Unterrichtsatmosphäre. Mit über 15 Jahren Erfahrung in
                verschiedenen Tanzschulen versteht er es, Menschen individuell
                abzuholen und ihnen den Raum zu geben, sich tänzerisch
                weiterzuentwickeln – unabhängig vom Können. So entsteht echtes
                Vertrauen in die eigenen Fähigkeiten und Freude am Tanzen, die
                bleibt.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  <h4 className="font-semibold text-gray-800">
                    Erste Tanzerfahrung mit 15 Jahren
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Einige Wettbewerbe bestritten und gewonnen</li>
                  <li>• Ausbildung zum Tanzlehrer 2019 abgeschlossen</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold text-gray-800">
                    Tanz kennt keine Sprachbarrieren
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Unterricht auf Deutsch und Englisch</li>
                  <li>• Technik, die man versteht – Körpersprache inklusive</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-3">
                  <Music className="w-6 h-6 text-green-600" />
                  <h4 className="font-semibold text-gray-800">
                    Spezifikationen
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Standard und Latein</li>
                  <li>• Vorbereitung auf den Hochzeitstanz</li>
                  <li>• Anfängerfreundlich und motivierend</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-100">
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-6 h-6 text-pink-600" />
                  <h4 className="font-semibold text-gray-800">
                    Tanz-Philosophie
                  </h4>
                </div>
                <p className="text-sm text-gray-600">
                  "Jeder Schüler hat seinen eigenen Rhythmus. Meine Aufgabe ist
                  es, dir mit Geduld, Ermutigung und Technik dabei zu helfen,
                  jede Herrausforderung zu meistern."
                </p>
              </div>
            </div>

            {/* Testimonial */}
            {/* <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <div className="mb-4">
                <div className="flex text-yellow-300 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg italic mb-4">
                  "Elena transformed my confidence completely. I went from being
                  terrified of dancing to absolutely loving it. Her patience and
                  expertise make all the difference."
                </p>
                <div className="text-sm opacity-90">
                  — Sarah M., Wedding Dance Student
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
