import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props
  return (
    <div className="vaccination-card-container">
      <h1 className="vaccination-card-heading">Vaccination by gender</h1>
      <PieChart width={700} height={300}>
        <Pie
          data={vaccinationByGender}
          cx="50%"
          cy="60%"
          startAngle={180}
          endAngle={0}
          innerRadius="40%"
          outerRadius="80%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" verticalAlign="bottom" align="center" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
