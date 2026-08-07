export const siteConfig = {
  contactEmail: "info@soulshinesarah.com",
  contactPhone: "+41 76 322 60 82",
  domain: "www.soulwayo.com",
  instagramUrl: "https://www.instagram.com/soulwayo",
};

export function mailtoHref(subject: string) {
  return `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}`;
}
