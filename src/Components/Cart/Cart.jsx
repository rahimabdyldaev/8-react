import { useEffect } from "react";
import { Spinner, Table} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import fetchCart, { addToCart } from "../../Store/Reducers/cartCreator";

const Cart = () => {
  const { cart, cartStatus, cartError } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const renderItems = (el, idx) => {
    const { title, count, total, id } = el;

    const onAddToCart = () => dispatch(addToCart(id));
    const onRemoveFromCart = () => console.log(id);
    const onDeleteFromCart = () => console.log(id);

    return (
      <tr key={`item=${id}`}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>{total}$</td>
        <td>
          <button variant='outline-success my-1' onClick={onAddToCart}>
            <i className='fa-solid fa-plus'></i>
          </button>
          <button variant='outline-warning my-1' onClick={onRemoveFromCart}>
            <i className='fa-solid fa-minus'></i>
          </button>
          <button variant='outline-danger my-1' onClick={onDeleteFromCart}>
            <i className='fa-solid fa-trash'></i>
          </button>
        </td>
      </tr>
    );
  };

  const cartCases = {
    pending: <Spinner />,
    rejected: cartError,
    fulfilled: (
      <Table>
        <thead>
          <tr>
            <th>№</th>
            <th>item</th>
            <th>count</th>
            <th>price</th>
            <th>action</th>
          </tr>
        </thead>

        <tbody>{cart.map(renderItems)}</tbody>
      </Table>
    ),
  };

  return (
    <div>
      <h2>Your order</h2>
      {cartCases[cartStatus]}
    </div>
  );
};

export default Cart;