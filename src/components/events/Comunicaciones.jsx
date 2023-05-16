import CardComunicaciones from "./CardComunicaciones";
import "./Comunicaciones.css";
import { BsCalendarDate } from "react-icons/bs";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { getArticles } from "../../api/articleManage";
import { Typography } from "@mui/material";

const Comunicaciones = () => {
	const [eventos, setEventos] = useState([]);

	useEffect(() => {
		getArticles((eventos) => {
			setEventos(eventos);
		}, "eventos");

		Aos.init({ duration: 1000 });
	}, []);

	return (
		<div id="eventos" className="c-comunicaciones-principal">
			<span data-aos="fade-left" className="c-comunicaciones-title">
				<div />
				<h3>EVENTOS 2023-24</h3>
			</span>
			<Typography textAlign={'center'} color={'black'}>Celebra y conmemora todos los dias festivos y eventos dentro de <strong>nuestaras instalaciones!</strong></Typography>
			{eventos !== undefined ? (
				<div
					data-aos="fade-up"
					data-aos-anchor-placement="center-bottom"
					className="c-comunicaciones-cards"
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
				</div>
			) : (
				<Typography>No hay eventos</Typography>
			)}
		</div>
	);
};

export default Comunicaciones;
