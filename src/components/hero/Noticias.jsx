import "./Hero.css";
import { useNavigate } from "react-router";

const Noticias = ({ id, title, prevText, buttonText }) => {
	const navigate = useNavigate();
	return (
		<div className="noticias">
			<span className="hero-info-title">
				<h2>COLEGIO METROPOLITANO</h2>
				<h1>{title}</h1>
			</span>

			<span>
				<p>{prevText}</p>
			</span>

			<button onClick={() => navigate(`/noticias/${id}`)}>{buttonText}</button>
		</div>
	);
};

export default Noticias;
