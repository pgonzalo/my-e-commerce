import React from 'react'

const ItemDetail = ({ data }) => {
  return (
    <div>
      <img src={data.avatar_url} alt={data.type} width={300} />
      <h2>{data.alt} </h2>
      
    </div>
  )
}

export default ItemDetail
