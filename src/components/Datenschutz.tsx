import { ArrowLeft } from "lucide-react";

export default function Datenschutz() {
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

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website im
              Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p className="mt-3">
              Christian Möller
              <br />
              Blumenstraße 91
              <br />
              82110 Germering
              <br />
              Deutschland
            </p>
            <p className="mt-3">
              Telefon / WhatsApp: 0151&nbsp;40144251, 0177&nbsp;8903997
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
              2. Allgemeine Hinweise
            </h2>
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
              Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage
              der gesetzlichen Bestimmungen (DSGVO, TDDDG). In dieser
              Datenschutzerklärung informieren wir Sie über die wichtigsten
              Aspekte der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei handelt es sich in der Regel um Server-Logfiles (siehe
              Ziffer 4).
            </p>
            <p className="mt-3">Unser Hoster ist:</p>
            <p className="mt-3">
              ALL-INKL.COM – Neue Medien Münnich
              <br />
              Inhaber: René Münnich
              <br />
              Hauptstraße 68
              <br />
              02742 Friedersdorf
              <br />
              Deutschland
            </p>
            <p className="mt-3">
              Die Verwendung des Hosters erfolgt zum Zwecke der
              Vertragserfüllung gegenüber unseren potenziellen und bestehenden
              Interessenten (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO) sowie im
              Interesse einer sicheren, schnellen und effizienten
              Bereitstellung unseres Online-Angebots durch einen professionellen
              Anbieter (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO). Mit dem
              Hoster wurde ein Vertrag über die Auftragsverarbeitung (AVV)
              gemäß Art.&nbsp;28 DSGVO geschlossen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              4. Server-Logfiles
            </h2>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in sogenannten Server-Logfiles, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mt-3">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
              Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Der
              Websitebetreiber hat ein berechtigtes Interesse an der technisch
              fehlerfreien Darstellung und der Optimierung seiner Website –
              hierzu müssen die Server-Logfiles erfasst werden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              5. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder WhatsApp kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage, Kontaktdaten) zum Zwecke
              der Bearbeitung Ihres Anliegens bei uns gespeichert und
              verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter.
            </p>
            <p className="mt-3">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von
              Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO, sofern Ihre Anfrage mit
              der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen
              Fällen beruht die Verarbeitung auf unserem berechtigten Interesse
              an der effektiven Bearbeitung der an uns gerichteten Anfragen
              (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO) oder auf Ihrer
              Einwilligung (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO), sofern
              diese abgefragt wurde.
            </p>
            <p className="mt-3">
              Die von Ihnen an uns gesendeten Daten verbleiben bei uns, bis Sie
              uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B.
              nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
              gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen –
              bleiben unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              6. Kommunikation über WhatsApp
            </h2>
            <p>
              Für die Kontaktaufnahme bieten wir unter anderem den
              Messengerdienst WhatsApp an. Anbieter ist die WhatsApp Ireland
              Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
              Irland. Wenn Sie uns über WhatsApp kontaktieren, werden die von
              Ihnen übermittelten Daten (u.&nbsp;a. Telefonnummer und
              Nachrichteninhalte) durch WhatsApp verarbeitet. Wir weisen darauf
              hin, dass dabei auch eine Übermittlung von Daten in Drittländer
              (z.&nbsp;B. USA) stattfinden kann. Rechtsgrundlage ist Art.&nbsp;6
              Abs.&nbsp;1 lit.&nbsp;a und lit.&nbsp;f DSGVO. Details zur
              Datenverarbeitung durch WhatsApp finden Sie in der
              Datenschutzerklärung von WhatsApp:{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline break-words"
              >
                https://www.whatsapp.com/legal/privacy-policy-eea
              </a>
              . Wenn Sie diese Datenübermittlung nicht wünschen, nutzen Sie
              bitte einen der anderen angebotenen Kontaktwege (E-Mail oder
              Telefon).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              7. Google Fonts
            </h2>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              sogenannte Google Fonts, die von Google bereitgestellt werden.
              Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriften
              in Ihren Browsercache, um Texte und Schriftarten korrekt
              anzuzeigen. Zu diesem Zweck muss der von Ihnen verwendete Browser
              Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt
              Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website
              aufgerufen wurde.
            </p>
            <p className="mt-3">
              Die Nutzung von Google Fonts erfolgt im Interesse einer
              einheitlichen und ansprechenden Darstellung unseres
              Online-Angebots. Dies stellt ein berechtigtes Interesse im Sinne
              von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO dar. Sofern eine
              entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art.&nbsp;6
              Abs.&nbsp;1 lit.&nbsp;a DSGVO; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p className="mt-3">
              Anbieter ist die Google Ireland Limited, Gordon House, Barrow
              Street, Dublin 4, Irland. Dabei kann es auch zu einer
              Übermittlung von Daten in die USA kommen. Weitere Informationen zu
              Google Fonts finden Sie unter{" "}
              <a
                href="https://developers.google.com/fonts/faq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline break-words"
              >
                https://developers.google.com/fonts/faq
              </a>{" "}
              und in der Datenschutzerklärung von Google:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline break-words"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              8. Verlinkung auf soziale Netzwerke
            </h2>
            <p>
              Auf unserer Website sind lediglich Verlinkungen zu unseren
              Profilen bei Facebook und Instagram eingebunden. Es werden keine
              Social-Media-Plugins verwendet. Erst wenn Sie aktiv auf einen der
              Links klicken, werden Sie auf die Seite des jeweiligen Anbieters
              weitergeleitet und es können dort personenbezogene Daten erhoben
              werden. Für die Datenverarbeitung auf den verlinkten Plattformen
              ist der jeweilige Anbieter verantwortlich. Es gelten die
              Datenschutzbestimmungen der Meta Platforms Ireland Ltd.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              9. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
              daran, dass die Adresszeile des Browsers von „http://“ auf
              „https://“ wechselt und am Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              10. Ihre Rechte
            </h2>
            <p>
              Ihnen stehen im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit folgende Rechte zu:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>
                Recht auf Auskunft über die von uns verarbeiteten Daten
                (Art.&nbsp;15 DSGVO)
              </li>
              <li>Recht auf Berichtigung unrichtiger Daten (Art.&nbsp;16 DSGVO)</li>
              <li>Recht auf Löschung (Art.&nbsp;17 DSGVO)</li>
              <li>
                Recht auf Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO)
              </li>
              <li>Recht auf Datenübertragbarkeit (Art.&nbsp;20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art.&nbsp;21 DSGVO)</li>
              <li>
                Recht auf Widerruf einer erteilten Einwilligung mit Wirkung für
                die Zukunft (Art.&nbsp;7 Abs.&nbsp;3 DSGVO)
              </li>
            </ul>
            <p className="mt-3">
              Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an die
              oben genannten Kontaktdaten.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              11. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht Ihnen ein
              Beschwerderecht bei einer Aufsichtsbehörde zu. Die für uns
              zuständige Aufsichtsbehörde ist:
            </p>
            <p className="mt-3">
              Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
              <br />
              Promenade 18
              <br />
              91522 Ansbach
              <br />
              <a
                href="https://www.lda.bayern.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                www.lda.bayern.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              12. Aktualität und Änderung dieser Datenschutzerklärung
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die
              Weiterentwicklung unserer Website oder aufgrund geänderter
              gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden,
              diese Datenschutzerklärung zu ändern.
            </p>
            <p className="mt-4 text-sm text-gray-500">Stand: Juli 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
