import { useState, useEffect } from "react";
import MeetupList from "../components/MeetupList"


function AllMeetUps(){
    const [isLoading,setIsLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetups] = useState([]);

    useEffect(() => {
      setIsLoading(true);
        fetch(
          "https://reakt-meetups-default-rtdb.firebaseio.com/meetups.json"
          ).then(response =>{
            return response.json();
          }).then(data =>{
            const meetups = [];

            for (const keys in data){
              const meetup = {
                id:keys,
                ...data[keys]
              }
              console.log(meetup);
              meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
            console.log(meetups)
          })
      }, [])

    

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