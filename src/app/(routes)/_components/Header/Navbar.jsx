'use client';

import { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useGlobalContext } from '@/utils/context';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [hidden, setHidden] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const { useScroll, useMotionValueEvent } = require('framer-motion');
  const { scrollY } = useScroll();

  const pathname = usePathname();

  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    // Function to be called whenever the target meets a threshold of visibility
    const handleHeroInView = (entries, observer) => {
      entries.forEach((entry) => {
        // If the hero element is in view
        setIsHeroInView(entry.isIntersecting);
      });
    };

    // Options for the intersection observer
    const options = {
      root: null, // relative to document viewport
      rootMargin: '0px', // margin around root. Values are similar to css property. Unitless values not allowed
      threshold: 0.5, // visible amount of item shown in relation to root
    };

    // Create an observer
    const observer = new IntersectionObserver(handleHeroInView, options);
    // Target element to watch
    const transNav = document.getElementById('transNav');

    if (transNav) {
      observer.observe(transNav);
    }

    // Clean up the observer on unmount
    return () => {
      if (transNav) {
        observer.unobserve(transNav);
      }
    };
  }, [pathname]);

  const transparentNavBg = isHeroInView;
  const shouldHideLogo = isHeroInView;

  const navbarClassNames = [
    styles.navbar,
    hidden && styles.hidden,
    transparentNavBg ? '' : styles.NavBg,
  ]
    .filter(Boolean)
    .join(' ');

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
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      className={navbarClassNames}
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      <div className={styles.nav_center}>
        <section className={styles.nav__header}>
          <div>
            <Link href="/">
              <Image
                href={'/'}
                src="/logos/erdkugel-logo-text.webp"
                alt="logo"
                priority={true}
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  width: '110px',
                  height: 'auto',
                  opacity: isHeroInView ? 0 : 1,
                  transition: 'opacity 0.3s ease',
                }}
                className={`mt-0 sm:mt-1 ml-1 sm:ml-2 md:ml-4 ${
                  shouldHideLogo ? styles.hiddenLogo : ''
                }`}
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
                    href={url}
                    onClick={toggleLinks}
                  >
                    {text}
                  </Link>
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
