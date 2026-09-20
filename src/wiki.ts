export type WikiProfile = { title: string; extract?: string; description?: string; image?: string; page?: string }

export async function searchPublicProfile(name: string, originalName?: string): Promise<WikiProfile | null> {
  const candidates = [name, originalName].filter(Boolean) as string[]
  for (const candidate of candidates) {
    try {
      const response = await fetch(`https://zh.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(candidate.replace(/ /g, '_'))}`)
      if (!response.ok) continue
      const data = await response.json()
      if (data.type === 'disambiguation' || (!data.extract && !data.thumbnail?.source)) continue
      return { title: data.title || candidate, extract: data.extract, description: data.description, image: data.thumbnail?.source, page: data.content_urls?.desktop?.page }
    } catch { /* local content remains available when external search is unavailable */ }
  }
  return null
}
