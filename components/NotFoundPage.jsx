import Link from 'next/link'
import styles from './NotFoundPage.module.css' // Use CSS Modules for scoped styles

const NotFoundPage = () => {
  return (
    <section className={styles.page404}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className={styles.fourZeroFourBg}>
                <h1 className="text-center">404</h1>
              </div>
              <div className={styles.contentBox404}>
                <h3 className="h2">Looks like you're lost</h3>
                <p>The page you are looking for is not available!</p>
                <Link href="/">
                  <a className={styles.link404}>Go to Home</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
