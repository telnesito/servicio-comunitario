import './IgButton.css'
import { BsInstagram } from 'react-icons/bs'
export const IgButton = () => {
  return (
    <div className="btn__container">
      <a href="#" className="btn">
        <i><BsInstagram /></i>
        <span>Instagram</span>
      </a>
    </div>
  )
}
