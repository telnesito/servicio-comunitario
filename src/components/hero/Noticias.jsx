import "./Hero.css";
import { useNavigate } from "react-router";
import { Box, Button, Typography } from "@mui/material";
const Noticias = ({ id, title, prevText, buttonText }) => {
	const navigate = useNavigate();
	return (
		<Box
			className="principalHero"
			sx={{
				"display": "flex",
				"flexDirection": "column",
				"justifyContent": "center",
				"width": "100%",
				"height": "550px",
				"marginLeft": "50px",
				gap: '20px'
			}}>
			<Box
				textAlign={'left'}

			>
				<Typography
					width={'80%'}

					sx={{
						overflowWrap: 'break-word',
					}}
					fontSize={'1.5rem'}
					fontWeight={'bold'}>COLEGIO METROPOLITANO</Typography>
				<Typography
					width={'80%'}
					sx={{
						overflowWrap: 'break-word',
						lineHeight: '1',
						fontSize: {
							xl: '3rem',
							lg: '3rem',
							md: '3rem',
							sm: '2rem',
							xs: '2rem'
						}
					}}
					fontSize={'3rem'} fontWeight={'bold'}
				>{title}</Typography>
			</Box>

			<Box className="prob" sx={{

			}} width={'80%'}>{prevText}</Box>

			<Button sx={{
				width: '200px',
				height: '50px',
				color: 'white'
			}} color="secondary" variant="contained" onClick={() => navigate(`/noticias/${id}`)}>{buttonText}</Button>
		</Box>
	);
};

export default Noticias;
