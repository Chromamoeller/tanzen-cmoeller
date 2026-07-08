import Hero from "./components/Hero";
import DanceStyles from "./components/DanceStyles";
import Instructor from "./components/Instructor";
import Pricing from "./components/Pricing";
import LineDance from "./components/LineDance";
import { Facebook, Instagram } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      <DanceStyles />

      <Instructor />

      <Pricing />

      <LineDance />

      {/* Footer */}
      <footer
        id="footerInfo"
        className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Social Media</h3>
              <div className="flex">
                <a
                  href="https://www.facebook.com/profile.php?id=100089205738881"
                  className="inline-block mr-4"
                >
                  <Facebook className="w-10 h-10 text-blue-600" />
                </a>
                <br />
                <a
                  href="https://instagram.com/tanzen.cmoeller?igshid=YmMyMTA2M2Y="
                  className="inline-block mr-4"
                >
                  <Instagram className="w-10 h-10 text-orange-600" />
                </a>
              </div>

              {/* <div className="flex gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div> */}
            </div>

            {/* <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/80">
                <li>
                  <a
                    href="#styles"
                    className="hover:text-white transition-colors"
                  >
                    Dance Styles
                  </a>
                </li>
                <li>
                  <a
                    href="#instructor"
                    className="hover:text-white transition-colors"
                  >
                    Meet Elena
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#booking"
                    className="hover:text-white transition-colors"
                  >
                    Book a Lesson
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div> */}

            <div>
              <h4 className="text-lg font-semibold mb-6">
                Studio Informationen
              </h4>
              <div className="space-y-4 text-white/80">
                <div>
                  <p className="font-medium text-white mb-1">Ort</p>
                  <p>Eichenstraße 11, 82061 Neuried</p>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Kontakt</p>
                  <p>
                    Tel.-WhatsApp: 0151-40144251
                    <br />
                    Tel.-WhatsApp: 0177-8903997
                    <br />
                    Email: tanzen.cmoeller@gmx.de
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2025 Tanzen Christian Möller Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
