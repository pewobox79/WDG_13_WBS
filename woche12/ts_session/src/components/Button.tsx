type Colors = "red" | "yellow" | "green" | "blue";

type ButtonPropTypes = {
    backgroundColor: Colors,
    fontSize?: string,
    darkMode?: boolean,
    padding: [number, number, number?, number?],
    onClick?: () => void,
    setCount: React.Dispatch<React.SetStateAction<string>>
}


export default function Button({ backgroundColor, fontSize, padding, onClick,setCount }: ButtonPropTypes) {



    return (
        <button onClick={onClick} style={{ backgroundColor: backgroundColor, color: "white", border: "none", padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`, fontSize: fontSize }}>
            Button
        </button>
    )
}
