'use client';
import { SiAudiomack } from 'react-icons/si';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '@/utils/context';
import Image from 'next/image';
import styles from './Modal.module.css';

const Modal = () => {
  const { isModalOpen, closeModal, selectedBranch } = useGlobalContext();

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.modal_overlay)) {
      closeModal();
    }
  };

  return (
    <div
      className={`${styles.modal_overlay} ${
        isModalOpen ? styles.modal_show : ''
      }`}
      onClick={handleOverlayClick}
    >
      {isModalOpen && selectedBranch ? (
        <div className={styles.modal__container}>
          <a
            href={selectedBranch.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src={selectedBranch.image2}
              alt={selectedBranch.alt}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-80 relative overflow-hidden rounded  transition-all duration-300 transform hover:shadow-lg hover:scale-105"
              style={{
                objectFit: 'cover',
              }}
            />
          </a>

          <div className="mt-1">
            <p className="text-gray-500 text-sm">{selectedBranch.figcaption}</p>
          </div>

          <div className="mt-3 ">
            <p className="text-2xl text-gray-800">{selectedBranch.company}</p>
            <p className=" font-normal text-xl text-gray-800">
              {selectedBranch.street}
            </p>
            <p className="text-xl text-gray-800">{selectedBranch.postal}</p>
            {selectedBranch.phone ? (
              <p className="text-xl text-gray-800">
                phone:
                <a
                  href={`tel:${selectedBranch.phone}`}
                  className="text-blue-500 hover:underline"
                >
                  {selectedBranch.phone}
                </a>
              </p>
            ) : null}
            <p className="text-xl text-gray-800">
              email:{' '}
              <a
                href={`mailto:${selectedBranch.email}`}
                className="text-blue-500 hover:underline"
              >
                {selectedBranch.email}
              </a>
            </p>
            <div className="flex justify-center mt-1 md:hidden">
              {selectedBranch.linked ? (
                <a
                  href={selectedBranch.linkedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <Image
                      src={selectedBranch.linked}
                      alt={selectedBranch.linkedAltText}
                      priority={true}
                      width="24"
                      height="24"
                      sizes="100vw"
                      className="hover:scale-105 transition-all duration-200"
                    />
                  </div>
                </a>
              ) : null}
            </div>
          </div>

          <button className={styles.close_modal_btn} onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
