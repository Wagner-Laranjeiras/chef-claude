const Pad = (props) => {
    const bgColor = { backgroundColor: props.isOn ? props.color : '#cccccc', }
    return ( 
        <button 
            className="m-2 max-w-2xs border p-4 rounded-md"
            style={bgColor}
            onClick={() => props.toggleOnOff(props.id)}
        >{props.color}</button>
     );
}
 
export default Pad;