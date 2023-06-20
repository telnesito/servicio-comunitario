import { Box, Typography } from "@mui/material"

const CardOrganigrama = ({ workers }) => {

  const boxRight = {

    display: 'flex',
    width: '98%',
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px'
  }

  const boxLeft = {

    display: 'flex',
    width: '98%',
    flexDirection: 'row-reverse',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    ml: '10px'
  }

  const textRight = {
    display: 'flex',
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'end',
    color: 'black'

  }
  const textLeft = {
    display: 'flex',
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'initial',
    color: 'black'
  }

  return (
    <Box
      height={'auto'}
      padding={'20px'}
      bgcolor={'var(--backgroundColor)'}
      display={'flex'}
      flexWrap={'wrap'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'20px'}
    >
      {workers ? workers.map(({ nombres, apellidos, img, cargo }, index) => {
        return (


          <Box key={index}
            boxShadow={'-6px -5px 10px #00000050'}
            borderBottom={'3px solid var(--primaryColor)'}
            borderRight={'5px solid var(--primaryColor)'}
            borderRadius={'8px'}
            width={'35%'}
            minWidth={'400px'}
            bgcolor={'white'}
            height={'80px'}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(194, 164, 54, 0.6)',
                transition: 'all .5s',
                cursor: 'pointer'
              }
            }}
          >
            <Box
              sx={index % 2 === 0 ? boxRight : boxLeft}
            >
              <Box
                sx={index % 2 === 0 ? textRight : textLeft}
              >

                <Typography fontWeight={700}>{cargo}</Typography>
                <Typography>{nombres + " " + apellidos}</Typography>

              </Box>
              <img style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                overflow: 'hidden'
              }} src={img} alt={nombres}></img>
            </Box>
          </Box>
        )
      }

      )
        : <Typography>Cargando</Typography>
      }

    </Box>
  )
}

export default CardOrganigrama