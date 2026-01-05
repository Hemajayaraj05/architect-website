import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  url?: string;
};

const SEO = ({ title, description, url }: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Description
    let descTag = document.querySelector(
      "meta[name='description']"
    ) as HTMLMetaElement | null;

    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.name = "description";
      document.head.appendChild(descTag);
    }
    descTag.content = description;

    // Open Graph
    const setMeta = (property: string, content: string) => {
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

    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:type", "website");

    if (url) {
      setMeta("og:url", url);
    }

    // Twitter
    const setTwitter = (name: string, content: string) => {
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

    setTwitter("twitter:card", "summary_large_image");
    setTwitter("twitter:title", title);
    setTwitter("twitter:description", description);
  }, [title, description, url]);

  return null;
};

export default SEO;
