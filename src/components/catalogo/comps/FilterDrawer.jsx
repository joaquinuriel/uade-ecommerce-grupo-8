import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from "@mui/material";
import {useState} from "react";

const FilterDrawer = ({open,categories,handleClose,setCategory,setCardData,jsonData,cardData , category,name}) => {
    const [item, setItem] = useState('');
    const [checkedItems, setCheckedItems] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
        item5: false,
        item6: false,
        item7: false,
        item8: false,
        item9: false,
        item10: false,
    });

    const handleCancelClick = () => {
        setCardData([jsonData]);
    };


    const handleCheckboxChange = (itemName) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [itemName]: !prevCheckedItems[itemName],
        }));
    };

    const handleApplyClick = () => {
        console.log(item);
        setCardData( [jsonData.filter(row => row[name.toLowerCase()] === item) ] );
        console.log(cardData);
    };


    return(
        <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Filtrar</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography variant="h6" >{name}</Typography>
                        <Box display="flex" alignItems="center" flexDirection={'column'}>
                        {
                            categories.map((category,index) => (

                                <Box display="flex" alignItems={'center'} sx={{width:'100%'}}>
                                    <Checkbox

                                        checked={Object.values(checkedItems)[index]}
                                        onChange={() => {handleCheckboxChange('item'+(index+1)); setItem(category);}}
                                    />
                                    <Typography >{category}</Typography>
                                </Box>
                            ))
                        }
                    </Box>


                    <Button variant="contained" color="primary" onClick={()=> {handleApplyClick();setCategory(name)}}>
                        Aplicar
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleCancelClick}>
                        Anular
                    </Button>
                </DialogContentText>
            </DialogContent>
            <DialogActions>

                <Button onClick={handleClose} color="primary">
                    Cerrar
                </Button>
            </DialogActions>
        </Dialog>

)
}

export default FilterDrawer;