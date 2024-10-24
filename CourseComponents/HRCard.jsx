import React from 'react';
import Link from 'next/link'; // Import Next.js Link
import './HRCard.css';

const hrCards = [
  {
    title: 'Core HR',
    copy: 'Learn the essential functions of human resources with our Core HR Course in Pune. Designed for those seeking the best Core HR training, this program covers foundational HR practices, compliance, and employee management, equipping you to support and enhance organizational effectiveness.',
    button: 'Know More',
    link: '/core-hr-course-in-pune',
  },
  {
    title: 'HR Payroll',
    copy: 'Master the intricacies of payroll management with our HR Payroll Training. This HR Payroll course digs into payroll processing, tax regulations, and benefits administration, providing you with the skills needed to ensure accurate and compliant payroll operations in any organization you will work.',
    button: 'Know More',
    link: '/hr-payroll-course-in-pune',
  },
  {
    title: 'HR Analytics',
    copy: 'Dive deep into the data-driven world of HR with our HR Analytics Course in Pune. This HR Analytics training focuses on leveraging metrics and analytics to make informed decisions, optimize workforce performance, and enhance employee engagement, setting you apart in the competitive HR landscape.',
    button: 'Know More',
    link: '/hr-analytics-course-in-pune',
  },
  {
    title: 'HR Generalist',
    copy: 'Become a versatile HR professional with our Best HR Generalist Course. This HR Generalist training covers a broad spectrum of HR functions, from recruitment to employee relations, preparing you for a dynamic role that supports all aspects of human resources within an organization.',
    button: 'Know More',
    link: '/hr-generalist-course-in-pune',
  },
  {
    title: 'HR Management',
    copy: 'Grow your career with our HR Management Certification, designed for aspiring leaders in the HR field. This HR Management course covers strategic HR practices, leadership skills, and organizational development, empowering you to drive positive change and manage human capital effectively.',
    button: 'Know More',
    link: '/hr-management-course-in-pune',
  },
];

const HrCardComponent = () => {
  return (
    <>
      <div className="hr-cards-section">
        <h1 className="hr-cards-title">HR COURSES WE OFFER</h1>
        <div className="hr-unique-page-content">
          {hrCards.map((card, index) => (
            <div key={index} className="hr-card-wrapper">
              <div className="hr-unique-card">
                <div className="hr-unique-content">
                  <h2 className="hr-unique-title">{card.title}</h2>
                  <p className="hr-unique-copy">{card.copy}</p>
                </div>
                <Link href={card.link}>
                  <a>
                    <button className="hr-unique-btn">
                      {card.button}
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HrCardComponent;
