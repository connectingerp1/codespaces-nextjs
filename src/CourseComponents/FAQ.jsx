import React, { useState, useEffect, useContext } from 'react'
import { CityContext } from '../CityContext'
import styles from './FAQAccordion.module.css' // Import CSS Module for scoped styles

const FAQAccordion = ({ pageId, pageType }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedIndex, setExpandedIndex] = useState(null)
  const { city } = useContext(CityContext) // Get the city from context

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.clear() // Ensure this only runs on the client side
    }

    const fetchData = async () => {
      try {
        const response = await fetch('/Jsonfolder/faqdata.json')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()

        // Dynamically fetch data based on page type and page ID
        const pageData = data[pageType]?.[pageId]

        if (pageData) {
          // Replace city placeholders in data
          pageData.title = pageData.title?.replace(/{city}/g, city)
          pageData.description = pageData.description?.replace(/{city}/g, city)
          pageData.items = pageData.items?.map((item) => ({
            ...item,
            question: item.question?.replace(/{city}/g, city),
            answer: item.answer?.replace(/{city}/g, city),
          }))

          setData(pageData)
        } else {
          throw new Error('Page data not found')
        }

        setLoading(false)
      } catch (error) {
        console.error('Error fetching FAQ data:', error)
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [pageId, pageType, city]) // Add city to dependencies

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>
  }

  if (!data) {
    return <div>No data available for the specified page.</div>
  }

  return (
    <div className={styles.containerFAQ}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className={styles.faqContent}>
        <div className={styles.faqImage}>
          {data.video && (
            <video loop autoPlay muted>
              <source src={data.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className={styles.faqQuestions}>
          {data.items && data.items.length > 0 ? (
            data.items.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <button
                  aria-expanded={expandedIndex === index}
                  onClick={() => handleToggle(index)}
                  className={styles.accordionTitle}
                >
                  <span className={styles.accordionText}>{item.question}</span>
                  <span className={styles.icon} aria-hidden="true"></span>
                </button>
                <div
                  className={styles.accordionContent}
                  style={{
                    opacity: expandedIndex === index ? 1 : 0,
                    maxHeight: expandedIndex === index ? '9em' : 0,
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No FAQs available.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default FAQAccordion
