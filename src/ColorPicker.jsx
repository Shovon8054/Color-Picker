import {useState} from'react'

function ColorPicker(){
    const [color,setColor]=useState("FFFFFF")

    const handleColor =(e)=>{
        setColor(e.target.value)
    }

    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="display-color" style={{backgroundColor:color}}>
                <p>Selected color: {color}</p>
            </div>

            <label>Select a color:</label>

            <input 
            type="color"
            value={color}
            onChange={handleColor}/> <br />
            <footer style={{ textAlign: "center", marginTop: "30px", fontSize: "14px", color: "#888" }}>
                Developed by Mehedi Shovon
                </footer>


        </div>
    )
}

export default ColorPicker