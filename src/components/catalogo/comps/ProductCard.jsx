/* eslint-disable react/prop-types */

import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia, Divider,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";





const ProductCard = ({ item }) => {
    const background =   'radial-gradient(circle at 50% -20.71%, #cbe7e1 0, #cae7e3 6.25%, #c9e7e6 12.5%, #c9e7e8 18.75%, #c9e7eb 25%, #c9e7ed 31.25%, #cae6ef 37.5%, #cbe6f1 43.75%, #cde5f2 50%, #cfe4f3 56.25%, #d1e4f4 62.5%, #d4e3f5 68.75%, #d7e2f5 75%, #dae1f5 81.25%, #dde0f4 87.5%, #e0e0f4 93.75%, #e3dff2 100%)';
    const navigate = useNavigate();




    const sx_cardsGrid = {

        cardLayout:{
            width: { xs: '300px', md: '300px', lg: '310px' },
            height:{ xs: '260px', md: '260px', lg: '400px' },
            padding:'0px',
            cursor:'pointer',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
            transition: 'transform .3s ease-in-out',
            backgroundImage:background,
            border: '3px solid #fff',
            color:'#636363',
            '&:hover': {
                transform: 'scale(1.05)',
                transition: 'transform .3s ease-in-out',
            },


        },
        card_content:{
            padding:'0px',
            display:'flex',
            flexDirection:'column',


        },
        box_title:{
            padding:{xs:'',md:"10px"},
            backgroundImage:  'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
                '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
                '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
        },
        title:{
            fontFamily:'Tisa Sans Pro Bold',
            textAlign:'center',

        },
        box_img:{
            width:'100%',
            backgroundImage: 'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
                '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
                '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
            objectFit: 'contain'
        },
        img:{

           height:'200px',
            width:'100%',
            objectFit: 'cover',


        },
        box_description:{
            display:'flex',
            flexWrap:'wrap',
            gap:{xs:'',md:'5px'},

            justifyContent:'center',
            alignItems:'center',
            width:'100%',


        },
        list_item:{
            display:'flex',
            justifyContent: 'center',
            textAlign:'center',
            padding:'0',
            gap:'1px',
        },

        description_bold:{
            fontFamily:'Tisa Sans Pro Regular',
            fontWeight: 'bold',
            lineHeight: '1.5',
            fontSize:'13px',
            textAlign:'center'

        },
        description_regular:{
            fontFamily:'Tisa Sans Pro Regular',
            fontWeight: 'normal',
            lineHeight: '1.5',
            fontSize:'13px',
            textAlign:'center'
        }


    }


    const goTo = (id) =>  {
        navigate(`/producto/${id}`);
    }

    return(
        <>
            <Card sx={{...sx_cardsGrid.cardLayout, }} onClick={()=>{goTo(item.id)}} >
                <CardContent sx={{...sx_cardsGrid.card_content,}} style={{ padding:"0px"}}>
                    <Box sx={{...sx_cardsGrid.box_title, }}>

                        <Typography sx={{...sx_cardsGrid.title, }}>{item.titulo}</Typography>
                    </Box>
                    <Box sx={{...sx_cardsGrid.box_img, }}>
                        <CardMedia
                            component="img"
                            height="30%"
                            image= {item.img}
                            alt="Paella dish"
                            sx={{...sx_cardsGrid.img}}
                        />
                    </Box>
                    <Box sx={{...sx_cardsGrid.box_description }}>
                        <List sx={{width:'100%',display:'flex',flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                            <ListItem sx={{...sx_cardsGrid.list_item, width:{xs:'',md:'100%'},paddingBottom:{xs:'',md:'5px'} }}>
                                <Typography sx={{ ...sx_cardsGrid.description_bold, width:'100%', textAlign:'center'}}>{item.marca}</Typography>
                            </ListItem>
                            <Divider sx={{width:'100%', height:'2px',backgroundColor:'#fff'}}/>
                            <ListItem sx={{...sx_cardsGrid.list_item, width: '50%',padding:'5px'}}>
                                <Typography sx={{...sx_cardsGrid.description_bold,}}>Género: </Typography>
                                <Typography style={{...sx_cardsGrid.description_regular}}>{item.Categoria}</Typography>
                            </ListItem>
                            <ListItem sx={{...sx_cardsGrid.list_item, width:'50%'}}>
                                <Typography sx={{ ...sx_cardsGrid.description_bold, }}>Precio:</Typography>
                                <Typography sx={{...sx_cardsGrid.description_regular}}>{item.precio}</Typography>
                            </ListItem>
                            <Divider sx={{width:'100%', height:'2px',backgroundColor:'#fff'}}/>
                            <ListItem  sx={{...sx_cardsGrid.list_item,   width:'50%',padding:'5px'}}>
                                <Typography sx={{ ...sx_cardsGrid.description_bold, }}>Stock:</Typography>
                                <Typography sx={{...sx_cardsGrid.description_regular}}>{item.stock}</Typography>
                            </ListItem>
                            <ListItem  sx={{...sx_cardsGrid.list_item , width:'50%'}}>
                                <Typography sx={{ ...sx_cardsGrid.description_bold, }}>Reseñas:</Typography>
                                <Typography sx={{...sx_cardsGrid.description_regular}}>5 puntos</Typography>
                            </ListItem>
                        </List>
                    </Box>



                </CardContent>
                <Divider sx={{width:'100%', height:'2px',backgroundColor:'#b1afaf'}}/>
            </Card>





   </>

    )
}



export default ProductCard;