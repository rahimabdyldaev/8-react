import {} from 'react-bootstrap';
import classes from './Booklist.module.scss';

const BooklistItem = ({book, addToCart}) => {
  
        const {imgUrl, id, title, price, author} = book;
        const onAddToCart = () => addToCart(id);
    
  return (
        <li className={classes.list_item}>
            <div className={classes.list_item_cover}>
                <img src={imgUrl} alt='book' />
            </div>

            <div className={classes.list_item_details}>
                <h4>{title}</h4>
                <div>{author}</div>
                <div className={classes.list_item_price}>{price}$</div>
                <button onClick={onAddToCart}>Add To Cart</button>
                </div>
        </li>
  )
  }

export default BooklistItem