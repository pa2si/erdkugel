export const metadata = {
  title: 'imprint',
  description: ' find here the privacy policy for erdkugel lab website',
};

import TitleHOne from '@/utils/TitleHOne';
import styles from './page.module.css';

const page = () => {
  return (
    <main className="pt-20 sm:container sm:mx-auto mt-1 sm:mb-8 ">
      <div
        className=" flex justify-center underline decoration-erdkugel-text decoration-2 underline-offset-8"
        id="transNav"
      >
        <TitleHOne text="Impressum" />
      </div>

      <article className="mt-4">
        <address className={` text-center ${styles.impressum}`}>
          <h3 className="text-2xl sm:text-3xl">
            Angaben gem&auml;&szlig; &sect; 5 TMG
          </h3>
          <p className="text:lg sm:text-xl">
            erdkugel GmbH
            <br />
            Engertstraße 13
            <br />
            04177 Leipzig
          </p>

          <p className="text:lg sm:text-xl">
            Handelsregister: HRB 41027
            <br />
            Registergericht: Amtsgericht Leipzig
          </p>

          <h5 className="text-2xl">Vertreten durch:</h5>
          <p className="text:lg sm:text-xl">André Stiebe</p>

          <h3 className="text-2xl sm:text-3xl">Kontakt</h3>
          <p className="text:lg sm:text-xl">
            Telefon: +49 (0) 175 72 39 032
            <br />
            E-Mail: office@erdkugel.net
          </p>

          <h3 className="text-2xl sm:text-3xl">Umsatzsteuer-ID</h3>
          <p className="text:lg sm:text-xl">
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz:
            <br />
            DE321414736
          </p>

          <h3 className="text-2xl sm:text-3xl">EU-Streitschlichtung</h3>
          <p className="text:lg sm:text-xl">
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h3 className="text-2xl sm:text-3xl">
            Verbraucher&shy;streit&shy;beilegung /
            Universal&shy;schlichtungs&shy;stelle
          </h3>
          <p className="text:lg sm:text-xl">
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p className="text:lg sm:text-xl">
            Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
          </p>
        </address>
      </article>
    </main>
  );
};
export default page;
