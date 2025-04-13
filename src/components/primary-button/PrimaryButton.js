import React from 'react'
import './PrimaryButton.css';
export default function PrimaryButton({children}) {
  return (
    <button className='btn-primary'>{children}</button>
  )
}
