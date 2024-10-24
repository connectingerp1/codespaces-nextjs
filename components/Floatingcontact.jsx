import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import styles from './Floatingcontact.module.css' // Import CSS Module for scoped styles

const Floatingcontact = ({ phoneNumber }) => {
  const handlecontactClick = () => {
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '')
    window.open(`tel:${formattedPhoneNumber}`, '_self') // Initiates the phone call
  }

  return (
    <div className={styles.floatingContactContainer}>
      <div className={styles.floatingContact} onClick={handlecontactClick}>
        <FontAwesomeIcon icon={faPhone} size="2x" />
      </div>
    </div>
  )
}

export default Floatingcontact
