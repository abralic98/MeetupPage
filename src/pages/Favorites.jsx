import { useContext } from "react"
import FavoritesContext from "../store/Favorites-context"

import MeetupList from "../components/MeetupList"
function Favorites(){
    const favoriteCtx = useContext(FavoritesContext)
    console.log(favoriteCtx.favorites)
    let content;
    if(favoriteCtx.totalFavorites===0){
        content=<h1>You have no favorites</h1>
    }
    else {
        content=<MeetupList meetups={favoriteCtx.favorites}/>
    }
    
    return(
        <div>
            {content}
        </div>
    )
}

export default Favorites