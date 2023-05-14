import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toolbarOptions } from "../../utils/functions/toolbarOptions";
import EventosModal from "./EventosModal";
import { createArticle } from "../../api/articleManage";

const Eventos = () => {
	const [value, setValue] = useState("");
	const handleEditorText = (text) => setValue(text);
	const [open, setOpen] = useState(false);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		setSelectedFile(file);
	};

	const onSubmit = async () => {
		const error = await createArticle(
			//TODO aquí poner los datos de los input del title, description y date
			{
				title: "Carvanal",
				date: "Febrero 19, 2023",
			},
			"eventos",
			selectedFile
		);
		if (error) {
			console.log("error papa");
		}
	};

	return (
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
						Titulo
					</Typography>
					<TextField
						placeholder="Ingrese titulo del evento"
						fullWidth
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
				<Box gap={"10px"} display={"flex"}>
					<Paper sx={{ padding: "10px", mt: "10px" }} elevation={1}>
						<Box>
							<Typography
								padding={"5px"}
								variant="h6"
								width={"100%"}
								fontWeight={"700"}
								color={"var(--primaryColor)"}
							>
								Fecha
							</Typography>
							<TextField type="date" />
						</Box>
					</Paper>
					<Paper sx={{ padding: "10px", mt: "10px" }} elevation={1}>
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
					</Paper>
				</Box>
				<Button
					sx={{ mt: "10px", bgcolor: "var(--primaryColor)" }}
					onClick={() => setOpen(true)}
					variant="contained"
				>
					Publicar
				</Button>

				<Button
					onClick={onSubmit}
					sx={{
						mt: "10px",
						ml: "10px",
						borderColor: "var(--primaryColor)",
						color: "var(--primaryColor)",
					}}
					variant="outlined"
				>
					Guardar
				</Button>
			</Box>

			<EventosModal open={open} setOpen={setOpen} />
		</Box>
	);
};

export default Eventos;
