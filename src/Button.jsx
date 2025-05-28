import react, {useState} from 'react';
function Button(){
    // const styles={
    //     backgroundColor: "aqua",
    //     color:"rgb(0, 11, 21)",
    //     borderRadius: "5px",
    //     border:"none",
    //     cursor:"pointer",
    //     padding: "5px",
    // }

    // input
    const [name, setName]=useState('guest')
    const [quantity, setQuantity]=useState("0")

    // textArea
    const [comment,setComment]=useState("")
    // select
    const [payment, setPayment]=useState("")

    // radio
    const [shipping, setShipping]=useState("")

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const handleQuantityChange=(e)=>{
        setQuantity(e.target.value)
    }

    const handleTextarea=(e)=>{
        setComment(e.target.value)
    }

    const handlePayment=(e)=>{
        setPayment(e.target.value)
    }

    const handleShipping=(e)=>{
        setShipping(e.target.value)
    }

    return(
        <div>
            <input type="text" value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange}/>
            <p>quantity: {quantity}</p>

            <textarea value={comment} placeholder='enter a comment' onChange={handleTextarea}></textarea>
            <p>comment: {comment}</p>

            <select value={payment} onChange={handlePayment}>
                <option value="">Select an option</option>
                <option value="visa">visa</option>
                <option value="debit card">debit card</option>
                <option value="credit card">credit card</option>
                <option value="cash">cash</option>
            </select>
            <p>payment: {payment}</p>

            <label>
                <input 
                type="radio" 
                value="pick up" 
                checked={shipping==="pick up"} 
                onChange={handleShipping}/> Pick Up

            </label> <br />
            <label>
                <input 
                type="radio" 
                value="delivery" 
                checked={shipping==="delivery"} 
                onChange={handleShipping}/> Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default Button