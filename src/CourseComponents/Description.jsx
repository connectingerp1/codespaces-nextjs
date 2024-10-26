import React, { useEffect, useState, useContext } from 'react'
import { CityContext } from '../CityContext'
import styles from './Description.module.css' // Use CSS Module for scoped styling

const Description = ({ pageId, sectionIndex }) => {
  const [content, setContent] = useState(null)
  const { city } = useContext(CityContext)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.clear()
    }
    // Fetch the JSON file
    fetch('/Jsonfolder/Descriptiondata.json')
      .then((response) => response.json())
      .then((data) => {
        const pageContent = data.find((item) => item.pageId === pageId)
        if (pageContent) {
          // Replace placeholder {city} with actual city name in paragraphs
          const updatedParagraphs = pageContent.paragraphs.map((paragraph) =>
            paragraph.replace(/{city}/g, city)
          )

          // Replace placeholder {city} with actual city name in the title
          const updatedTitle = pageContent.title.replace(/{city}/g, city)

          setContent({
            ...pageContent,
            paragraphs: updatedParagraphs,
            title: updatedTitle,
            videoUrl: pageContent.videoUrl,
          })
        }
      })
      .catch((error) => console.error('Error fetching the content:', error))
  }, [pageId, city])

  if (!content) {
    return <p>Loading content...</p>
  }

  return (
    <div
      className={`${styles.descriptionContainer} ${sectionIndex % 2 === 0 ? styles.videoLeft : styles.videoRight}`}
    >
      {content.videoUrl && (
        <div className={styles.descriptionVideo}>
          <video src={content.videoUrl} loop autoPlay muted controls={false} />
        </div>
      )}
      <div className={styles.descriptionContent}>
        <h2 className={styles.descriptionTitle}>{content.title}</h2>
        {content.paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.descriptionParagraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Description
