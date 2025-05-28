function List(){

    const people = [
        { name: "Alice", age: 25, skill: "JavaScript" },
        { name: "Bob", age: 30, skill: "Python" },
        { name: "Charlie", age: 22, skill: "React" },
        { name: "Diana", age: 28, skill: "Node.js" },
        { name: "Ethan", age: 26, skill: "UI/UX Design" }
        ];

    // const newList=names.map(name=><h3>{name}</h3>)

    return(
        <h2>Hello I am {people.name}</h2>
    )
}

export default List