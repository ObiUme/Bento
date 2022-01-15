import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function ProductCard({productObj, setEditProduct, handleProductDelete}) {

    const {id, name, price, description, image} = productObj;
    
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          price: ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setEditProduct(productObj)} component={Link} to='/editproduct'>Update</Button>
        <Button size="small" onClick={() => handleProductDelete(id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}
export default ProductCard;