import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard'

function ProductContainer({product, setEditProduct, handleProductDelete}){
    return(
        <div>
            <Grid container spacing={4} style={{marginTop: '10px'}}>
                {product.map((productObj) =>
                <Grid item key={productObj.id} xs={12} md={6} lg={4}>
                    <ProductCard productObj={productObj} setEditProduct={setEditProduct} handleProductDelete={handleProductDelete}/>
                </Grid>)}
            </Grid>

        </div>
    )
}

export default ProductContainer;