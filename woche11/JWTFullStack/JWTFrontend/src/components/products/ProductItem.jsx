

// eslint-disable-next-line react/prop-types
export default function ProductItem({ name, description }) {

    
    return (
        <div style={{ border: "1px solid black", margin: "10px", display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", padding: "10px" }}>
            <h3>{name}</h3>
            <p>{description}</p>
            <button>Add to Cart</button>
        </div>
    )
}
