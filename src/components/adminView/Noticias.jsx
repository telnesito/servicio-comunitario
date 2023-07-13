import {

	Box,
	Button,
	Card,
	CardActions,
	CardContent,

	Paper,
	Tab,
	Tabs,
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
import NavBar from "./NavBar";
import useModal from "../../hooks/useModal";
import ConfirmAction from "../ConfirmAction";

const Noticias = () => {
	const [noticias, setNoticias] = useState([]);
	const currentDate = new Date();
	const { closeModal, open, openModal } = useModal()
	const [idToDelete, setidToDelete] = useState('')
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

	const onSubmit = async (e) => {
		e.preventDefault()
		const error = await createArticle(
			//TODO aquí poner los datos de la noticia
			{ title: titulo, spoiler: value, date: `${currentDate.getMonth()} -  ${currentDate.getDate()} - ${currentDate.getFullYear()}` },
			"noticias"
		);
		if (error) {
			console.log("error papa");
		}
		setTitulo('')
		setValue('')
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

	const handleDelete = async () => {
		await deleteArticle(idToDelete, 'noticias')

	}

	const [tabIndex, setTabIndex] = useState(0);

	const handleChange = (event, newValue) => {
		setTabIndex(newValue);
	};

	return (
		// Contenedor general
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			width={"100%"}
			height={"auto"}
			minHeight={"750px"}
			bgcolor={"var(--backgroundColor)"}

		>
			<NavBar title={'Noticias'} />

			{/* Titulo */}

			<Tabs sx={{
				mt: '20px',
				mb: '20px',
				bgcolor: 'background.paper',
				width: '90%',
				borderRadius: '5px',
				color: 'black',
			}}
				variant="fullWidth"

				value={tabIndex} onChange={handleChange}>
				<Tab label="Agregar noticias" />
				<Tab label="Ver noticias" />

			</Tabs>

			{tabIndex === 0 && <>
				<Box pb={'20px'} width={"90%"}>
					<Paper component={'form'} onSubmit={onSubmit} elevation={1} sx={{ padding: "10px" }}>

						<Typography
							variant="h6"
							width={"100%"}
							fontWeight={"700"}
							color={"var(--primaryColor)"}
						>
							Título
						</Typography>
						<Box
							display={'flex'}
							alignItems={'center'}
						>
							<TextField
								required
								placeholder="Ingrese título de la noticia"
								sx={{
									width: '90%'
								}}
								value={titulo}
								variant="standard"
								onChange={({ target }) => setTitulo(target.value)}
							></TextField>
							<Button

								size="small"
								type="submit"
								sx={{ m: "10px", bgcolor: "var(--primaryColor)", width: '10%' }}
								variant="contained"
							>
								Subir
							</Button>
						</Box>
					</Paper>
				</Box>
				<Box width={"90%"} height={"450px"} color={"black"}>
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

						</Box>
						{/* Editor de texto */}
						<ReactQuill
							value={value}
							onChange={handleEditorText}
							placeholder="Ingrese la descripcion"
							style={{ height: "310px", maxWidth: '1000px' }}
							modules={toolbarOptions}
							theme="snow"
						/>


					</Paper>

				</Box>

			</>}
			{tabIndex === 1 && <>
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
												onClick={() => {
													setidToDelete(id)
													openModal()

												}}
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

					<ConfirmAction action={handleDelete} open={open} onClose={closeModal} target={'noticia'} />
				</Box>
			</>}





		</Box>
	);
};

export default Noticias;
