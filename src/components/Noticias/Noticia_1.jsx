import { Box, Typography } from "@mui/material";
import Header from "../header/Header";
import Foother from "../foother/Foother";
import ScrollToTop from "../../utils/ScrollToTop";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getArticleById } from "../../api/articleManage";

const Noticia_1 = () => {
	const { id } = useParams();
	const [article, setArticle] = useState(null);

	useEffect(() => {
		console.log(id);
		const getArticle = async () => {
			const aux = await getArticleById(id, "eventos");
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
				<Box width={"80%"} textAlign={"left"}>
					<Typography width={"90%"} variant="h3">
						{article.title}
					</Typography>
					<Typography width={"90%"} variant="body2">
						{article.date}
					</Typography>
				</Box>
			</Box>
			<Foother />
		</Box>
	);
};

export default Noticia_1;
