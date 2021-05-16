import { useState } from "react";
import MeetupList from "../components/MeetupList"


function AllMeetUps(){
    const [isLoading,setIsLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetups] = useState([]);

    fetch(
      "https://reakt-meetups-default-rtdb.firebaseio.com/"
      ).then(response =>{
        return response.json();
      }).then(data =>{
        setIsLoading(false);
        setLoadedMeetups(data);
      })

      if(isLoading){
        return <div><h1>Loading</h1></div>
      }
      
    return(
        <div>
            <h1>All Meetups</h1>
            
            <MeetupList meetups={loadedMeetups}/>
        </div>
    )
}

export default AllMeetUps