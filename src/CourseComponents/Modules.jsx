import React, { useState, useMemo, useCallback } from 'react';
import Head from 'next/head';
import './Modules.css';

const DataScienceModules = ({ pageData }) => {
  const [activeTab, setActiveTab] = useState('beginner');
  const [activeModule, setActiveModule] = useState(0);
  const [error, setError] = useState(null);

  const handleModuleClick = useCallback(
    (moduleIndex) => {
      if (activeModule !== moduleIndex) {
        setActiveModule(moduleIndex);
      }
    },
    [activeModule]
  );

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
    setActiveModule(0);
  }, []);

  const activeContent = useMemo(() => {
    if (pageData) {
      return pageData.tabs.find((tab) => tab.type === activeTab).modules[activeModule];
    }
    return null;
  }, [pageData, activeTab, activeModule]);

  if (!pageData) {
    return <div>Error loading data: No data available for the specified page.</div>;
  }

  return (
    <div className="container-ds">
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <div className="header-ds">
        <h1>{pageData.title}</h1>
      </div>
      <div className="tabs">
        {pageData.tabs.map((tab) => (
          <div
            key={tab.type}
            className={`tab ${activeTab === tab.type ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.type)}
          >
            <p>{tab.type.charAt(0).toUpperCase() + tab.type.slice(1)}</p>
            <span>{tab.duration}</span>
          </div>
        ))}
      </div>
      <div className="content-container">
        <div className="content">
          {pageData.tabs
            .find((tab) => tab.type === activeTab)
            .modules.map((module, index) => (
              <div
                key={index}
                className={`module ${activeModule === index ? 'selected' : ''}`}
                onClick={() => handleModuleClick(index)}
              >
                <div className="module-header">
                  <p>MODULE - {index + 1}</p>
                  <h2>{module.title}</h2>
                  <span>{module.duration}</span>
                </div>
              </div>
            ))}
        </div>
        <div className="module-details-container">
          {activeContent && (
            <div className="module-details expanded">
              <h2>{activeContent.title}</h2>
              <p>
                <strong>Duration:</strong> {activeContent.duration}
              </p>
              <ul>
                {activeContent.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="footer">
        <button>Download Curriculum</button>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { pageId } = context.params; // Get the pageId from the URL
  let pageData = null;

  try {
    const res = await fetch('https://example.com/Jsonfolder/curriculumdata.json'); // Replace with actual URL
    const data = await res.json();
    pageData = data[pageId];
  } catch (error) {
    console.error('Fetch error:', error);
  }

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData, // Pass the fetched data as a prop
    },
  };
}

export default DataScienceModules;
