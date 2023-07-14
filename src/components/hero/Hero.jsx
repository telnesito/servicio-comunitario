import "./Hero.css";
import { Carousel } from "react-responsive-carousel";
import Noticias from "./Noticias";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getArticles } from "../../api/articleManage";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { Box } from "@mui/material";
const Hero = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    getArticles((noticias) => {
      setNoticias(noticias);
    }, "noticias");
  }, []);

  return (
    <Box id="comunicaciones"
      display={'flex'}
      justifyContent={'center'}
      width={'100vw'}
      height={'550px'}
      sx={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        backgroundImage: "url(/img/backgroundHero.png)"
      }}
    >
      {noticias !== undefined ? (
        <Carousel
          showThumbs={false}
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
    </Box>
  );
};

export default Hero;
