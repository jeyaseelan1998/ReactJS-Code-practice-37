import {PieChart, Pie, Cell, Legend} from 'recharts'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  return (
    <div className="vaccination-card-container">
      <h1 className="vaccination-card-heading">Vaccination by Age</h1>
      <PieChart width={700} height={300}>
        <Pie
          data={vaccinationByAge}
          cx="50%"
          cy="40%"
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#5a8dee" />
          <Cell name="45-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend iconType="circle" verticalAlign="bottom" align="center" />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
