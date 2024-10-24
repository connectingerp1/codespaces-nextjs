import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'  // Using Next.js Link component for routing
import styles from './Dashboard.module.css'  // Assuming you will import CSS modules

const Dashboard = () => {
  const [leads, setLeads] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const leadsPerPage = 30

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch(
          'https://serverbackend-0nvg.onrender.com/api/leads'
        )

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        console.log(data) // Log to check the data
        setLeads(data.reverse()) // Reverse to show most recent first
      } catch (error) {
        console.error('Error fetching leads:', error)
        alert('Error fetching leads: ' + error.message)
      }
    }

    fetchLeads()
  }, [])

  const indexOfLastLead = currentPage * leadsPerPage
  const indexOfFirstLead = indexOfLastLead - leadsPerPage
  const currentLeads = leads.slice(indexOfFirstLead, indexOfLastLead)
  const totalPages = Math.ceil(leads.length / leadsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const downloadCSV = () => {
    if (leads.length === 0) {
      alert('No data available for download')
      return
    }

    const headers = ['Name', 'Mobile Number', 'Course Name', 'Email ID', 'Date']

    const csvRows = leads.map((lead) => [
      lead.name,
      lead.contact,
      lead.coursename,
      lead.email,
      new Date(lead.createdAt).toLocaleDateString('en-US', { timeZone: 'UTC' }),
    ])

    const csvContent = [
      headers.join(','),
      ...csvRows.map((row) => row.join(',')),
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })

    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'leads.csv'

    document.body.appendChild(a)
    a.click()

    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <Head>
        <title>Contact Leads - Dashboard</title>
        <meta name="description" content="View and manage contact leads" />
      </Head>

      <div className={styles.container}>
        <h2 className="mt-4">Contact Leads</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered mt-3">
            <thead className="thead-dark">
              <tr>
                <th>Sr. No.</th>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Course Name</th>
                <th>Email ID</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {currentLeads.length > 0 ? (
                currentLeads.map((lead, index) => (
                  <tr key={index}>
                    <td>{indexOfFirstLead + index + 1}</td>
                    <td>{lead.name}</td>
                    <td>{lead.contact}</td>
                    <td>{lead.coursename}</td>
                    <td>{lead.email}</td>
                    <td>
                      {new Date(lead.createdAt).toLocaleDateString('en-US', {
                        timeZone: 'UTC',
                      })}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No leads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="pagination-controls">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>
          <span className="pagination-text">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
        <div className="download-controls mt-4">
          <button onClick={downloadCSV} className="btn btn-primary">
            Download All Contact Leads Data
          </button>
        </div>
      </div>
    </>
  )
}

export default Dashboard
