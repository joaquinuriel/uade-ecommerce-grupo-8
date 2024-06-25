import Layout from "../components/catalogo/Layout.jsx";
import {useParams} from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Catalogo = () =>{
    const { id } = useParams();

return(
    <Layout text={id}></Layout>
);


}





export default Catalogo;