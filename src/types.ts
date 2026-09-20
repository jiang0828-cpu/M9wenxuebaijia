export type Work = { title: string; originalTitle?: string; year?: string; note: string }
export type TimelineEvent = { year: string; title: string; description: string }
export type Author = { id: string; name: string; originalName: string; country: string; countryCode: string; era: string; birthYear: number; deathYear?: number; portrait: string; portraitUrl?: string; sourceUrl?: string; shortBio: string; lifeStory: string; works: Work[]; influence: string; value: string; genres: string[]; timeline: TimelineEvent[]; relatedAuthors: string[]; influenceLevel: 1|2|3|4|5 }
export type Country = { id: string; name: string; englishName: string; description: string; color: string }
