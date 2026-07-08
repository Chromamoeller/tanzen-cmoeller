import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </a>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">Impressum</h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              Christian Möller
              <br />
              Blumenstraße 91
              <br />
              82110 Germering
              <br />
              Deutschland
            </p>
            <p className="mt-3">
              Selbstständiger Tanzlehrer (freiberufliche Tätigkeit)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Kontakt</h2>
            <p>
              Telefon / WhatsApp: 0151&nbsp;40144251
              <br />
              E-Mail:{" "}
              <a
                href="mailto:tanzen.cmoeller@gmx.de"
                className="text-purple-600 hover:underline"
              >
                tanzen.cmoeller@gmx.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Berufshaftpflichtversicherung
            </h2>
            <p>
              Versicherer: LVM Versicherung
              <br />
              Kolde-Ring 21
              <br />
              48126 Münster
            </p>
            <p className="mt-3">Räumlicher Geltungsbereich: Deutschland</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Redaktionell verantwortlich
            </h2>
            <p>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</p>
            <p className="mt-3">
              Christian Möller
              <br />
              Blumenstraße 91
              <br />
              82110 Germering
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
              verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die
              auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mt-3">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
              Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
              Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
              Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
              diese Inhalte umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar.
            </p>
            <p className="mt-3">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
              jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
              zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet.
            </p>
            <p className="mt-3">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
              wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
              werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
              bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend
              entfernen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
