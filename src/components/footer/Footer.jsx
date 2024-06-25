import {Box, Container, Typography} from "@mui/material";

const sx_footer = {
    layout: {
        backgroundColor:'rgba(0,0,0,0.54)',
        display:'flex',
        height: {xs:"", md:'100px'},
        justifyContent:'center',
        alignItems: 'center',
    },
    content:{
        backgroundColor:'#222121',
        width:'100%',
        height:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    }
}


const Footer = () => {
    return(
        <footer>
            <Box sx={{...sx_footer.layout}}>
                <Box sx={{...sx_footer.content}}>
                    <Container maxWidth="md">
                            <Typography variant="body1" color="inherit" sx={{textAlign:'center'}}>
                                © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.
                            </Typography>
                    </Container>
                </Box>
            </Box>

        </footer>
    )
}

export default Footer;