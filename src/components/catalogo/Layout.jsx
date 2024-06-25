import {Grid} from "@mui/material";
import SidebarFilter from "./SidebarFilter.jsx";
import CatalogView from "./CatalogView.jsx";
import {useState} from "react";
import {useParams} from "react-router-dom";







// eslint-disable-next-line react/prop-types
const Layout = ({text}) => {
    const [dictionary, setDictionary] = useState({});


    const addWord = (key, word) => {
        setDictionary(prevDictionary => {
            if (key in prevDictionary) {
                return {
                    ...prevDictionary,
                    [key]: [...prevDictionary[key], word]
                };
            } else {
                return {
                    ...prevDictionary,
                    [key]: [word]
                };
            }
        });
    };

    // Funcion para eliminar una palabra de su clave correspondiente
    const removeWord = (key, word) => {
        setDictionary(prevDictionary => {
            // Si la clave existe y el array contiene la palabra, la elimina
            if (key in prevDictionary && prevDictionary[key].includes(word)) {
                const updatedArray = prevDictionary[key].filter(w => w !== word);
                return {
                    ...prevDictionary,
                    [key]: updatedArray
                };
            }

            return prevDictionary;
        });
    };







    return(
        <Grid container >
            <Grid item xs={4} sm={3} md={2} sx={{padding:'5px'}} >
                <SidebarFilter dictionary={dictionary} addWord={addWord} removeWord={removeWord}></SidebarFilter>
            </Grid>
            <Grid item xs={4} sm={4} md={10} sx={{padding:'5px'}} >
                <CatalogView dictionary={dictionary} text={text} ></CatalogView>
            </Grid>
        </Grid>
    );
}


export default Layout;