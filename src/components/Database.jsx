import { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from './Database.module.css' // Assuming you're using CSS modules

const Database = ({ initialData }) => {
  // form states
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [designation, setDesignation] = useState('')
  const [salary, setSalary] = useState('')

  // retrieved data state
  const [data, setData] = useState(initialData)

  // submit event
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = {
      name,
      age,
      designation,
      salary,
    }

    axios
      .post('https://sheet.best/api/sheets/17e90451-eb4a-4143-b58b-fb494e2f44ee', formData)
      .then((response) => {
        // Log the response data
        console.log(response.data)

        // Reset form fields after submit
        setName('')
        setAge('')
        setDesignation('')
        setSalary('')

        // Refresh the data after form submission
        getData()
      })
      .catch((error) => {
        console.error('Error submitting form:', error)
      })
  }

  // Function to get data from the API
  const getData = () => {
    axios
      .get('https://sheet.best/api/sheets/17e90451-eb4a-4143-b58b-fb494e2f44ee')
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }

  // Re-fetch data when the component mounts
  useEffect(() => {
    getData()
  }, [data])

  return (
    <>
      <Head>
        <title>Database Form</title>
        <meta name="description" content="Save form data in Google Sheets using React and Next.js" />
      </Head>

      <div className={styles.container}>
        <h1>Save Form Data in Google Sheets using React</h1>

        <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br />
          <label>Age</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
          <br />
          <label>Designation</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your designation"
            onChange={(e) => setDesignation(e.target.value)}
            value={designation}
          />
          <br />
          <label>Salary</label>
          <input
            type="text"
            className="form-control"
            required
            placeholder="Enter your salary"
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
          />
          <br />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>

        <div className="view-data">
          {data.length < 1 && <p>No data to show</p>}
          {data.length > 0 && (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>{item.designation}</td>
                      <td>{item.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

// This function will run on the server before rendering the page
export async function getServerSideProps() {
  // Fetch the data from the API on server-side rendering
  try {
    const response = await axios.get('https://sheet.best/api/sheets/17e90451-eb4a-4143-b58b-fb494e2f44ee')
    const initialData = response.data

    return {
      props: {
        initialData,
      },
    }
  } catch (error) {
    console.error('Error fetching data on server:', error)

    return {
      props: {
        initialData: [],
      },
    }
  }
}

export default Database
