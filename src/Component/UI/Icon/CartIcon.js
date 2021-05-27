import icon from '../../../asstets/Logo/cart.png'

const CartIcon=(props)=>{ 
    
     const clickHandler=()=> {}
    return ( 
    <div onClick={clickHandler}  >
        <img style={{width:'30px'}} src={icon} />
    </div>
    )
}
export default CartIcon;