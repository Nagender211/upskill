import React from 'react'

const CapitalAnswer = (props) => {
    const {capitalans}=props
    const {countryname}=capitalans
  return (
    <div>
        <p>
            {countryname}
        </p>
    </div>
  )
}

export default CapitalAnswer