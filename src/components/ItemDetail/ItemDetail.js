// import React from 'react'

// const ItemDetail = ({ data }) => {
//   return (
//     <div>
//       <img src={data.avatar_url} alt={data.type} width={300} />
//       <h2>{data.alt} </h2>
      
//     </div>
//   )
// }

// export default ItemDetail

import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const ItemDetail = () => {
  return (
    <div>
      <ItemDetailContainer />
    </div>
  )
}

export default ItemDetail;
