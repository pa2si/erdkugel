import { companyData } from '../data';
import Link from 'next/link';

const Companies = () => {
  return (
    <>
      {companyData.map((data) => {
        const { id, company, street, postal, link } = data;
        return (
          <section
            key={id}
            className="pt-2 sm:pt-0 leading-4 md:leading-5 lg:leading-6 pb-1 sm:pb-0  border-b sm:border-b-0 border-white"
          >
            <p className="pb-1 sm:pb-2 md:pb-0 transition-colors duration-300 ease-in-out hover:text-erdkugel-yellow">
              <Link href={link}>{company}</Link>
            </p>
            <p className="mb-1 md:pb-">{`${street}, ${postal}`}</p>
          </section>
        );
      })}
    </>
  );
};

export default Companies;
