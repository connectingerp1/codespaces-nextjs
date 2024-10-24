import { useState, useEffect, useContext } from 'react';
import { CityContext } from '../CityContext';
import Head from 'next/head';

const DataScienceComponent = ({ pageData }) => {
  const { city } = useContext(CityContext);

  if (!pageData) return <p>No data available for the specified page.</p>;

  return (
    <>
      <Head>
        <title>{pageData.title}</title>
      </Head>
      <div className="container-yds mx-auto p-6">
        <SectionComponent section={pageData} />
      </div>
    </>
  );
};

const SectionComponent = ({ section }) => {
  return (
    <>
      <h1 className="text-5xl text-center mb-10 text-primary">
        <span className="text-accent">{section.title}</span>
      </h1>
      <div className="cards-container-yds grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.cards && section.cards.length > 0 ? (
          section.cards.map((card, index) => (
            <DataCard
              key={index}
              title={card.title}
              content={card.content}
              listItems={card.listItems}
              index={index}
            />
          ))
        ) : (
          <p>No cards available.</p>
        )}
      </div>
    </>
  );
};

const DataCard = ({ title, content, listItems, index }) => {
  return (
    <div className="cardClass-yds">
      <h2
        className="text-3xl font-semibold mb-3 textPrimaryClass"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h2>
      <p
        className="textMutedForegroundClass mb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
      {listItems && listItems.length > 0 && (
        <ul className="list-disc list-inside textMutedForegroundClass mb-4">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { pageId, pageType } = context.params;  // Get parameters from the URL

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Jsonfolder/Whyds.json`);
    if (!response.ok) throw new Error('Network response was not ok');

    const jsonData = await response.json();
    const pageData = jsonData?.[pageType]?.[pageId];

    if (pageData) {
      pageData.title = pageData.title?.replace(/{city}/g, 'Default City');  // Replace with a default city or fetched city value
      pageData.cards = pageData.cards?.map((card) => ({
        ...card,
        title: card.title?.replace(/{city}/g, 'Default City'),
        content: card.content?.replace(/{city}/g, 'Default City'),
        listItems: card.listItems?.map((item) => item.replace(/{city}/g, 'Default City')),
      }));

      return { props: { pageData } };
    } else {
      return { props: { pageData: null } };
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return { props: { pageData: null } };
  }
}

export default DataScienceComponent;
