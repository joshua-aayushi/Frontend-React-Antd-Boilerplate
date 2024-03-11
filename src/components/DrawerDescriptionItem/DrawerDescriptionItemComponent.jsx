import React from 'react'
import "./DrawerDescriptionItemComponent.css"

const DrawerDescriptionItem = ({ title, content }) => {
  return (
    <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
  )
}

export default DrawerDescriptionItem