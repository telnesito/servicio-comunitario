import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Aos from "aos";
import { createArticle, getArticles } from "../../api/articleManage";
import { toolbarOptions } from "../../utils/functions/toolbarOptions";

const Noticias = () => {
	const [noticias, setNoticias] = useState([]);

	useEffect(() => {
		getArticles((noticias) => {
			setNoticias(noticias);
		}, "noticias");

		Aos.init({ duration: 1000 });
	}, []);

	// Guardar valor
	const [value, setValue] = useState("");
	// Manejador que muestra el texto que se va escrbiendo
	const handleEditorText = (text) => {
		setValue(text);
		console.log(value);
	};

	const onSubmit = async () => {
		const error = await createArticle(
			//TODO aquí poner los datos de la noticia
			{ title: "Genocidio", spoiler: "wawawawa", date: "Febrero 30, 2222" },
			"noticias"
		);
		if (error) {
			console.log("error papa");
		}
	};

	return (
		// Contenedor general
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			width={"80%"}
			height={"100vh"}
			minHeight={"700px"}
			bgcolor={"var(--backgroundColor)"}
		>
			{/* Titulo */}
			<Box padding={"10px"} width={"95%"}>
				<Paper elevation={1} sx={{ padding: "10px" }}>
					<Typography
						padding={"5px"}
						variant="h6"
						width={"100%"}
						fontWeight={"700"}
						color={"var(--primaryColor)"}
					>
						Título
					</Typography>
					<TextField
						placeholder="Ingrese título de la noticia"
						fullWidth
					></TextField>
				</Paper>
			</Box>
			<Box width={"95%"} height={"450px"} color={"black"}>
				<Paper sx={{ padding: "10px", height: "400px" }} elevation={1}>
					<Box sx={{ display: "flex" }}>
						<Typography
							fontWeight={"700"}
							color={"var(--primaryColor)"}
							padding={"5px"}
							variant="h6"
							width={"100%"}
						>
							Descripción
						</Typography>
						<Button
							size="small"
							onClick={onSubmit}
							sx={{ m: "10px", bgcolor: "var(--primaryColor)" }}
							variant="contained"
						>
							Subir
						</Button>
					</Box>
					{/* Editor de texto */}
					<ReactQuill
						value={value}
						onChange={handleEditorText}
						placeholder="Ingrese la descripcion"
						style={{ height: "310px" }}
						modules={toolbarOptions}
						theme="snow"
					/>
				</Paper>
			</Box>

			{/* Cartas */}
			<Box
				alignItems={"center"}
				gap={"30px"}
				height={"270px"}
				display={"flex"}
				justifyContent={"center"}
			>
				{noticias !== undefined ? (
					<>
						{noticias.map(({ title, id, spoiler }) => (
							<Card
								sx={{ width: "30%", height: "180px" }}
								elevation={1}
								key={id}
							>
								<CardContent>
									<Typography variant="h6">{title}</Typography>
									<Typography variant="body2">
										{spoiler.slice(0, 100)}...
									</Typography>
									<CardActions>
										<Button
											sx={{ mt: "10px", bgcolor: "var(--primaryColor)" }}
											variant="contained"
										>
											Subir
										</Button>
										<Button
											sx={{
												mt: "10px",
												borderColor: "var(--primaryColor)",
												color: "var(--primaryColor)",
											}}
											variant="outlined"
										>
											Actualizar
										</Button>
									</CardActions>
								</CardContent>
							</Card>
						))}
					</>
				) : (
					<Typography>No hay noticias</Typography>
				)}
			</Box>
		</Box>
	);
};

export default Noticias;
