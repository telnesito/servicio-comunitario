import { Box, Button, Paper, TextField, Typography, Snackbar, Alert, CardContent, Card, CardActions } from "@mui/material";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toolbarOptions } from "../../utils/functions/toolbarOptions";
import { createArticle } from "../../api/articleManage";
import { deleteArticle, getArticleById, getArticles } from "../../api/articleManage";
import parse from 'html-react-parser';

const Eventos = () => {
	const [value, setValue] = useState("");
	const handleEditorText = (text) => setValue(text);
	const [open, setOpen] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);
	const currentDate = new Date();
	const [titulo, setTitulo] = useState('')
	const [eventos, setEventos] = useState([])

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	useEffect(() => {
		getArticles((eventos) => {
			setEventos(eventos);

		}, "eventos");

	}, []);

	const handleDelete = async (id) => {
		await deleteArticle(id, 'eventos')

	}

	const onSubmit = async () => {
		setOpen(true)
		const error = await createArticle(

			// "Febrero 19, 2023" TODO aquí poner los datos de los input del title, description y date
			{
				title: titulo,
				date: `${currentDate.getMonth()} -  ${currentDate.getDate()} - ${currentDate.getFullYear()}`,
				spoiler: value
			},
			"eventos",
			selectedFile
		);
		if (error) {
			console.log("error papa");
		}
	};
	const handleTitle = ({ target }) => setTitulo(target.value)

	return (
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
						Titulo
					</Typography>
					<TextField
						placeholder="Ingrese titulo del evento"
						fullWidth
						value={titulo}
						onChange={handleTitle}

					></TextField>
				</Paper>
			</Box>

			<Box width={"95%"} height={"450px"} color={"black"}>
				<Paper sx={{ padding: "10px", height: "400px" }} elevation={1}>
					<Typography
						fontWeight={"700"}
						color={"var(--primaryColor)"}
						padding={"5px"}
						variant="h6"
						width={"100%"}
					>
						Descripcion
					</Typography>
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
			<Box height={'200px'} width={'95%'} flexDirection={'column'} display={"flex"}>

				<Paper sx={{ padding: "10px" }} elevation={1}>
					<Box>
						<Typography
							padding={"5px"}
							variant="h6"
							width={"100%"}
							fontWeight={"700"}
							color={"var(--primaryColor)"}
						>
							Imagen principal
						</Typography>
						<TextField onChange={handleFileChange} type="file" />
					</Box>
					<Button
						onClick={onSubmit}
						sx={{
							mt: "10px",
							ml: "10px",
							bgcolor: "var(--primaryColor)",
							color: "white",
						}}
						variant="contained"
					>
						Publicar
					</Button>
				</Paper>
			</Box>
			<Box
				alignItems={"center"}
				flexWrap={'wrap'}
				gap={"30px"}
				height={"auto"}
				// mt={'180px'}
				pb={'15px'}
				width={'95%'}
				display={"flex"}
				justifyContent={"center"}


			>
				{eventos !== undefined ? (
					<>
						{eventos.map(({ title, id, spoiler }) => (
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
											sx={{
												mt: "10px",
												bgcolor: "var(--primaryColor)",
												color: "white",
											}}
											variant="contained"
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



			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={() => setOpen(false)}

			>

				<Alert severity="success">
					Evento publicado!
				</Alert>
			</Snackbar>
		</Box>
	);
};

export default Eventos;
