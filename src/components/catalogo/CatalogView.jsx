import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import '../../assets/fonts/Tisa/Tisa.css';
import ProductCard from '../catalogo/comps/ProductCard.jsx'
//import BKPdata from '../../../db.json';
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

const searchInDB = (dataRequest, text, productos) =>{
        let dataResponse = [];

            for(let key in dataRequest){
                for(let elem in dataRequest[key]){
                    for (let product in productos){
                        if(productos[product][key] === dataRequest[key][elem] )
                            if(!dataResponse.includes(productos[product])){
                                dataResponse.push(productos[product]);
                            }

                    }
                }
            }




        return dataResponse;
}


/*const searchInDBByName = (text) => {
    const dataResponse = [];
    for(let key in data.productos){

            const arr = Object.values(data.productos[key]);
            for (let elem in arr){
               if(typeof arr[elem] === 'string'){
                   if(arr[elem].toUpperCase() === text.toUpperCase()){
                       dataResponse.push(data.productos[key]) ;
                   }
               }
            }
    }
    return dataResponse;
}*/

// eslint-disable-next-line react/prop-types
const CatalogView = ({ text, dictionary }) => {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching productos:', error));
  }, []);
    
    let matches = [];

        if(Object.keys(dictionary).length > 0){
            matches = searchInDB(dictionary,text,productos);
        }
        else{
            matches = productos;
        }





    // eslint-disable-next-line react/prop-types






    const sx_catalog_view = {
            layout:{
                padding:'50px',
                display:'flex',
                gap:{xs:'', md:'50px'},
                flexWrap:'wrap',
            },
        }
    return(
        <Box sx={{...sx_catalog_view.layout}}>
            {matches.map((item,index)=>(
                <ProductCard key={index} item={item}  ></ProductCard>
            ))}


        </Box>
    )

}
CatalogView.propTypes = {
    dictionary: PropTypes.object.isRequired // Define el tipo de dictionary y asegúrate de que sea requerido
};
export default CatalogView;