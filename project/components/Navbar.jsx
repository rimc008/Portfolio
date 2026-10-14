
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, ArrowUpRight } from "lucide-react";
import { navLinks, personal } from "@/lib/portfolio.config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);

    const el = document.querySelector(href);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - 85;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "pt-2 sm:pt-3" : "pt-0"
      }`}
    >
      <nav
        className={`relative flex w-[100vw] items-center justify-between md:justify-evenly px-5 py-3.5 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "rounded-2xl border border-[#3E2723]/15 bg-[#F5E8D8]/90 shadow-[0_8px_35px_rgba(62,39,35,0.12)] backdrop-blur-2xl"
            : "border-b border-white/10 bg-[#6F4E37] shadow-md"
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span
            className={`relative grid h-9 w-9 place-items-center rounded-xl transition-all duration-300 group-hover:rotate-[-6deg] group-hover:scale-105 ${
              scrolled
                ? "bg-[#6F4E37] text-[#F5E8D8]"
                : "bg-white/15 text-white ring-1 ring-white/20"
            }`}
          >
            <Code2 className="h-[19px] w-[19px] animate-pulse" />
            <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-[#6F4E37] bg-[#D2B48C]" />
          </span>

          <span
            className={`font-serif text-lg font-bold tracking-tight transition-colors sm:text-xl ${
              scrolled ? "text-[#3E2723]" : "text-white"
            }`}
          >
            {personal.name}
            <span className="text-[#C49A6C]">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href.replace("#", "");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative block rounded-xl px-3.5 py-2.5 text-[13px] font-semibold transition-all duration-300 ${
                    scrolled
                      ? isActive
                        ? "bg-[#3E2723]/8 text-[#3E2723]"
                        : "text-[#3E2723]/70 hover:bg-[#3E2723]/5 hover:text-[#3E2723]"
                      : isActive
                        ? "bg-white/15 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full transition-all duration-300 ${
                      isActive
                        ? `w-4 ${
                            scrolled ? "bg-[#805A40]" : "bg-[#D2B48C]"
                          }`
                        : "w-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop contact shortcut */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className={`hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 md:flex ${
            scrolled
              ? "bg-[#6F4E37] text-[#F5E8D8] shadow-sm hover:bg-[#65432F]"
              : "bg-[#F5E8D8] text-[#3E2723] hover:bg-white"
          }`}
        >
          Let's talk
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className={`grid h-10 w-10 place-items-center rounded-xl transition-all duration-300 md:hidden ${
            scrolled
              ? "bg-[#3E2723]/5 text-[#3E2723] hover:bg-[#3E2723]/10"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span className="transition-transform duration-300">
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </span>
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`absolute inset-x-3 top-full mt-2 overflow-hidden rounded-2xl border border-[#3E2723]/15 bg-[#F5E8D8]/[0.97] shadow-[0_20px_60px_rgba(62,39,35,0.2)] backdrop-blur-2xl transition-all duration-300 md:hidden ${
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="border-b border-[#3E2723]/10 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#805A40]">
            Navigate
          </p>
          <p className="mt-1 font-serif text-lg font-semibold text-[#3E2723]">
            Explore my portfolio
          </p>
        </div>

        <ul className="space-y-1 p-3">
          {navLinks.map((link, index) => {
            const isActive =
              activeSection === link.href.replace("#", "");

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  tabIndex={mobileOpen ? 0 : -1}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
                    isActive
                      ? "bg-[#3E2723] text-[#F5E8D8] shadow-sm"
                      : "text-[#3E2723]/80 hover:bg-[#3E2723]/5 hover:text-[#3E2723]"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-5 text-[10px] font-bold ${
                        isActive ? "text-[#D2B48C]" : "text-[#805A40]/60"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold">
                      {link.label}
                    </span>
                  </span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D2B48C]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="px-3 pb-3">
          <a
            href="#contact"
            tabIndex={mobileOpen ? 0 : -1}
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#65432F] px-4 py-3 text-sm font-semibold text-[#F5E8D8] transition-colors hover:bg-[#3E2723]"
          >
            Let's work together
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}