import { useState } from "react";
import { Menu, X, Search, ZoomIn, ZoomOut, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "@/contexts/AuthContext";
import { LanguageSelector } from "./LanguageSelector";

const Header = () => {
  const { t } = useTranslation();
  const { isLoading, logout, user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        e.preventDefault();
        navigate("/" + href);
      }
      // If we are already on "/", the default anchor behavior will work
    }
  };

  const adjustFont = (delta: number) => {
    const next = Math.min(24, Math.max(12, fontSize + delta));
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}px`;
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("dark");
  };

  const userLabel = user?.name.split(" ")[0] || "Account";

  const renderAuthActions = (mobile = false) => {
    if (isLoading) {
      return (
        <button
          className={`gradient-saffron text-accent-foreground px-4 py-2 rounded-md text-sm font-semibold ${
            mobile ? "mt-2 w-full" : ""
          } opacity-80`}
          disabled
        >
          Loading...
        </button>
      );
    }

    if (user) {
      return (
        <div className={`flex items-center gap-2 ${mobile ? "flex-col items-stretch" : ""}`}>
          <span className="text-sm font-medium text-foreground">{userLabel}</span>
          <button
            className={`rounded-md border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 ${
              mobile ? "w-full" : ""
            }`}
            onClick={() => {
              setMobileOpen(false);
              void logout();
            }}
            type="button"
          >
            Logout
          </button>
        </div>
      );
    }

    return (
      <button
        className={`gradient-saffron text-accent-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition-opacity ${
          mobile ? "mt-2 w-full" : ""
        }`}
        onClick={() => {
          setMobileOpen(false);
          navigate("/login");
        }}
        type="button"
      >
        Login / Register
      </button>
    );
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Tricolor bar */}
      <div className="tricolor-bar" />

      {/* Accessibility toolbar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-1 text-xs">
          <span className="hidden sm:inline font-medium">
            भारत सरकार | Government of India
          </span>
          <div className="flex items-center gap-3">
            <button onClick={() => adjustFont(2)} className="flex items-center gap-1 hover:text-accent transition-colors" aria-label="Increase text size">
              <ZoomIn className="w-3.5 h-3.5" /> A+
            </button>
            <button onClick={() => adjustFont(-2)} className="flex items-center gap-1 hover:text-accent transition-colors" aria-label="Decrease text size">
              <ZoomOut className="w-3.5 h-3.5" /> A-
            </button>
            <button onClick={toggleContrast} className="flex items-center gap-1 hover:text-accent transition-colors" aria-label="Toggle high contrast">
              <Eye className="w-3.5 h-3.5" /> {highContrast ? "Normal" : "High Contrast"}
            </button>
            <div className="relative">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card shadow-card">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🇮🇳</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary leading-tight">Samaj Seva AI</h1>
              <p className="text-xs text-muted-foreground">AI-Enabled Access & Completion Platform</p>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              {t('header.services')}
            </a>
            <a href="#impact" onClick={(e) => handleNavClick(e, "#impact")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              {t('header.impact')}
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              {t('header.contact')}
            </a>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              {t("header.about")}
            </a>
            {renderAuthActions()}
          </div>

          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-card animate-slide-down">
            <div className="container py-3 flex flex-col gap-2">
              <a href="#home" onClick={(e) => { setMobileOpen(false); handleNavClick(e, "#home"); }} className="py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="#services" onClick={(e) => { setMobileOpen(false); handleNavClick(e, "#services"); }} className="py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
                {t('header.services')}
              </a>
              <a href="#impact" onClick={(e) => { setMobileOpen(false); handleNavClick(e, "#impact"); }} className="py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
                {t('header.impact')}
              </a>
              <a href="#contact" onClick={(e) => { setMobileOpen(false); handleNavClick(e, "#contact"); }} className="py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
                {t('header.contact')}
              </a>
              <a href="#about" onClick={(e) => { setMobileOpen(false); handleNavClick(e, "#about"); }} className="py-2 text-sm font-medium text-foreground hover:text-accent transition-colors">
                {t("header.about")}
              </a>
              {renderAuthActions(true)}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
