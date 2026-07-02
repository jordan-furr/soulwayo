export const siteConfig = {
  contactEmail: "info@soulshinesarah.com",
  domain: "www.soulwayo.com",
};

export function mailtoHref(subject: string) {
  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}`;
}
