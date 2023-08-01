// import {Bar, BarChart, Legend, XAxis, YAxis} from 'recharts'
import {BarChart, Bar, Legend, XAxis, YAxis} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props
  const barRadius = [10, 10, 0, 0]
  const dataFormatter = number => {
    if (number > 1000) {
      return `${number / 1000}k`
    }
    return number
  }
  return (
    <div className="vaccination-card-container">
      <h1 className="vaccination-card-heading">Vaccination Coverage</h1>
      <BarChart data={last7DaysVaccination} width={1000} height={300}>
        <XAxis
          dataKey="vaccine_date"
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#6c757d',
            strokeWidth: 1,
          }}
        />
        <Legend align="center" verticalAlign="bottom" />
        <Bar
          dataKey="dose_1"
          barSize="20%"
          fill="#5a8dee"
          radius={barRadius}
          name="Dose 1"
        />
        <Bar
          dataKey="dose_2"
          barSize="20%"
          fill="#f54394"
          radius={barRadius}
          name="Dose 2"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
