import React from 'react'

const TextToolbar = () => {

    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [under, setUnder] = useState(false);
    const [white, setWhite] = useState(false);
    const [black, setBlack] = useState(false);
    const [red, setRed] = useState(false);
    const [blue, setBlue] = useState(false);
    const [green, setGreen] = useState(false);


    return (
        <div style={{marginBottom: '50px',marginLeft: '500px', border:'1px solid black'}}style={{marginLeft: '500px', padding:'10px', fontSize:'3rem', display:'flex', flexDirection:'row', justifyContent:'space-evenly', width:'500px', border:'1px hotpink solid' }}>
            <i className="fas fa-bold"></i> <i className="fas fa-italic"></i><i className="fas fa-underline"></i>
            <div style={{background:'white', border:'black 1px solid', width:'50px', height:'50px'}}> </div>
            <div style={{background:'black', border:'black 1px solid', width:'50px', height:'50px'}}> </div>
            <div style={{background:'red', border:'black 1px solid', width:'50px', height:'50px'}}> </div>
            <div style={{background:'blue', border:'black 1px solid', width:'50px', height:'50px'}}> </div>
            <div style={{background:'green', border:'black 1px solid', width:'50px', height:'50px'}}> </div>
        </div>
    )
}

export default TextToolbar
