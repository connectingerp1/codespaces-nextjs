import { generateSlug } from '../utils/slugHelper'
import coursesData from '../data/courses.json' // Assuming you have course data in JSON

export default function CoursePage({ course, city }) {
  return (
    <div>
      <h1>{course} Course in {city}</h1>
      {/* Render the course and city-specific content here */}
    </div>
  )
}

export async function getStaticPaths() {
  const cities = ['pune', 'mumbai', 'delhi'] // Replace with your dynamic cities
  const courses = ['SAP FICO', 'Data Science'] // Replace with your courses

  // Generate all possible paths using the course and city slugs
  const paths = courses.flatMap(course =>
    cities.map(city => ({
      params: { slug: generateSlug(course, city) }
    }))
  )

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  // Extract course and city from the slug (e.g., sap-fico-course-in-pune)
  const [courseSlug, , citySlug] = slug.split('-in-')

  // Find the corresponding course and city (or fetch data based on slug)
  const course = coursesData.find(course => generateSlug(course.name, citySlug) === slug)
  
  return {
    props: {
      course: course?.name || 'Course Not Found',
      city: citySlug || 'City Not Found',
    },
  }
}
