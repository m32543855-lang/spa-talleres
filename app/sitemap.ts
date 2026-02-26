import type { MetadataRoute } from "next"

const siteUrl = "https://spatalleres.netlify.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/privacidad`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]
}
