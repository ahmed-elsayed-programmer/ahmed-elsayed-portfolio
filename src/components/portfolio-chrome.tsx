"use client";

import { useState } from "react";
import { ArrowUpRight, Download, Languages, Layers3, Menu, X } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { getPortfolioCopy, type Locale } from "@/lib/i18n";

const emailUrl = "mailto:ahmedelsayed3157@gmail.com";
const githubUrl = "https://github.com/ahmed-elsayed-programmer";
const linkedinUrl = "https://www.linkedin.com/in/ahmed-elsayed-developer";
type NavigationCopy = ReturnType<typeof getPortfolioCopy>["navigation"];

function NavigationLinks({ copy, menuOpen, closeMenu }: { copy: NavigationCopy; menuOpen: boolean; closeMenu: () => void }) {
  return (
    <div className="nav-links" id="portfolio-nav-links" data-open={menuOpen}>
      {copy.links.map(([label, href]) => (
        <a href={href} onClick={closeMenu} key={href}>{label}</a>
      ))}
    </div>
  );
}

function NavigationMenuButton({ copy, menuOpen, toggleMenu }: { copy: NavigationCopy; menuOpen: boolean; toggleMenu: () => void }) {
  return (
    <button
      className="nav-menu-button"
      type="button"
      aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
      aria-controls="portfolio-nav-links"
      aria-expanded={menuOpen}
      onClick={toggleMenu}
    >
      {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
    </button>
  );
}

function NavigationActions({ copy, locale, menuOpen, toggleMenu }: { copy: NavigationCopy; locale: Locale; menuOpen: boolean; toggleMenu: () => void }) {
  const alternateLocale = locale === "en" ? "ar" : "en";

  const selectAlternateLanguage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.cookie = `portfolio-locale=${alternateLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.assign(`/${alternateLocale}${window.location.hash}`);
  };

  return (
    <div className="nav-actions">
      <a
        className="language-switch"
        href={`/${alternateLocale}`}
        hrefLang={alternateLocale}
        lang={alternateLocale}
        aria-label={copy.switchLanguage}
        title={copy.switchLanguage}
        onClick={selectAlternateLanguage}
      >
        <Languages aria-hidden="true" />
        <span>{copy.alternateLanguage}</span>
      </a>
      <ThemeToggle lightLabel={copy.switchToLightTheme} darkLabel={copy.switchToDarkTheme} />
      <Button asChild className="nav-cta">
        <a href={emailUrl}>{copy.talk} <ArrowUpRight aria-hidden="true" /></a>
      </Button>
      <NavigationMenuButton copy={copy} menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

function PortfolioNavigation({ locale }: { locale: Locale }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = getPortfolioCopy(locale).navigation;
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <nav className="portfolio-nav" aria-label={copy.ariaLabel}>
      <a className="nav-brand" href="#home" onClick={closeMenu}>
        <span className="nav-logo" aria-hidden="true">AE</span>
        <span>{getPortfolioCopy(locale).name}</span>
      </a>
      <NavigationLinks copy={copy} menuOpen={menuOpen} closeMenu={closeMenu} />
      <NavigationActions copy={copy} locale={locale} menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}

function ToolRail({ locale }: { locale: Locale }) {
  const copy = getPortfolioCopy(locale).navigation;
  return (
    <aside className="tool-rail" aria-label={copy.linksAriaLabel}>
      <a href="#home" aria-label={copy.home}><Layers3 aria-hidden="true" /></a>
      <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><BsGithub aria-hidden="true" /></a>
      <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin aria-hidden="true" /></a>
      <a href="/CV.pdf" download aria-label={copy.downloadCv}><Download aria-hidden="true" /></a>
    </aside>
  );
}

export default function PortfolioChrome({ locale }: { locale: Locale }) {
  return (
    <>
      <PortfolioNavigation locale={locale} />
      <ToolRail locale={locale} />
    </>
  );
}
