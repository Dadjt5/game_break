import { useLanguage } from "../context/useLanguage";

import CookiesES from "../legal/CookiesES";
import CookiesEN from "../legal/CookiesEN";

export default function Cookies() {
  const { language } = useLanguage();

  return language === "es"
    ? <CookiesES />
    : <CookiesEN />;
}