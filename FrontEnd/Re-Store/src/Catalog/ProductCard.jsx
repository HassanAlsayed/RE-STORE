import { Card, CardMedia, CardContent, Typography, CardActions, Button, Avatar, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from "react";
import { useApp } from "../Context/useAppContext";

function ProductCard(props) {
  const [count, setCount] = useState(0);
  const {isLogin} = useApp();

  const handleAddCart = () => {
    setCount(count => count + 1);
  };
  return (
  
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'secondary.main' }}>
              {props.product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={props.product.name}
          titleTypographyProps={{
            sx: { fontWeight: 'bold', color: 'primary.main' }
          }}
        />  
        <CardMedia
          component="img" 
          height="300" 
          image={props.product.pictureUrl}
          title={props.product.name}
        />
        <CardContent>
          <Typography variant="h5" color='secondary'>
            ${(props.product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.product.brand}/{props.product.type}
          </Typography>
        </CardContent>
        {
          isLogin ?
        <CardActions>
          <Button size="small" onClick={handleAddCart}>Add to cart</Button>
          <Button size="small" component={Link} to={`/catalog/${props.product.id}`}>View</Button>
        </CardActions>
        : 
         ''
        }

      </Card>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    PictureUrl: PropTypes.string,
    brand: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    pictureUrl:PropTypes.string.isRequired
   
  }),
};

export default ProductCard;
