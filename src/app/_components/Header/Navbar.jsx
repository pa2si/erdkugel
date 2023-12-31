'use client';

import { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social, email } from './data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [hidden, setHidden] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const { useScroll, useMotionValueEvent } = require('framer-motion');
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const [isLogoOpacityTarget, setIsLogoOpacityTarget] = useState(true);

  useEffect(() => {
    // Function to be called whenever the target meets a threshold of visibility
    const handleLogoOpacityTargetInView = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          /*           console.log('target is in view'); */
          setIsLogoOpacityTarget(true);
        } else {
          /*           console.log('target has left the view'); */
          setIsLogoOpacityTarget(false);
        }
      });
    };

    // Options for the intersection observer
    const options = {
      root: null, // relative to document viewport
      rootMargin: '0px', // margin around root
      threshold: 0.5, // visible amount of item shown in relation to root
    };

    // Create an observer
    const logoOpacityTargetObserver = new IntersectionObserver(
      handleLogoOpacityTargetInView,
      options
    );

    // Target the logoOpacityTarget element
    const logoOpacityTarget = document.getElementById('logoOpacityTarget');

    if (logoOpacityTarget) {
      logoOpacityTargetObserver.observe(logoOpacityTarget);
    }

    // Clean up the observer on unmount
    return () => {
      if (logoOpacityTarget) {
        logoOpacityTargetObserver.unobserve(logoOpacityTarget);
      }
    };
  }, [pathname]);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 5) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className={styles.navbar}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div className={styles.nav_center}>
        <section className={styles.nav__header}>
          <div style={{ height: 'auto', width: '8.5rem' }}>
            <Link href="/">
              <Image
                href={'/'}
                src="/logos/erdkugel-logo-w-text-side-by-side.webp"
                alt="erdkugel logo text"
                priority={true}
                width="0"
                height="0"
                sizes="100vw"
                className="h-full w-full object-cover"
                style={{
                  opacity: isLogoOpacityTarget ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                }}
              />
            </Link>
          </div>

          <button className={styles.nav__toggle} onClick={toggleLinks}>
            <FaBars />
          </button>
        </section>

        <motion.section
          className={styles.links__container}
          ref={linksContainerRef}
          style={linkStyles}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <ul
            className={`${styles.links} ${styles.menu__links}`}
            ref={linksRef}
          >
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link
                    className={pathname === url ? '!text-yellow-300 ' : ''}
                    href={`/${url}`}
                    onClick={toggleLinks}
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul>
            {email.map((item) => {
              const { id, email, icon } = item;
              return (
                <li
                  key={id}
                  className={`${styles.mailIcon} text-white mt-0 pb-1 hover:scale-110 transition-all duration-300`}
                >
                  <a
                    href={`mailto:${email}`}
                    className="hover:text-erdkugel-yellow "
                  >
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className={styles.social__icons}>
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={styles.iconWrapper}>
                      <Image
                        src={icon}
                        alt="LinkedIn Icon"
                        width={20}
                        height={20}
                      />
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.section>
      </div>
    </motion.nav>
  );
};

export default Navbar;
