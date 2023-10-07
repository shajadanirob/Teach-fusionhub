import { useEffect, useState } from "react";


const Usealldata = () => {
    const[cards,setCards] = useState()
    useEffect(() =>{
        fetch('/Data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
       cards
    );
};

export default Usealldata;