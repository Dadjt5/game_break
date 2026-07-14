import { useLanguage } from "../context/useLanguage";

import LegalES from "../legal/LegalES";
import LegalEN from "../legal/LegalEN";

export default function Legal() {
  const { language } = useLanguage();

  return language === "es"
    ? <LegalES />
    : <LegalEN />;
}