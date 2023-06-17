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
import { createArticle, deleteArticle, getArticleById, getArticles, updateArticle } from "../../api/articleManage";
import { toolbarOptions } from "../../utils/functions/toolbarOptions";
import parse from 'html-react-parser';

const Noticias = () => {
	const [noticias, setNoticias] = useState([]);
	const currentDate = new Date();
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
			{ title: titulo, spoiler: value, date: `${currentDate.getMonth()} -  ${currentDate.getDate()} - ${currentDate.getFullYear()}` },
			"noticias"
		);
		if (error) {
			console.log("error papa");
		}
	};
	const [titulo, setTitulo] = useState('')

	const handleUpdate = async (id) => {
		const noticia = await getArticleById(id, "noticias")
		setTitulo(noticia.title)
		setValue(noticia.spoiler)

		const error = await updateArticle({ title: titulo, spoiler: value }, 'noticias', id)


		if (error) {
			console.log("error papa");
		}

	}

	const handleDelete = async (id) => {
		await deleteArticle(id, 'noticias')

	}

	return (
		// Contenedor general
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			width={"80%"}
			height={"auto"}
			minHeight={"800px"}
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
						value={titulo}
						onChange={({ target }) => setTitulo(target.value)}
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
				flexWrap={'wrap'}
				gap={"30px"}
				height={"auto"}
				pb={'15px'}
				width={'95%'}
				display={"flex"}
				justifyContent={"center"}


			>
				{noticias !== undefined ? (
					<>
						{noticias.map(({ title, id, spoiler }) => (
							<Card
								sx={{ width: "300px", height: "180px" }}
								elevation={1}
								key={id}
							>
								<CardContent>
									<Typography variant="h6">{title.slice(0, 15)}</Typography>
									<Box height={'60px'}
										overflow={'hidden'}
									>
										{parse(spoiler.trim().slice(0, 100))}
									</Box>

									<CardActions>
										<Button
											sx={{ mt: "10px", bgcolor: "var(--primaryColor)" }}
											variant="contained"
											onClick={() => handleUpdate(id)}
										>
											Editar
										</Button>
										<Button
											sx={{
												mt: "10px",
												borderColor: "var(--primaryColor)",
												color: "var(--primaryColor)",
											}}
											variant="outlined"
											onClick={() => handleDelete(id)}
										>
											Eliminar
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
