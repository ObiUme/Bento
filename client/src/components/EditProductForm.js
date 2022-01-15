import TextField from '@mui/material/TextField';
import { useState } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

function EditProductForm({editProduct, handleEditProducts}){

    const [name, setName] = useState(editProduct.name)
    const [description, setDescription] = useState(editProduct.description)
    const [price, setPrice] = useState(editProduct.price)
    const [image, setImage] = useState(editProduct.image)

    const { id } = editProduct;
    
    const navigate = useNavigate();

    function handleSubmit(e, id){
        e.preventDefault()
        const newObj ={
            name: name,
            description: description,
            price: price,
            image: image,
        }
        
        fetch(`/products/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(newObj)
        }).then(res => res.json()).then(handleEditProducts)
        setName('')
        setDescription('')
        setPrice('')
        setImage('')
        navigate('/')
    }

    return(
        <div>
            <form noValidate autoComplete='off' onSubmit={(e) => handleSubmit(e, id)}>
                <TextField
                    label = 'name'
                    variant = 'outlined'
                    color = 'primary'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label = 'description'
                    variant = 'outlined'
                    color = 'primary'
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label = 'price'
                    variant = 'outlined'
                    color = 'primary'
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)}
                    fullWidth
                    required
                />
                <TextField
                    label = 'image'
                    variant = 'outlined'
                    color = 'primary'
                    value={image}
                    onChange={(e)=> setImage(e.target.value)}
                    fullWidth
                    required
                />
                <Button type='submit'
                    display= 'block'
                    style={{margin: 'auto'}}
                >
                    Submit
                </Button>
            </form>

        </div>
    )
}

export default EditProductForm;