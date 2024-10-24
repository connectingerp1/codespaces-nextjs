import Image from 'next/image'
import styles from './Trustus.module.css' // Assuming you will be using a CSS Module

const Trustus = () => {
  const logos1 = [
    '/Ourclients/Artboard 10.avif',
    '/Ourclients/Artboard 11.avif',
    '/Ourclients/Artboard 12.avif',
    '/Ourclients/Artboard 13.avif',
    '/Ourclients/Artboard 14.avif',
    '/Ourclients/Artboard 25.avif',
    '/Ourclients/Artboard 26.avif',
    '/Ourclients/Artboard 40.avif',
    '/Ourclients/Artboard 41.avif',
    '/Ourclients/Artboard 42.avif',
  ]

  const logos2 = [
    '/Ourclients/Artboard 15.avif',
    '/Ourclients/Artboard 16.avif',
    '/Ourclients/Artboard 17.avif',
    '/Ourclients/Artboard 18.avif',
    '/Ourclients/Artboard 19.avif',
    '/Ourclients/Artboard 20.avif',
    '/Ourclients/Artboard 21.avif',
    '/Ourclients/Artboard 22.avif',
    '/Ourclients/Artboard 23.avif',
    '/Ourclients/Artboard 24.avif',
  ]

  const logos3 = [
    '/Ourclients/Artboard 10.avif',
    '/Ourclients/Artboard 11.avif',
    '/Ourclients/Artboard 12.avif',
    '/Ourclients/Artboard 13.avif',
    '/Ourclients/Artboard 14.avif',
    '/Ourclients/Artboard 25.avif',
    '/Ourclients/Artboard 26.avif',
    '/Ourclients/Artboard 40.avif',
    '/Ourclients/Artboard 41.avif',
    '/Ourclients/Artboard 42.avif',
  ]

  const duplicateLogos = (logos) => {
    return [...logos, ...logos]
  }

  return (
    <div className={styles.containerItDs}>
      <div className={styles.logosItDs}>
        {/* Logos Marquee 1 */}
        <div className={styles.marqueeItDs}>
          <div className={styles.marqueeContentItDs}>
            {duplicateLogos(logos1).map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Logo ${index}`}
                className={styles.logoItDs}
                width={100} // Adjust the width and height as per your design
                height={50}
              />
            ))}
          </div>
        </div>

        {/* Logos Marquee 2 */}
        <div className={styles.marqueeItDs}>
          <div className={styles.marqueeContentItDs}>
            {duplicateLogos(logos2).map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Logo ${index}`}
                className={styles.logoItDs}
                width={100}
                height={50}
              />
            ))}
          </div>
        </div>

        {/* Logos Marquee 3 */}
        <div className={styles.marqueeItDs}>
          <div className={styles.marqueeContentItDs}>
            {duplicateLogos(logos3).map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Logo ${index}`}
                className={styles.logoItDs}
                width={100}
                height={50}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.infoItDs}>
        <div className={styles.containerItDsTitle}>
          <h2>ORGANISATIONS TRUST US</h2>
        </div>
        <h2 className={styles.titleItDs}>
          <span className={styles.highlightSpanCards}>1000+</span> Organizations
          <br />
          TRUST US WITH THEIR <br />
          Openings
        </h2>
        <p className={styles.descriptionItDs}>
          <span className={styles.highlightSpanCards}>Organizations</span>, across
          the globe trust our students and their brilliant{' '}
          <span className={styles.highlightSpanCards}>technical skills</span> in Full
          Stack Development,{' '}
          <span className={styles.highlightSpanCards}>
            Data Science & Analytics with AI
          </span>
          , Java Full Stack Developer, Digital Marketing Course, AWS Cloud
          Technology, which results in them getting hired at excellent companies
          with impressive pay scales.{' '}
          <span className={styles.highlightSpanCards}>Connecting Dots ERP</span>, India’s
          fastest-growing <span className={styles.highlightSpanCards}>
            Software Training Institute
          </span> provides a range of IT Courses helping to shape the future of our
          students in every way possible. The Coding Courses provided by our Institute
          are highly valuable and worthy for the students.
        </p>
        <div className={styles.statisticsItDs}>
          <div className={styles.statItDs}>
            <span className={styles.numberItDs}>1000+</span>{' '}
            <span className={styles.labelItDs}>Hiring companies</span>
          </div>
          <div className={styles.statItDs}>
            <span className={styles.numberItDs}>100+</span>{' '}
            <span className={styles.labelItDs}>Students already placed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trustus
