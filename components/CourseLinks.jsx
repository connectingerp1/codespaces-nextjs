import React from 'react'
import Link from 'next/link'
import { generateSlug } from '../utils/slugHelper'

// Since this is Next.js, we don't need to import react-router-dom.
// The `Link` component from Next.js is used for navigation.

const CourseLinks = () => {
  // List of courses with their respective slugs
  const courses = [
    { name: 'Data Science', slug: 'data-science' },
    { name: 'Data Analytics', slug: 'data-analytics' },
    { name: 'Business Analytics', slug: 'business-analytics' },
    { name: 'GPT', slug: 'chatgpt' },
    { name: 'FullStack', slug: 'full-stack-developer' },
    { name: 'Java', slug: 'java' },
    { name: 'MERN', slug: 'mern-stack' },
    { name: 'Python', slug: 'python' },
    { name: 'Salesforce', slug: 'salesforce' },
    { name: 'UI/UX', slug: 'ui-ux' },
    { name: 'EWM', slug: 'sap-ewm' },
    { name: 'ABAP', slug: 'sap-abap' },
    { name: 'BASIS', slug: 'sap-basis' },
    { name: 'BW/BI', slug: 'sap-bwbi' },
    { name: 'FICO', slug: 'sap-fico' },
    { name: 'HANA', slug: 'sap-s4-hana' },
    { name: 'HRHCM', slug: 'sap-hcm' },
    { name: 'MM', slug: 'sap-mm' },
    { name: 'NET', slug: 'sap-net' },
    { name: 'PM', slug: 'sap-pm' },
    { name: 'PP', slug: 'sap-pp' },
    { name: 'PS', slug: 'sap-ps' },
    { name: 'QM', slug: 'sap-qm' },
    { name: 'SCM', slug: 'sap-scm' },
    { name: 'SD', slug: 'sap-sd' },
    { name: 'SuccessFactors', slug: 'sap-successfactors' },
    { name: 'POWER BI', slug: 'powerbi' },
    { name: 'SQL', slug: 'sql' },
    { name: 'Tableau', slug: 'tableau' },
    { name: 'Digital Marketing', slug: 'digital-marketing' },
    { name: 'HR Analytics', slug: 'hr-analytics' },
    { name: 'HR Core', slug: 'core-hr' },
    { name: 'HR Management', slug: 'hr-management' },
    { name: 'HR Payroll', slug: 'hr-payroll' },
    { name: 'HR SAP HCM', slug: 'sap-hr-hcm' },
  ]

  const cities = [
    'Pune', 'Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'Bangalore', 'Hyderabad', 'Ahmedabad',
    'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Patna', 'Indore', 'Bhopal', 'Visakhapatnam', 
    'Vadodara', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Varanasi',
    'Kerala', 'Tamil Nadu', 'Surat', 'Ernakulam', 'Kottayam', 'Aurangabad', 'Bhilai', 'Dehradun',
    'Ghaziabad', 'Gorakhpur', 'Guntur', 'Guwahati', 'Khammam', 'Madurai', 'Mysore', 'Pondicherry',
    'Ranchi', 'Coimbatore', 'Kochi', 'Chandigarh', 'Bhubaneswar', 'Shimoga', 'Tirupati', 'Thrissur',
    'Warangal', 'Vizag', 'Trivandrum', 'Salem', 'Trichy', 'Ameerpet', 'Jalandhar', 'Jamshedpur',
    'Marathahalli', 'Mohali', 'Calicut', 'Raipur', 'Rohini', 'Patiala', 'Cochin', 'Mangalore',
    'Velachery', 'Jabalpur', 'Tambaram',
  ]

  return (
    <div>
      <h3>Courses Available in Multiple Cities</h3>
      <ul>
        {courses.map((course) =>
          cities.map((city) => {
            const slug = generateSlug(course.slug, city)
            return (
              <li key={`${course.slug}-${city}`}>
                <Link href={`/${slug}`}>
                  <a>{course.name} in {city}</a>
                </Link>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}

export default CourseLinks
