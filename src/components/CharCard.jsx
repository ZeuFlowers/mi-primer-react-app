export default function CharCard({name, image}){
    return(
        <div className="card">
            <img style={{background: '#E9F1FA',padding:5,marginRight: 10 }} src={image} width="60" />
            <p style={{ fontSize:15, fontFamily:'sans-serif'}}> {name}</p>
        </div>
    )
}