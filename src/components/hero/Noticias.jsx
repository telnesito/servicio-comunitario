import "./Hero.css";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";
const Noticias = ({ id, title, prevText, buttonText }) => {
	const navigate = useNavigate();
	return (
		<div className="noticias">
			<span className="hero-info-title">
				<h2>COLEGIO METROPOLITANO</h2>
				<h1>{title}</h1>
			</span>

			<span>
				<Box width={'90%'}>{prevText}</Box>
			</span>

			<button onClick={() => navigate(`/noticias/${id}`)}>{buttonText}</button>
		</div>
	);
};

export default Noticias;
