'use client';

import contacts from './data';
import Image from 'next/image';
import { useState } from 'react';

const Page = () => {
  const [hoveredContact, setHoveredContact] = useState(null);

  const handleMouseEnter = (id) => {
    setTimeout(() => {
      setHoveredContact(id);
    }, 150);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setHoveredContact(null);
    }, 150);
  };

  return (
    <main className="pt-3 lg:h-screen">
      <div className="pt-16 text-center ">
        <h1>Contact</h1>
        <div className="title__underline"></div>
      </div>
      <div className="flex justify-center items-center py-7">
        <div className="mx-6 grid grid-cols-1 md:grid-cols-2 gap-7 w-full max-w-6xl">
          {contacts.map((contact) => {
            const {
              id,
              image1,
              image2,
              figcaption,
              link,
              company,
              street,
              postal,
              email,
            } = contact;

            return (
              <div
                key={id}
                className={`z-10 bg-stone-100 bg-opacity-100 lg:bg-opacity-90 p-7 b rounded-md overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:scale-105`}
                style={{
                  boxShadow: '0 -10px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: 'var(--borderRadius)',
                  borderColor: 'var(--grey-300)',
                  borderWidth: '1px',
                }}
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Image
                    src={hoveredContact === id ? image2 : image1}
                    alt={`${company} contact image`}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-80 relative overflow-hidden rounded-t- grayscale-effect"
                    style={{
                      /*         filter: 'grayscale(20%)', */
                      objectFit: 'cover',
                      animation: `${
                        hoveredContact === id
                          ? 'fadeTo05 0.3s ease-in-out'
                          : 'none'
                      }`,
                    }}
                  />
                </a>

                <div className="mt-1">
                  <p className="text-gray-500 text-sm">{figcaption}</p>
                  <div className="mt-2">
                    <h2 className="text-xxl ">{company}</h2>
                    <p className="text-xl text-gray-600">{street}</p>
                    <p className="text-xl text-gray-600">{postal}</p>
                    <p className="text-xl text-gray-600">
                      Email:{' '}
                      <a
                        href={`mailto:${email}`}
                        className="text-blue-500 hover:underline"
                      >
                        {email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Page;
