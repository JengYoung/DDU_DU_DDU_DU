import React from 'react'

export const SubmitButton = ({ onSubmit, children }) => {
  return (
    <button type="submit" onSubmit={onSubmit}>{children}</button>
  )
}
