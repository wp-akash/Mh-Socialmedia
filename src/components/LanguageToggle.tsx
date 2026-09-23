"use client";

import { useEffect, useState } from "react";

type Language = "en" | "ar";

function getStoredLanguage(): Language {
  const match = document.cookie.match(/googtrans=\/en\/(\w+)/);
  return match && match[1] === "ar" ? "ar" : "en";
}

function setTranslateCookie(lang: Language) {
  const value = lang === "ar" ? "/en/ar" : "";
  document.cookie = `googtrans=${value}; path=/`;
  document.cookie = `googtrans=${value}; path=/; domain=${window.location.hostname}`;
  document.cookie = `googtrans=${value}; path=/; domain=.${window.location.hostname}`;
}

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    setLanguage(getStoredLanguage());

    if (!document.getElementById("gt-custom-styles")) {
      const style = document.createElement("style");
      style.id = "gt-custom-styles";
      style.textContent = `
        .goog-te-banner-frame { display: none !important; }
        #goog-gt-tt, .goog-te-balloon-frame { display: none !important; }
        .goog-te-gadget { display: none !important; }
        .skiptranslate { display: none !important; }
        body { top: 0 !important; position: static !important; }
      `;
      document.head.appendChild(style);
    }

    if (!document.getElementById("google-translate-script")) {
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "ar",
            autoDisplay: true,
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.head.appendChild(script);
    }
  }, []);

  const switchTo = (lang: Language) => {
    if (lang === language) return;
    setTranslateCookie(lang);
    window.location.reload();
  };

  return (
    <>
      {/* Hidden container for Google Translate */}
      <div
        id="google_translate_element"
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          width: 0,
          height: 0,
        }}
      />

      {/* Fixed vertical toggle — right edge */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[9999] rotate-180 [writing-mode:vertical-lr]">
        <div className="flex items-stretch rounded-full bg-black/90 shadow-2xl border border-white/10 overflow-hidden">
          {/* EN button */}
          <button
            onClick={() => switchTo("en")}
            aria-label="Switch to English"
            className={`relative flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold cursor-pointer
                        transition-all duration-300 ease-in-out
                        ${language === "en"
                ? "bg-[#117C75] text-white"
                : "bg-transparent text-white/40 hover:text-white/70 hover:bg-white/5"
              }`}
          >
            {/* Active dot */}
            {language === "en" && (
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            )}
            EN
          </button>

          {/* Divider */}
          <span className="w-px bg-white/10" />

          {/* AR button */}
          <button
            onClick={() => switchTo("ar")}
            aria-label="Switch to Arabic"
            className={`relative flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold text-white cursor-pointer
                        transition-all duration-300 ease-in-out
                        ${language === "ar"
                ? "bg-[#117C75] text-white"
                : "bg-transparent text-white/90 hover:text-white/70 hover:bg-white/5"
              }`}
          >
            {/* Active dot */}
            {language === "ar" && (
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            )}
            AR
          </button>
        </div>
      </div>
    </>
  );
}
