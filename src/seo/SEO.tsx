import { useEffect } from "react";
import { BRAND_NAME, DEFAULT_KEYWORDS, SITE_URL } from "./siteConfig";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const SEO = ({
  title,
  description,
  url,
  image,
  keywords,
  noIndex = false,
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    const absoluteUrl = url || SITE_URL;
    const normalizedImage = image || `${SITE_URL}/og-image.jpg`;
    const mergedKeywords = [...DEFAULT_KEYWORDS, ...(keywords || [])].join(", ");

    document.title = `${title} | ${BRAND_NAME}`;

    let descTag = document.querySelector(
      "meta[name='description']"
    ) as HTMLMetaElement | null;

    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }
    descTag.content = description;

    const setMetaByName = (name: string, content: string) => {
      let tag = document.querySelector(
        `meta[name='${name}']`
      ) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement("meta");
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    const setMetaByProperty = (property: string, content: string) => {
      let tag = document.querySelector(
        `meta[property='${property}']`
      ) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    setMetaByName("keywords", mergedKeywords);
    setMetaByName("robots", noIndex ? "noindex, nofollow" : "index, follow");
    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", normalizedImage);

    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:url", absoluteUrl);
    setMetaByProperty("og:image", normalizedImage);
    setMetaByProperty("og:site_name", BRAND_NAME);
    setMetaByProperty("og:locale", "en_IN");

    let canonicalTag = document.querySelector(
      "link[rel='canonical']"
    ) as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.rel = "canonical";
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = absoluteUrl;

    const schemaTagId = "seo-structured-data";
    const existingSchemaTag = document.getElementById(schemaTagId);

    if (structuredData) {
      const payload = Array.isArray(structuredData)
        ? { "@context": "https://schema.org", "@graph": structuredData }
        : structuredData;

      const script = existingSchemaTag || document.createElement("script");
      script.id = schemaTagId;
      script.setAttribute("type", "application/ld+json");
      script.textContent = JSON.stringify(payload);

      if (!existingSchemaTag) {
        document.head.appendChild(script);
      }
    } else if (existingSchemaTag) {
      existingSchemaTag.remove();
    }
  }, [title, description, url, image, keywords, noIndex, structuredData]);

  return null;
};

export default SEO;
