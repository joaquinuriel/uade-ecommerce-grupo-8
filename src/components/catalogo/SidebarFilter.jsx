import {Box, Button, createTheme, ThemeProvider, Typography} from "@mui/material";
import {data_navbar} from "../../utils/data_components/data.js";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState} from "react";

import '../../assets/fonts/Tisa/Tisa.css'
import '../../assets/fonts/Inter/Inter.css'
const theme = createTheme({
    typography: {
        fontFamily: 'Tisa Sans Pro Regular',
        fontSize:'15px',


    },
});




const SidebarFilter = (props) => {
    const [filter,setFIlter] = useState(false);
    const [checked, setChecked] = useState(false);
    // eslint-disable-next-line react/prop-types
    const { dictionary, addWord, removeWord } = props;

    const sideBar_sx = {
        layout:{
            display:{xs:'',md:"flex"},
            backgroundImage:  'radial-gradient(circle at 50% -20.71%, #bae0e6 0, #bbe0e9 6.25%, #bcdfeb 12.5%, ' +
                              '#bedfed 18.75%, #c0deef 25%, #c3ddf0 31.25%, #c6dcf1 37.5%, #c9dbf2 43.75%, #cddaf2 50%, #d1d9f2 56.25%, ' +
                              '#d5d8f1 62.5%, #d9d7f0 68.75%, #ddd6ee 75%, #e1d5ed 81.25%, #e4d4ea 87.5%, #e8d3e8 93.75%, #ebd2e5 100%)',
            flexDirection:'column',
            justifyContent:'center',

            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        },
        apply:{
            display:{xs:'',md:'flex'},
            justifyContent: {xs:'',md:'end'},
            padding:{xs:'',md:"10px"},
            paddingRight:{xs:'',md:"12px"},
            alignItems:'center',

            borderBottom:{xs:'',md:"2px solid #e4e4e4"},
        },
        button:{
            color:'#636363',
            border:'1px solid #fffefe',

            marginRight:'10px',
        },
        types:{
            display:{xs:'',md:"flex"},
            flexDirection:'column',
            gap:'20px',
            padding:{xs:'',md:"20px"},
        },
        title:{
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            padding:{md:'5px'},
            border:{xs:'',md:"2px solid #e4e4e4"},
            display:'flex',
        },
        category:{
            display:{xs:'',md:"flex"},
            flexDirection:'column',
            gap:{xs:'',md:'5px'},
            border:{xs:'',md:"2px solid #e4e4e4"},
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',

        },
        item_category:{
            display:{xs:'',md:"flex"},
            flexDirection:'column',
            padding:{xs:'',md:'10px'}
        },
        title_2:{
            fontFamily:'Tisa Sans Pro Regular',
            fontSize:'15px',
            display:'flex',
            justifyContent:'center',
            alignItems: 'center',
            color:'#636363',
        }
    }

    const handleChange = (event,title, tag) => {
        setChecked(event.target.checked);
        if (event.target.checked) {
            addWord(title,tag)
        }
        else{
            removeWord(title,tag);
        }
    }

    const capitalize = (tag) => {
        return tag.charAt(0).toUpperCase() + tag.slice(1);
    }

    return(
        <Box sx={{...sideBar_sx.layout}}>
            <Box sx={{...sideBar_sx.apply}}>
                <Button sx={{...sideBar_sx.button}}>Aplicar</Button>
            </Box>
            <Box sx={{...sideBar_sx.types}}>
                <Box sx={{...sideBar_sx.title}}>
                    <Typography sx={{color:'#636363',}}>Filtrar por:</Typography>
                </Box>
                {
                    data_navbar.map((item, i) => (

                        <Box key={i} sx={{...sideBar_sx.category}} >
                            <Box sx={{
                                display:'flex',
                                justifyContent:'center',
                                alignItem:'center',

                                borderBottom: '2px solid #e4e4e4',
                            }}>
                                <Typography variant="body2" sx={{...sideBar_sx.title_2,padding:{xs:'',md:'5px'}}}>{item.title}</Typography>
                            </Box>

                            <Box sx={{...sideBar_sx.item_category}}>
                                {
                                    item.tag.map((tag, index) => (
                                        <Box key={index} sx={{}}>
                                            <ThemeProvider theme={theme}>
                                                <FormControlLabel
                                                    value="end"
                                                    control={<Checkbox />}
                                                    label= {capitalize(tag)}
                                                    labelPlacement="end"
                                                    style={{color:'#636363', fontSize:'14px'}}
                                                    onClick= {(event) => handleChange(event,item.title,tag)}
                                                            />
                                            </ThemeProvider>
                                        </Box>
                                    ))
                                }
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}
export default SidebarFilter;