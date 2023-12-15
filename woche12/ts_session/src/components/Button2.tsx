interface ButtonTypes{
    children: React.JSX.Element,
    style: StylePropTypes
}


type StylePropTypes={
    backgroundColor: string,
    padding: [number, number, number, number]
}


export default function Button2({children}:ButtonTypes) {
    return (
        <button style={{marginTop: "30px", backgroundColor:"red"}}>{children}</button>
    )
}
