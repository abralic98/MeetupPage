import { createContext, useState } from "react";


const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) =>{},
    removeFavorite: (meetupID) =>{},
    itemIsFavorite: (meetupID) =>{}
    
})


export function FavoritesContextProvider(props){

    const [userFavorites,setUserFavorites] = useState([]);

    function AddFavorites(userFavorites){
        setUserFavorites((prevUserFavorites) => {
            
            return prevUserFavorites.concat(userFavorites);
            
        })
    }
    
    function DeleteFavorites(meetupID){
        setUserFavorites((prevUserFavorites)=>{
           return prevUserFavorites.filter(meetup=> meetup.id!==meetupID)
        })
    }

    const context = {
        favorites:userFavorites,
        totalFavorites:userFavorites.length,
        addFavorite:AddFavorites,
        removeFavorite:DeleteFavorites,
        itemIsFavorite:CheckFavorites
    }
    
    function CheckFavorites(meetupID){
        return userFavorites.some(meetup=>meetup.id===meetupID)
    }


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;