import slugify from 'slugify'

export const generateSlug = (courseName, city) => {
  const courseSlug = slugify(courseName, { lower: true, strict: true })
  const citySlug = slugify(city, { lower: true, strict: true })
  return `${courseSlug}-in-${citySlug}`
}