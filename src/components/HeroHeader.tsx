"use client";
import Link from "next/link";
import {
  Menu,
  X,
  Code,
  Layout,
  ShieldCheck,
  DollarSign,
  Smartphone,
  ShoppingCart,
  Gamepad,
  Cpu,
  Building,
  Users,
  History,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ContactButton from "./ContactButton";

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    megaMenu: [
      {
        section: "Company Information",
        items: [
          {
            name: "Company Profile",
            href: "https://drive.google.com/file/d/1mBue_t0h2qTd5SQ9t9P-0gGwjuR0JstQ/view",
            icon: <Building className="w-4 h-4 text-primary" />,
            description: "Learn about our mission, vision and values",
            external: true,
          },
          {
            name: "Our Team",
            href: "about/#team",
            icon: <Users className="w-4 h-4 text-primary" />,
            description: "Meet our talented professionals",
          },
          {
            name: "Company History",
            href: "about/#history",
            icon: <History className="w-4 h-4 text-primary" />,
            description: "Our journey and milestones",
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
    megaMenu: [
      {
        section: "Development Services",
        items: [
          {
            name: "Custom Software Development",
            href: "/services/custome-software-development",
            icon: <Code className="w-4 h-4 text-primary" />,
            description: "Tailored software solutions for your business",
          },
          {
            name: "Web Applications",
            href: "/services/web-application",
            icon: <Layout className="w-4 h-4 text-primary" />,
            description: "Modern web apps with cutting-edge technology",
          },
          {
            name: "Mobile App Development",
            href: "/services/mobile-app-development",
            icon: <Smartphone className="w-4 h-4 text-primary" />,
            description: "iOS and Android applications",
          },
          {
            name: "E-Commerce Solutions",
            href: "/services/e-commerce",
            icon: <ShoppingCart className="w-4 h-4 text-primary" />,
            description: "Complete online store development",
          },
        ],
      },
      {
        section: "Advanced Solutions",
        items: [
          {
            name: "Enterprise Software",
            href: "/services/enterprise-software",
            icon: <ShieldCheck className="w-4 h-4 text-primary" />,
            description: "Scalable enterprise-grade applications",
          },
          {
            name: "Game Development",
            href: "/services/game-development",
            icon: <Gamepad className="w-4 h-4 text-primary" />,
            description: "Interactive games and simulations",
          },
          {
            name: "Software Support",
            href: "/services/software-support",
            icon: <DollarSign className="w-4 h-4 text-primary" />,
            description: "Maintenance and technical support",
          },
          {
            name: "AI Solutions",
            href: "/services/ai-solution",
            icon: <Cpu className="w-4 h-4 text-primary" />,
            description: "Custom AI and machine learning solutions",
          },
        ],
      },
    ],
  },
  { name: "Product", href: "/product" },
  { name: "Industries", href: "/industries" },

  // { name: "Case Studies", href: "/case-study" },
  { name: "Clients", href: "/client" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(
    null
  );
  const [mobileDropdowns, setMobileDropdowns] = React.useState<
    Record<string, boolean>
  >({});
  const [isVisible, setIsVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const handleMegaMenuEnter = (itemName: string) => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      // lg breakpoint
      setActiveMegaMenu(itemName);
    }
  };

  const handleMegaMenuLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      // lg breakpoint
      setActiveMegaMenu(null);
    }
  };

  // Handle scroll behavior
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      // Always show header when at top of page
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        // Close mega menu when hiding header
        setActiveMegaMenu(null);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuState &&
        event.target instanceof Element &&
        !event.target.closest("nav")
      ) {
        setMenuState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuState]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuState]);

  // Close all mobile dropdowns when menu closes
  React.useEffect(() => {
    if (!menuState) {
      setMobileDropdowns({});
    }
  }, [menuState]);

  return (
    <header>
      <nav
        data-state={menuState ? "active" : "inactive"}
        className={cn(
          "fixed z-50 w-full bg-white backdrop-blur-xl border-b border-border/40 transition-transform duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="global-container md:px-4 transition-all duration-300">
          <div className="relative flex items-center justify-between lg:justify-center py-2 lg:py-6">
            {/* Logo - positioned absolutely on desktop for centering */}
            <div className="lg:absolute lg:left-0 flex items-center">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Image
                  src="/The-ICT-hub-logo.png"
                  alt="logo"
                  width={226}
                  height={122}
                  // fill={true}
                  // sizes="80px"
                  // style={{
                  //   width: "auto",
                  //   height: "10",
                  // }}
                  className="h-10 w-auto"
                  priority={true}
                />
              </Link>
            </div>

            {/* Desktop Menu - centered */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-8">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className={cn(
                      "relative group",
                      item.megaMenu && "hover-trigger"
                    )}
                    onMouseEnter={() => handleMegaMenuEnter(item.name)}
                    onMouseLeave={handleMegaMenuLeave}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 text-sm font-[16px] text-foreground/80 hover:text-foreground transition-colors duration-200",
                        item.megaMenu && "mega-menu-trigger"
                      )}
                    >
                      <span>{item.name}</span>
                      {item.megaMenu && (
                        <svg
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            activeMegaMenu === item.name
                              ? "rotate-180"
                              : "rotate-0"
                          )}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="m12 13.171 4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222z" />
                        </svg>
                      )}
                    </Link>

                    {/* Desktop Mega Menu */}
                    {item.megaMenu && activeMegaMenu === item.name && (
                      <div
                        className={cn(
                          "absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-background border border-border rounded-xl shadow-xl overflow-hidden z-[9999] mega-menu-dropdown",
                          item.name === "Services" ? "w-[700px]" : "w-[400px]"
                        )}
                        onMouseEnter={() => handleMegaMenuEnter(item.name)}
                        onMouseLeave={handleMegaMenuLeave}
                      >
                        <div className="p-6">
                          {item.name === "Services" ? (
                            // Two-column layout for Services
                            <div className="grid grid-cols-2 gap-8">
                              {item.megaMenu.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
                                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                                    {section.section}
                                  </h4>
                                  <div className="grid gap-3">
                                    {section.items.map((subItem, subIndex) => (
                                      <Link
                                        key={subIndex}
                                        href={subItem.href}
                                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                                      >
                                        <div className="mt-0.5 flex-shrink-0">
                                          {subItem.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                                            {subItem.name}
                                          </div>
                                          {subItem.description && (
                                            <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                              {subItem.description}
                                            </div>
                                          )}
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            // Single column layout for About and other menus
                            item.megaMenu.map((section, sectionIndex) => (
                              <div
                                key={sectionIndex}
                                className="mb-6 last:mb-0"
                              >
                                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                                  {section.section}
                                </h4>
                                <div className="grid gap-3">
                                  {section.items.map((subItem, subIndex) =>
                                    subItem.external ? (
                                      <a
                                        key={subIndex}
                                        href={subItem.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                                      >
                                        <div className="mt-0.5 flex-shrink-0">
                                          {subItem.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                                            {subItem.name}
                                          </div>
                                          {subItem.description && (
                                            <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                              {subItem.description}
                                            </div>
                                          )}
                                        </div>
                                      </a>
                                    ) : (
                                      <Link
                                        key={subIndex}
                                        href={subItem.href}
                                        className="group flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                                      >
                                        <div className="mt-0.5 flex-shrink-0">
                                          {subItem.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                                            {subItem.name}
                                          </div>
                                          {subItem.description && (
                                            <div className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                              {subItem.description}
                                            </div>
                                          )}
                                        </div>
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Button - positioned absolutely on desktop for centering */}
            <div className="hidden lg:block lg:absolute lg:right-0">
              <ContactButton href="/contact" text="Contact Us" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className="lg:hidden relative z-50 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="w-6 h-6 relative">
                <Menu
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    menuState
                      ? "rotate-180 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    menuState
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-180 scale-0 opacity-0"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {menuState && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setMenuState(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-2xl transition-transform duration-300 ease-in-out z-50 overflow-y-auto",
            menuState ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={() => setMenuState(false)}
              className="p-2 hover:bg-accent rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Content */}
          <div className="px-4 py-6 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="pb-2">
                {item.megaMenu ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(item.name)}
                      className="flex items-center justify-between w-full py-3 text-left text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          mobileDropdowns[item.name] ? "rotate-180" : "rotate-0"
                        )}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="m12 13.171 4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222z" />
                      </svg>
                    </button>

                    {/* Mobile Dropdown Content */}
                    <div
                      className={cn(
                        "transition-all duration-300 ease-in-out",
                        mobileDropdowns[item.name]
                          ? "max-h-[1000px] opacity-100 visible"
                          : "max-h-0 opacity-0 invisible overflow-hidden"
                      )}
                    >
                      <div className="pl-2 pt-2 pb-4 space-y-4">
                        {item.megaMenu.map((section, sectionIndex) => (
                          <div key={sectionIndex}>
                            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                              {section.section}
                            </h4>
                            <div className="space-y-1">
                              {section.items.map((subItem, subIndex) =>
                                subItem.external ? (
                                  <a
                                    key={subIndex}
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMenuState(false)}
                                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                                  >
                                    <div className="mt-0.5 flex-shrink-0">
                                      {subItem.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="text-sm font-medium text-foreground">
                                        {subItem.name}
                                      </div>
                                      {subItem.description && (
                                        <div className="text-xs text-muted-foreground mt-1">
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                  </a>
                                ) : (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    onClick={() => setMenuState(false)}
                                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors duration-200"
                                  >
                                    <div className="mt-0.5 flex-shrink-0">
                                      {subItem.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="text-sm font-medium text-foreground">
                                        {subItem.name}
                                      </div>
                                      {subItem.description && (
                                        <div className="text-xs text-muted-foreground mt-1">
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMenuState(false)}
                    className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Contact Us - Mobile Only - Using wrapper div instead of passing props to ContactButton */}
            <div className="pt-4 border-t border-border/20 mt-4">
              <div
                className="w-full flex justify-center"
                onClick={() => setMenuState(false)}
              >
                <ContactButton href="/contact" text="Contact Us" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add custom styles for better hover behavior */}
      <style jsx>{`
        .hover-trigger:hover .mega-menu-dropdown {
          display: block;
        }

        .mega-menu-dropdown {
          pointer-events: auto;
        }

        /* Add a small invisible bridge between menu item and dropdown */
        .hover-trigger::before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 16px;
          z-index: 9998;
        }
      `}</style>
    </header>
  );
};
