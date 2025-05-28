function Condition(props) {
    // if(props.isLogged){
    //     return <h2>Welcome {props.username}!!</h2>
    // }
    // return <h2>Please log in</h2>

    const welcome={
        fontSize:"2.5em",
        backgroundColor:"blue",
        borderRadius:"10px",
        padding:"10px"

    }
    const logged={
        fontSize:"2.5em",
        backgroundColor:"red",
        borderRadius:"10px",
        padding:"10px"

    }

    const welcomeMsg=<h2 style={welcome}>Welcome {props.username}!!</h2>
    const loggedIn= <h2 style={logged}>Please logged in</h2>

    return(
        props.isLogged? welcomeMsg : loggedIn)

}

export default Condition;
