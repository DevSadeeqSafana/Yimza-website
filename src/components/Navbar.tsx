"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className="container">
        <nav className={styles.nav}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <Image src="/logo.jpeg" alt="Yimza Consult Logo" width={44} height={44} className={styles.logoImg} />
            <div className={styles.logoText}>
              <span className={styles.logoName}>Yimza</span>
              <span className={styles.logoSub}>Consult</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "11px 24px", fontSize: "14px" }}>
              Get Started <ChevronRight size={16} />
            </Link>
            <button
              className={styles.menuBtn}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.mobileLink} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setIsOpen(false)}>
              Get Started <ChevronRight size={16} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
