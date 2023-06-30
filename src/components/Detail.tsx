import React, { ReactElement } from 'react'
import { Hotel } from '../Types';

interface DetailProps {
  hotelInfo: Hotel;
}

const Detail = ({ hotelInfo }: DetailProps): ReactElement => {
  return (
    <div className='contactInfo'>
      <h3 className='fs-2 mb-3'>{hotelInfo?.name}</h3>
      {hotelInfo.address1 ? <p>Address 1: {hotelInfo.address1}</p> : ""}
      {hotelInfo.address2 ? <p>Address 2: {hotelInfo.address2}</p> : ""}
      {hotelInfo.description ? <div className='d-flex mb-2'><p className='mb-2'>Description: </p><p className='mx-2'>{hotelInfo.description}</p></div> : ""}
      {hotelInfo.postcode ?? <p>PostCode: {hotelInfo.postcode}</p>}
      {hotelInfo.town ? <p>Town: {hotelInfo.town}</p> : ""}
      {hotelInfo.countryCode ? <p>CountryCode: {hotelInfo.countryCode}</p> : ""}
      {hotelInfo.country ? <p>Country: {hotelInfo.country}</p> : ""}
      {hotelInfo.telephone ? <p>Telephone: {hotelInfo.telephone}</p> : ""}
      {hotelInfo.email ? <p>Email: {hotelInfo.email}</p> : ""}
    </div>
  )
}

export default Detail
