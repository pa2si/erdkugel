'use client';

import { useGlobalContext } from '@/utils/context';
import { companyData } from '../data';

const Companies = () => {
  const { openModal } = useGlobalContext();

  return (
    <>
      {companyData.map((data) => {
        const { id, company, street, postal, link } = data;
        return (
          <section
            key={id}
            onClick={() => openModal(id)}
            className="pt-3 sm:pt-0 pb-3 sm:pb-0 leading-5 md:leading-5 lg:leading-6  border-b sm:border-b-0 border-white"
          >
            <p className="pb-1 md:pb-0 transition-colors duration-300 ease-in-out hover:text-erdkugel-yellow hover:cursor-pointer">
              {company}
            </p>
            <p className="mb-1 md:pb-">{`${street}, ${postal}`}</p>
          </section>
        );
      })}
    </>
  );
};

export default Companies;
