"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, X } from "lucide-react";
import { navigation, type NavItem } from "@/content/navigation";

function NavDropdown({
  item,
  isActive,
}: {
  item: NavItem;
  isActive: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-accent-contrast hover:bg-accent/5 ${
          isActive ? "text-accent-contrast font-semibold" : "text-primary"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {item.children?.map((child) => (
            <Link
              key={child.href}
              href={child.href || "#"}
              target={child.external ? "_blank" : undefined}
              rel={child.external ? "noopener noreferrer" : undefined}
              className="block px-4 py-2.5 text-sm text-text-body hover:bg-bg-cream hover:text-accent-contrast transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {child.label}
              {child.external && (
                <span className="text-xs text-text-muted ml-1">↗</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto transition-transform duration-300 ease-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-bg-cream/50">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/logos/amity-logo.png"
                alt="Amity"
                fill
                className="object-contain"
                sizes="32px"
              />
            </div>
            <span className="font-serif text-lg font-bold text-primary">
              ICAIES³
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="p-4" aria-label="Mobile navigation">
          {navigation.map((item) => {
            if (item.children) {
              const isExpanded = expandedItems.includes(item.label);
              const isChildActive = item.children.some(
                (c) => c.href === pathname
              );

              return (
                <div key={item.label} className="mb-1">
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isChildActive
                        ? "text-accent-contrast bg-accent/5"
                        : "text-primary hover:bg-bg-cream"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ease-out ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="ml-4 mt-1 border-l-2 border-accent/20 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href || "#"}
                          target={child.external ? "_blank" : undefined}
                          rel={
                            child.external ? "noopener noreferrer" : undefined
                          }
                          onClick={onClose}
                          className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                            pathname === child.href
                              ? "text-accent-contrast font-semibold bg-accent/5"
                              : "text-text-body hover:text-accent-contrast hover:bg-bg-cream"
                          }`}
                        >
                          {child.label}
                          {child.external && (
                            <span className="text-xs text-text-muted ml-1">
                              ↗
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href || "#"}
                onClick={onClose}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors mb-1 ${
                  pathname === item.href
                    ? "text-accent-contrast font-semibold bg-accent/5"
                    : "text-primary hover:bg-bg-cream hover:text-accent-contrast"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t border-gray-100 mt-auto">
          <Link
            href="https://cmt3.research.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-gradient w-full text-center text-sm justify-center"
          >
            Submit Paper ↗
          </Link>
        </div>
      </div>
    </>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isItemActive = (item: NavItem): boolean => {
    if (item.href && pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => child.href === pathname);
    }
    return false;
  };

  return (
    <>
      <nav
        className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
        id="main-navigation"
        aria-label="Main navigation"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="flex items-center justify-center h-14">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const active = isItemActive(item);

              if (item.children) {
                return (
                  <NavDropdown
                    key={item.label}
                    item={item}
                    isActive={active}
                  />
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href || "#"}
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-accent-contrast hover:bg-accent/5 ${
                    active
                      ? "text-accent-contrast font-semibold"
                      : "text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Header */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7">
                <Image
                  src="/logos/amity-logo.png"
                  alt="Amity"
                  fill
                  className="object-contain"
                  sizes="28px"
                />
              </div>
              <span className="font-serif text-lg font-bold text-primary">
                ICAIES³
              </span>
            </div>

            {/* Hamburger Button — Premium animated style */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-primary text-white shadow-md hover:shadow-lg active:scale-95 transition-all duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-[2px] w-full bg-white rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-white rounded-full transition-all duration-200 ${
                    mobileOpen ? "opacity-0 scale-x-0" : ""
                  }`}
                />
                <span
                  className={`block h-[2px] w-full bg-white rounded-full transition-all duration-300 origin-center ${
                    mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      </nav>

      <MobileNav isOpen={mobileOpen} onClose={closeMobile} />
    </>
  );
}
