import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import React from 'react'

const IconCart = () => {
  return (
      <div>
          <button>
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
      </div>
  )
}

export default IconCart
