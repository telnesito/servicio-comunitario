import { Box } from "@mui/material";
import "./CardComunicaciones.css";
import { useNavigate } from "react-router";
const CardComunicaciones = ({ id, title, img, date, Icon }) => {
	const navigate = useNavigate();

	return (
		<Box
			onClick={() => {
				navigate(`/eventos/${id}`);
			}}
			className="c-comunicaciones-card"

			sx={{
				"display": "flex",
				"flex-direction": "column",
				"align-items": "center",
				"justify-content": "center",
				"width": "25%",
				"min-width": "250px",
				"height": "250px",
				"background-color": "rgb(255, 255, 255)",
				"border-radius": "10px",
				"box-shadow": "2px 2px 5px rgba(0, 0, 0, 0.593)",
				"color": "var(--primaryColor)",
				"transition": "all 0.5s"
			}}
		>
			<img width={"100%"} style={{ borderRadius: '10px' }} height={"75%"} src={img}></img>
			<span className="c-c-descripcion">
				<p className="c-c-title">{title.trim().slice(0, 20)}</p>
				<div className="c-comunicaciones-divider" />

				<p><Icon />  {" " + date}</p>
			</span>
		</Box>
	);
};

export default CardComunicaciones;
