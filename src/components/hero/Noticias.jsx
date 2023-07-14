import "./Hero.css";
import { useNavigate } from "react-router";
import { Box, Button, Typography } from "@mui/material";
const Noticias = ({ id, title, prevText, buttonText }) => {
	const navigate = useNavigate();
	return (
		<Box sx={{
			"display": "flex",
			"flexDirection": "column",
			"justifyContent": "center",
			"width": "100%",
			"height": "550px",
			"marginLeft": "50px"
		}}>
			<Box
				textAlign={'left'}
				className="hero-info-title">
				<Typography
					position={'relative'}
					bottom={'-20px'}
					fontSize={'1.5rem'}
					fontWeight={'bold'}>COLEGIO METROPOLITANO</Typography>
				<Typography
					fontSize={'3rem'} fontWeight={'bold'}
				>{title}</Typography>
			</Box>

			<Box textAlign={'justify'} width={'80%'}>{prevText}</Box>

			<Button sx={{
				width: '200px',
				height: '50px',
				color: 'white'
			}} color="secondary" variant="contained" onClick={() => navigate(`/noticias/${id}`)}>{buttonText}</Button>
		</Box>
	);
};

export default Noticias;
