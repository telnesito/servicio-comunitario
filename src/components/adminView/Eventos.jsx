import { Box, Button, Paper, TextField, Typography, Snackbar, Alert, CardContent, Card, CardActions, Tab, Tabs, TableHead, TableRow, TableCell, Table, TableBody } from "@mui/material";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toolbarOptions } from "../../utils/functions/toolbarOptions";
import { createArticle } from "../../api/articleManage";
import { deleteArticle, getArticleById, getArticles } from "../../api/articleManage";
import parse from 'html-react-parser';
import NavBar from "./NavBar";
import { useNavigate } from "react-router";
import useModal from "../../hooks/useModal";
import ConfirmAction from "../ConfirmAction";

const Eventos = () => {
	const [value, setValue] = useState("");
	const handleEditorText = (text) => setValue(text);
	const [open, setOpen] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);
	const currentDate = new Date();
	const [titulo, setTitulo] = useState('')
	const [eventos, setEventos] = useState([])
	const navigate = useNavigate()
	const [idToDelete, setIdToDelete] = useState('')

	const { closeModal, open: isOpen, openModal } = useModal()

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	useEffect(() => {
		getArticles((eventos) => {
			setEventos(eventos);

		}, "eventos");

	}, []);

	const handleDelete = async () => {
		await deleteArticle(idToDelete, 'eventos')
	}

	const onSubmit = async (e) => {
		e.preventDefault()
		setOpen(true)
		const error = await createArticle(

			// "Febrero 19, 2023" TODO aquí poner los datos de los input del title, description y date
			{
				title: titulo,
				date: `${currentDate.getDate()} / ${currentDate.getMonth() + 1} / ${currentDate.getFullYear()}`,
				spoiler: value
			},
			"eventos",
			selectedFile
		);

		setTitulo('')
		setValue('')
		setSelectedFile([])
		if (error) {
			console.log("error papa");
		}
	};
	const handleTitle = ({ target }) => setTitulo(target.value)

	const [tabIndex, setTabIndex] = useState(0);

	const handleChange = (event, newValue) => {
		setTabIndex(newValue);
	};

	return (
		<Box
			display={"flex"}
			flexDirection={"column"}
			alignItems={"center"}
			width={"100%"}
			height={"auto"}
			minHeight={"750px"}
			bgcolor={"var(--backgroundColor)"}
		>
			<NavBar title={'Eventos'} />

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
				<Tab label="Agregar evento" />
				<Tab label="Ver evento" />

			</Tabs>
			{tabIndex === 0 && <>



				<Box component={'form'} onSubmit={onSubmit} boxSizing={'border-box'} width={"90%"} height={"auto"} color={"black"}>
					<Paper sx={{ padding: "10px", height: "auto" }} elevation={1}>
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
							required
							variant="standard"
							placeholder="Ingrese titulo del evento"
							fullWidth
							value={titulo}
							onChange={handleTitle}

						></TextField>
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
							style={{ height: "250px", maxWidth: '1000px' }}
							modules={toolbarOptions}
							theme="snow"

						/>

						<Box mt={'60px'}>

							<TextField required onChange={handleFileChange} type="file" />
						</Box>
						<Button
							type="submit"
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


			</>}
			{tabIndex === 1 && <>
				<Box
					alignItems={"center"}
					flexWrap={'wrap'}
					gap={"30px"}
					pb={'15px'}
					width={'100%'}
					maxHeight={'550px'}
					overflow={'auto'}
					display={"flex"}
					justifyContent={"center"}


				>
					{eventos !== undefined ? (
						<>
							<Table
								sx={{
									borderRadius: '5px',
									width: '90%',
									bgcolor: 'background.paper'
								}}
							>
								<TableHead>
									<TableRow>
										<TableCell
											sx={{
												width: '10%'
											}}
										>
											<b>
												Titulo

											</b>
										</TableCell>
										<TableCell>

											<b>
												Spoiler

											</b>
										</TableCell>
										<TableCell
											sx={{
												width: '15%'
											}}
										>

											<b>

												Fecha
											</b>
										</TableCell>
										<TableCell>

											<b>
												Accion

											</b>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody

								>
									{eventos.map(({ title, id, spoiler, date }) => (
										<TableRow key={id}>
											<TableCell>
												{title}

											</TableCell>

											<TableCell>
												{parse(spoiler.slice(0, 100))}...
											</TableCell>
											<TableCell>
												{date}
											</TableCell>

											<TableCell>
												<Box display={'flex'} gap={'10px'} alignItems={'center'} height={'50px'}>
													<Button
														size="small"
														color="error"
														sx={{
															color: "white",
														}}
														variant="contained"
														onClick={() => {

															setIdToDelete(id)
															openModal()
														}}

													>
														Eliminar
													</Button>
													<Button size="small" variant="outlined" onClick={() => navigate(`/eventos/${id}	`)}>Ver</Button>
												</Box>
											</TableCell>



										</TableRow>


									))}
								</TableBody>
							</Table>
						</>
					) : (
						<Typography>No hay noticias</Typography>
					)}
				</Box>

			</>}







			<ConfirmAction open={isOpen} onClose={closeModal} action={handleDelete} target={'evento'} />

			{console.log(idToDelete)}

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
