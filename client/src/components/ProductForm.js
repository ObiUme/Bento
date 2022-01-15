import TextField from '@mui/material/TextField';
import { useState } from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

function ProductForm({addProducts}){

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        const newObj ={
            name: name,
            description: description,
            price: price,
            image: image,
        }
        
        fetch(`/products`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(newObj)
        }).then(res => res.json()).then(addProducts)
        setName('')
        setDescription('')
        setPrice('')
        setImage('')
        navigate('/')
    }

    return(
        <div>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
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

export default ProductForm;