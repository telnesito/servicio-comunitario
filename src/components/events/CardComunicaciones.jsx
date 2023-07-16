import { Box } from "@mui/material";
import "./CardComunicaciones.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import "aos/dist/aos.css"

import Aos from "aos";
const CardComunicaciones = ({ id, title, img, date, Icon }) => {
	const navigate = useNavigate();
	useEffect(() => {

		Aos.init({ duration: 1000 })

	}, []);
	return (
		<Box
			data-aos="fade-up"

			onClick={() => {
				navigate(`/eventos/${id}`);
			}}
			className="c-comunicaciones-card"

			sx={{
				"display": "flex",
				"flex-direction": "column",
				"align-items": "center",
				"justify-content": "center",
				"width": {
					xl: '30%',
					lg: '30%',
					md: '30%',
					sm: '45%',
					xs: '90%'
				},
				"height": "250px",
				"background-color": "rgb(255, 255, 255)",
				"border-radius": "10px",
				"box-shadow": "2px 2px 5px rgba(0, 0, 0, 0.593)",
				"color": "var(--primaryColor)",
				"transition": "all 0.5s"
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					backgroundImage: `url(${img})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					cursor: 'pointer'
				}}
			></Box>
			<span className="c-c-descripcion">
				<p className="c-c-title">{title.trim().slice(0, 20)}</p>
				<div className="c-comunicaciones-divider" />

				<p><Icon />  {" " + date}</p>
			</span>
		</Box>
	);
};

export default CardComunicaciones;
