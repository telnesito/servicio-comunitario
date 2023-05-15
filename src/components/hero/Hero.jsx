import "./Hero.css";
import { Carousel } from "react-responsive-carousel";
import Noticias from "./Noticias";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getArticles } from "../../api/articleManage";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
const Hero = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    getArticles((noticias) => {
      setNoticias(noticias);
    }, "noticias");
  }, []);

  return (
    <div id="comunicaciones" className="c-hero-principal">
      {noticias !== undefined ? (
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          transitionTime={1000}
          className="c-hero-info"
        >
          {noticias.map(({ id, title, spoiler }) => (
            <Noticias
              key={id}
              id={id}
              title={title}
              prevText={parse(spoiler.slice(0, 400))}
              buttonText={"Saber mas!"}
            />
          ))}
        </Carousel>
      ) : (
        <>nada</>
      )}
    </div>
  );
};

export default Hero;
