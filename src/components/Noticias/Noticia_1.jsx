import { Box, Typography } from "@mui/material";
import Header from "../header/Header";
import Foother from "../foother/Foother";
import ScrollToTop from "../../utils/ScrollToTop";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getArticleById, getArticles } from "../../api/articleManage";
import parse from 'html-react-parser';
const Noticia_1 = ({ articleType }) => {
	const { id } = useParams();
	const [article, setArticle] = useState();
	const [eventos, setEventos] = useState([])
	const [noticias, setNoticias] = useState([])
	useEffect(() => {
		const getArticle = async () => {
			const aux = await getArticleById(id, articleType);
			setArticle(aux);
			console.log(article);
		};

		getArticles((noticia) => {
			setNoticias(noticia);
		}, "noticias");

		getArticles((evento) => {
			setEventos(evento)

		}, "eventos")

		getArticle();
	}, []);

	console.log(noticias)
	console.log(eventos)


	return (
		<Box
			width={'100vw'}
		>
			<Header />
			<ScrollToTop />
			<Box
				display={'flex'}
				sx={{
					flexDirection: {
						lg: 'row',
						xl: 'row',
						md: 'row',
						sm: 'column',
						xs: 'column'
					}
				}}

				justifyContent={'center'}
				bgcolor={"var(--backgroundColor)"}

			>

				<Box
					sx={{
						width: {
							xl: '60%',
							lg: '60%',
							md: '60%',
							sm: '90%',
							xs: '90%'

						}
					}}
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
						<Box
							display={'flex'}
							flexDirection={'column'}
							alignItems={'center'}
							width={"100%"} textAlign={"left"}>

							<Typography width={"90%"} variant="h3">
								{article.title}
							</Typography>
							<Box width={"90%"}>
								{parse(article.spoiler)}
							</Box>
						</Box>
					) : (
						<>No existe el articulo</>
					)}

				</Box>
				<Box
					sx={{
						width: {
							xl: '20%',
							lg: '20%',
							md: '20%',
							sm: '90%',
							xs: '90%'

						}
					}}
					bgcolor={'var(--backgroundColor)'}
					width={'20%'}
					color={'black'}
					borderLeft={'1px solid #00000020'}
					height={'auto'}
					pb={'20px'}
				>
					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						// bgcolor={'white'}
						height={'80px'}
					>
						<Typography
							width={'90%'}
							variant="h6"
							fontWeight={'700'}
							textAlign={'left'}
						>Principales noticias</Typography>
					</Box>

					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						flexDirection={'column'}
						gap={'10px'}
					>

						{noticias.map(({ id, title, spoiler, date }) =>

							<Box key={id}
								justifyContent={'center'}
								display={'flex'}
								flexDirection={'column'}
								width={'85%'}
								color={'black'}
								href={`/noticias/${id}`}
								component={'a'}
								sx={{
									"&:hover": {
										textDecoration: 'underline'
									}
								}}
							>
								<Typography
									variant="body1"
									fontWeight={'700'}
								>{title}</Typography>
								<Typography

									variant="body2" component={'div'}

								>{parse(spoiler.trim().slice(0, 70))}</Typography>

								<Typography
									color={'gray'}
									fontSize={'12px'} component={'div'}


								>{date}</Typography>

							</Box>
						)
						}

					</Box>




					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						// bgcolor={'white'}
						height={'80px'}
					>
						<Typography
							width={'90%'}
							variant="h6"
							fontWeight={'700'}
							textAlign={'left'}
						>Principales eventos</Typography>
					</Box>

					<Box
						display={'flex'}
						alignItems={'center'}
						justifyContent={'center'}
						flexDirection={'column'}
					// bgcolor={'white'}
					>
						{
							eventos.map(({ id, title, date }) =>

								<Box key={id}
									justifyContent={'center'}
									padding={'10px'}
									display={'flex'}
									flexDirection={'column'}
									width={'85%'}
									component={'a'}
									href={`/eventos/${id}`}

									sx={{
										"&:hover": {
											textDecoration: 'underline',
											cursor: 'pointer',
											color: 'white'
										}
									}}
								>

									<Box

										padding={'20px'}
										sx={{
											width: {
												xs: '90%'
											}
										}}
										display={'flex'}
										alignItems={'center'}
										bgcolor={'var(--primaryColor)'}
									>

										<Box>
											<Typography
												ml={'10px'}
												variant="body1"
												color={'white'}
												fontWeight={'700'}
											>{title}</Typography>

											<Typography
												ml={'10px'}
												variant="body2"
												color={'white'}
											>{date}</Typography>
										</Box>

									</Box>
								</Box>
							)
						}


					</Box>
				</Box>


			</Box>
			<Foother />
		</Box>
	);
};

export default Noticia_1;
