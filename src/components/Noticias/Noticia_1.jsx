import { Box, Typography } from "@mui/material";
import Header from "../header/Header";
import Foother from "../foother/Foother";
import ScrollToTop from "../../utils/ScrollToTop";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getArticleById } from "../../api/articleManage";

const Noticia_1 = ({ articleType }) => {
	const { id } = useParams();
	const [article, setArticle] = useState();

	useEffect(() => {
		const getArticle = async () => {
			const aux = await getArticleById(id, articleType);
			setArticle(aux);
			console.log(article);
		};

		getArticle();
	}, []);

	return (
		<Box>
			<Header />
			<ScrollToTop />
			<Box
				width={"100%"}
				color={"black"}
				bgcolor={"var(--backgroundColor)"}
				display={"flex"}
				justifyContent={"center"}
				paddingBottom={"20px"}
				height={"auto"}
				minHeight={"400px"}
				paddingTop={"20px"}
			>
				{article !== undefined ? (
					<Box width={"80%"} textAlign={"left"}>
						<Typography width={"90%"} variant="h3">
							{article.title}
						</Typography>
						<Typography width={"90%"} variant="body2">
							{article.description}
						</Typography>
					</Box>
				) : (
					<>No existe el articulo</>
				)}
			</Box>
			<Foother />
		</Box>
	);
};

export default Noticia_1;
