import CardComunicaciones from "./CardComunicaciones";
import "./Comunicaciones.css";
import { BsCalendarDate } from "react-icons/bs";
import { useState, useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"
import { getArticles } from "../../api/articleManage";
import { Box, Typography } from "@mui/material";

const Comunicaciones = () => {
	const [eventos, setEventos] = useState([]);

	useEffect(() => {
		getArticles((eventos) => {
			setEventos(eventos);
		}, "eventos");
		Aos.init({ duration: 1000 })

	}, []);



	return (
		<Box id="eventos" className="c-comunicaciones-principal">
			<Box sx={{
				width: {
					xl: '75%',
					lg: '75%',
					md: '75%',
					sm: '75%',
					xs: '90%'
				},
				"display": "flex",
				"align-items": "left",
				"justify-content": "center",
				"color": "var(--primaryColor)",
				"font-size": "1.5rem",
				flexDirection: 'column'
			}} >
				<Typography data-aos="fade-right" zIndex={'99999'} fontFamily={'Poppins'} fontWeight={'600'}
					fontSize={'2rem'} > EVENTOS</Typography>
				<Box data-aos="fade-right" width={'145px'} bgcolor={'var(--onActionColor)'} position={'relative'} top={'-18px'} height={'10px'}
					sx={{
						borderBottomLeftRadius: '10px',
						borderBottomRightRadius: '10px',

					}}
				></Box>
				<Typography data-aos="fade-right" textAlign={'left'} pb={'10px'} color={'black'}>Celebra y conmemora todos los dias festivos y eventos dentro de <strong>nuestras instalaciones!</strong></Typography>
			</Box>

			{
				eventos !== undefined ? (
					<Box
						className="c-comunicaciones-cards"
						data-aos="fade-up"

						sx={{
							"width": {
								xl: '80%',
								lg: '80%',
								md: '80%',
								sm: '80%',
								xs: '100%'
							},
						}}
					>
						{eventos.map(({ id, title, img, date }) => (
							<CardComunicaciones

								key={id}
								id={id}
								title={title}
								img={img}
								date={date}
								Icon={BsCalendarDate}
							/>
						))}
					</Box>
				) : (
					<Typography>No hay eventos</Typography>
				)
			}
		</Box >
	);
};

export default Comunicaciones;
