import {Button, FormControl, Input, TextField} from "@mui/material";
import {useCallback, useState} from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function Publicar() {
    /**
     * Id
     * Titulo
     * Detalle
     * Precio
     * Categoría
     * Foto
     * Cantidad
     */
    const [title, setTitle] = useState("");
    const [detail, setDetail] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [stock, setStock] = useState(1);

    const submit = useCallback((e) => {
        e.preventDefault();
        // TODO guardar en DB
        // axios.post(url, {
        //     data: e...
        // })
    }, [])

    return (
        <main style={{ height: "90vh", display: "flex", alignItems: "center", justifyContent: "center", background: "whitesmoke" }}>
            <form onSubmit={submit}>
                <FormControl sx={{gap: 2}}>
                    <img
                        alt="image" hidden={!images.length}
                        src={images.length ? URL.createObjectURL(images[0].slice()) : ""}
                    />
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon/>}
                    >
                        Subir imagen
                        <Input
                            type="file" accept="image/*" sx={{display: "none"}}
                            onChange={(e) => setImages(Array.from(e.target.files))}
                        />
                    </Button>
                    <TextField
                        name="title" label="Titulo"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        name="detail" label="Descripcion"
                        value={detail} onChange={(e) => setDetail(e.target.value)}
                    />
                    <TextField
                        name="price" label="Precio"
                        value={price} onChange={(e) => setPrice(+e.target.value)}
                        type="number"
                    />
                    <TextField
                        name="category" label="Categoria"
                        value={category} onChange={e => setCategory(e.target.value)}
                    />
                    <TextField
                        name="stock" label="Cantidad"
                        value={stock} onChange={e => setStock(+e.target.value)}
                        type="number"
                    />
                    <Button type="submit" variant="contained">Publicar</Button>
                </FormControl>
            </form>
        </main>
    )
}