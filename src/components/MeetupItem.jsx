import { useContext } from "react"
import classes from "./MeetupItem.module.css"
import Card from "./Card";
import FavoritesContext from "../store/Favorites-context"

function MeetupItem(props){
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)
    function toggleFavorites(){
        if(itemIsFavorite){  
            favoritesCtx.removeFavorite(props.id);
            localStorage.removeItem("favoriti")
        }else{
            favoritesCtx.addFavorite({
                id:props.id,
                title:props.title,
                image:props.image,
                description:props.description,
                adress:props.adress
            })
            
        }
    }
    console.log(props)
    return(
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.adress}</address>
                    <p>{props.description}</p>
                </div>
                
                <div className={classes.actions}>
                    <button onClick={toggleFavorites}>{itemIsFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem