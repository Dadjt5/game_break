import { useLanguage } from "../context/useLanguage";

import PrivacyES from "../legal/PrivacyES";
import PrivacyEN from "../legal/PrivacyEN";

export default function Privacy() {
  const { language } = useLanguage();

  return language === "es"
    ? <PrivacyES />
    : <PrivacyEN />;
}