"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Layout,
  ShoppingCart,
  PenTool,
  Megaphone,
  Target,
  Search,
  Share2,
  FileText,
  Mail,
  Building,
  History,
} from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ContactButton from "./ContactButton";

interface SubMenuItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  external?: boolean;
}

interface MegaMenuSection {
  section: string;
  items: SubMenuItem[];
}

interface MenuItem {
  name: string;
  href: string;
  megaMenu?: MegaMenuSection[];
}

const menuItems: MenuItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    megaMenu: [
      {
        section: "Digital Services",
        items: [
          {
            name: "Branding & Design",
            href: "/services/branding-and-design",
            icon: <PenTool className="w-4 h-4 text-primary" />,
            description: "Build a strong brand identity",
          },
          {
            name: "Meta Ads Marketing",
            href: "/services/meta-ads",
            icon: <Megaphone className="w-4 h-4 text-primary" />,
            description: "Reach your audience on Facebook & Instagram",
          },
          {
            name: "Google Ads Marketing",
            href: "/services/google-ads",
            icon: <Target className="w-4 h-4 text-primary" />,
            description: "Drive targeted traffic with Google Ads",
          },
          {
            name: "Website Design & Development",
            href: "/services/web-development",
            icon: <Layout className="w-4 h-4 text-primary" />,
            description: "Modern websites tailored to your needs",
          }

        ],
      },
      {
        section: "Marketing Solutions",
        items: [
          {
            name: "Search Engine Optimization",
            href: "/services/seo",
            icon: <Search className="w-4 h-4 text-primary" />,
            description: "Improve your organic search rankings",
          },
          {
            name: "Social Media Marketing",
            href: "/services/social-media-marketing",
            icon: <Share2 className="w-4 h-4 text-primary" />,
            description: "Engage and grow your social following",
          },
          {
            name: "Content Marketing",
            href: "/services/content-marketing",
            icon: <FileText className="w-4 h-4 text-primary" />,
            description: "Valuable content to attract customers",
          },
          {
            name: "Paid Advertising",
            href: "/services/paid-ads",
            icon: <ShoppingCart className="w-4 h-4 text-primary" />,
            description: "Drive targeted traffic with Paid Ads",
          },

        ],
      },
    ],
  },
  { name: "Our Works", href: "/works" },
  { name: "Blog", href: "/blog" },
];

export const HeroHeader = () => {
  const pathname = usePathname();
  const [menuState, setMenuState] = React.useState(false);
  const isHomePage = pathname === "/";
  const [activeMegaMenu, setActiveMegaMenu] = React.useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = React.useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = React.useState(true);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const toggleMobileDropdown = (itemName: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const handleMegaMenuEnter = (itemName: string) => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setActiveMegaMenu(itemName);
    }
  };

  const handleMegaMenuLeave = () => {
    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
      setActiveMegaMenu(null);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const scrollPercent = (currentScrollY / docHeight) * 100;
      const hideThreshold = isHomePage ? scrollPercent > 10 : currentScrollY > 100;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && hideThreshold) {
        setIsVisible(false);
        setActiveMegaMenu(null);
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHomePage]);

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
          "fixed z-50 w-full duration-300 ease-in-out",
          isVisible ? "translate-y-0" : "-translate-y-full",
          isHomePage && !isScrolled
            ? "bg-transparent"
            : "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
        )}
      >
        <div className="global-container md:px-4 transition-all duration-300">
          <div className="relative flex items-center justify-between lg:justify-center py-4 lg:py-6">
            <div className="lg:absolute lg:left-0 flex items-center">
              <Link href="/" aria-label="home" className="flex items-center space-x-2">
                <Image
                  src={isHomePage && !isScrolled ? "/mhsocialmedia_white.png" : "/Mhsocialmedia.jpg"}
                  alt="logo"
                  width={226}
                  height={122}
                  className="h-9 md:h-14 w-auto transition-all duration-300"
                  priority={true}
                />
              </Link>
            </div>

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
                        "flex items-center gap-1 font-[16px] transition-colors duration-200",
                        isHomePage && !isScrolled
                          ? "text-white/80 hover:text-white"
                          : "text-pallet-2 hover:text-foreground",
                        item.megaMenu && "mega-menu-trigger"
                      )}
                    >
                      <span>{item.name}</span>
                      {item.megaMenu && (
                        <svg
                          className={cn(
                            "w-4 h-4 transition-transform duration-200",
                            activeMegaMenu === item.name ? "rotate-180" : "rotate-0"
                          )}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="m12 13.171 4.95-4.95 1.414 1.415L12 16 5.636 9.636 7.05 8.222z" />
                        </svg>
                      )}
                    </Link>

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
                            <div className="grid grid-cols-2 gap-8">
                              {item.megaMenu.map((section, sectionIndex) => (
                                <div key={sectionIndex}>
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
                            item.megaMenu.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="mb-6 last:mb-0">
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

            <div className="hidden lg:block lg:absolute lg:right-0">
              <ContactButton href="/contact" text="Contact Us" />
            </div>

            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? "Close Menu" : "Open Menu"}
              className={cn(
                "lg:hidden relative z-50 p-2 focus:outline-none focus:ring-2 focus:ring-primary",
                isHomePage && !isScrolled ? "text-white" : "text-foreground"
              )}
            >
              <div className="w-6 h-6 relative">
                <Menu
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    menuState ? "rotate-180 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute inset-0 transition-all duration-300",
                    menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {menuState && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setMenuState(false)}
          />
        )}

        <div
          className={cn(
            "lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-2xl transition-transform duration-300 ease-in-out z-50 overflow-y-auto",
            menuState ? "translate-x-0" : "translate-x-full"
          )}
        >
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

      <style jsx>{`
        .hover-trigger:hover .mega-menu-dropdown {
          display: block;
        }

        .mega-menu-dropdown {
          pointer-events: auto;
        }

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