import "./Hero.css";
import { useNavigate } from "react-router";
import { Box, Button } from "@mui/material";
const Noticias = ({ id, title, prevText, buttonText }) => {
	const navigate = useNavigate();
	return (
		<div className="noticias">
			<span className="hero-info-title">
				<h2>COLEGIO METROPOLITANO</h2>
				<h1>{title}</h1>
			</span>

			<Box width={'90%'}>{prevText}</Box>

			<Button sx={{
				width: '200px',
				height: '50px',
				color: 'white'
			}} color="secondary" variant="contained" onClick={() => navigate(`/noticias/${id}`)}>{buttonText}</Button>
		</div>
	);
};

export default Noticias;
