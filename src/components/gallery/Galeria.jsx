import './Galeria.css'
import { Gallery } from "react-grid-gallery";

const Galeria = () => {

  const images = [
    {
      src: "/img/img1.webp",
      width: 420,
      height: 212,
    },
    {
      src: "/img/img2.webp",
      width: 320,
      height: 212,
    },
    {
      src: "/img/img3.webp",
      width: 320,
      height: 212,
    },
    {
      src: "/img/img4.webp",
      width: 320,
      height: 212,
    },
    {
      src: "/img/img5.webp",
      width: 320,
      height: 212,
    },
    {
      src: "/img/img6.webp",
      width: 270,
      height: 212,
    },
    {
      src: "/img/img7.webp",
      width: 320,
      height: 212,
    },
    {
      src: "/img/img8.webp",
      width: 320,
      height: 212,
    },
    {
      src: "/img/img9.webp",
      width: 320,
      height: 212,
    },
    {
      src: "/img/img10.webp",
      width: 320,
      height: 212,
    },
    {
      src: "/img/img11.webp",
      width: 320,
      height: 212,
    },
    {
      src: "/img/library1.webp",
      width: 320,
      height: 212,
    },
    {
      src: "/img/library2.webp",
      width: 420,
      height: 212,
    },
    {
      src: "/img/libraryclerks.webp",
      width: 420,
      height: 212,
    },
    {
      src: "/img/pinsti_2.webp",
      width: 320,
      height: 212,
    },

  ];
  return (
    <div className='c-a'>
      <h2>Galeria Estudiantil</h2>
      <div className='prob-a'>
        <Gallery images={images} />
      </div>
    </div>
  )
}

export default Galeria