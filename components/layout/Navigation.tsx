"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
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
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-accent hover:bg-accent/5 ${
          isActive ? "text-accent font-semibold" : "text-primary"
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
              className="block px-4 py-2.5 text-sm text-text-body hover:bg-bg-cream hover:text-accent transition-colors"
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto">
        {/* Close button */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="font-serif text-lg font-bold text-primary">
            ICAIES³
          </span>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="p-4">
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
                        ? "text-accent bg-accent/5"
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

                  {isExpanded && (
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
                              ? "text-accent font-semibold bg-accent/5"
                              : "text-text-body hover:text-accent hover:bg-bg-cream"
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
                  )}
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
                    ? "text-accent font-semibold bg-accent/5"
                    : "text-primary hover:bg-bg-cream hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isItemActive = (item: NavItem): boolean => {
    if (item.href && pathname === item.href) return true;
    if (item.children) {
      return item.children.some((child) => child.href === pathname);
    }
    return false;
  };

  return (
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
                  className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:text-accent hover:bg-accent/5 ${
                    active
                      ? "text-accent font-semibold"
                      : "text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <span className="font-serif text-lg font-bold text-primary">
              ICAIES³ 2026
            </span>
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5 text-primary" />
            </button>
          </div>
        </div>
      </div>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
