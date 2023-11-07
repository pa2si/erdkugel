export const metadata = {
  title: 'imprint',
  description: ' find here the privacy policy for erdkugel lab website',
};

import TitleHOne from '@/utils/TitleHOne';
import styles from './page.module.css';

const page = () => {
  return (
    <main className="pt-20 container mx-auto mt-1 mb-8 ">
      <div className=" flex justify-center underline decoration-erdkugel-text decoration-2 underline-offset-8">
        <TitleHOne text="impressum" />
      </div>
      {/*  <section className="text-center">
        <h1>Impressum</h1>
        <div className="title__underline"></div>
      </section> */}
      <article className="mt-4">
        <address className={` text-center ${styles.impressum}`}>
          <h3>Angaben gem&auml;&szlig; &sect; 5 TMG</h3>
          <p>
            erdkugel GmbH
            <br />
            Engertstraße 13
            <br />
            04177 Leipzig
          </p>

          <p>
            Handelsregister: HRB 41027
            <br />
            Registergericht: Amtsgericht Leipzig
          </p>

          <p>
            <h5>Vertreten durch:</h5>
            <p className="mt-1">André Stiebe</p>
          </p>

          <h3>Kontakt</h3>
          <p>
            Telefon: +49 (0) 175 72 39 032
            <br />
            E-Mail: office@erdkugel.de
          </p>

          <h3>Umsatzsteuer-ID</h3>
          <p>
            Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
            Umsatzsteuergesetz:
            <br />
            DE321414736
          </p>

          <h3>EU-Streitschlichtung</h3>
          <p>
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

          <h3>
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h3>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>

          <p>
            Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
          </p>
        </address>
      </article>
    </main>
  );
};
export default page;
