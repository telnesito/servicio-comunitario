import "./CardComunicaciones.css";
import { useNavigate } from "react-router";
const CardComunicaciones = ({ id, title, img, date, Icon }) => {
	const navigate = useNavigate();

	return (
		<div
			onClick={() => {
				navigate(`/eventos/${id}`);
				console.log(id);
			}}
			className="c-comunicaciones-card"
		>
			<img width={"100%"} height={"75%"} src={img}></img>
			<span className="c-c-descripcion">
				<p className="c-c-title">{title}</p>
				<div className="c-comunicaciones-divider" />
				<p> {date}</p>
			</span>
		</div>
	);
};

export default CardComunicaciones;
