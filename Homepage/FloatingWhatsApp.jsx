"use client"; // This ensures the component renders only on the client side

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import styles from "./FloatingWhatsApp.module.css"; // Importing as a CSS module for Next.js

const FloatingWhatsApp = ({ phoneNumber }) => {
  const [isClient, setIsClient] = useState(false);

  // To ensure window is accessed only after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleWhatsAppClick = () => {
    if (isClient) {
      const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
      window.open(`https://wa.me/${formattedPhoneNumber}`, "_blank");
    }
  };

  return (
    <div className={styles.floatingWhatsappContainer}>
      <div className={styles.floatingWhatsapp} onClick={handleWhatsAppClick}>
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </div>
    </div>
  );
};

export default FloatingWhatsApp;
