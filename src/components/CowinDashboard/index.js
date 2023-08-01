import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'

import './index.css'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    covidVaccinationData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCovidVaccinationData()
  }

  getCovidVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(vaccinationDataApiUrl) // default method is GET
    if(response.ok === true) {
      const data = await response.json()
      const formattedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({
        covidVaccinationData: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {covidVaccinationData} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = covidVaccinationData

    return (
      <>
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="failure-view-image"
      />
      <h1 className="failure-view-heading">Something went wrong</h1>
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="loader" className="loading-view">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderCovinDashboardViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return this.renderLoadingView()
    }
  }

  render() {
    return (
      <div className="app-container">
        <header className="nav-header">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <h1 className="logo-title">Co-Win</h1>
        </header>
        <h1 className="main-heading">CoWIN Vaccination in India</h1>
        {this.renderCovinDashboardViews()}
      </div>
    )
  }
}

export default CowinDashboard
