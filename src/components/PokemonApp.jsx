import { useState } from "react"

export const PokemonApp = () => {
    const [url, setUrl] = useState("")
    const [name, setName] = useState("")
    const [id, setId] = useState("")
    const [tipo,setTipo] = useState('')
    const [ability,setAbility] = useState('')

    const reqPokemon = () => {
        try {
             fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((resp)=>{
                 resp.json().then((data)=>{
                    const {id, name, sprites, types} = data
                    console.log(id,name, sprites.other['official-artwork'].front_default,data.types[0].type.name,data.abilities[0].ability.name)
                    setUrl(sprites.other['official-artwork'].front_default)
                    setId(id)
                    setTipo(data.types[0].type.name)
                    setAbility(data.abilities[0].ability.name)
                })
            })
        } catch (err) {
            console.error(err)
        }
    }
    
    return (
    <>
    <div className="card">
    <div className="container d-fex flex-row justify-content-center alig-items-center mt-3 w-50">
    <input className="form-control me-2" type="text" onChange={(e)=>{setName(e.target.value)}}></input>
    <br></br>
    <button className="btn btn-success" type="submit" onClick={reqPokemon}>Buscar Pokemon</button>
    </div>
    <br></br>
    <div className="card">
        <img src={url} className="card-img-top w-25" alt="..."/>
        <div className="card-body">
        <h4>No.Pokedex: {id}</h4>
        <h5>Nombre: {name}</h5>
        <h6>Tipo: {tipo}</h6>
        <h6>Habilidad: {ability}</h6>
        </div>
    </div>
    </div>
    </>
  )
}