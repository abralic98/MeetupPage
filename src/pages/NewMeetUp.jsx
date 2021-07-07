import { useHistory } from "react-router-dom"
import NewMeetupForm from "../components/NewMeetup/NewMeetupForm"
function NewMeetUp(){
    const history = useHistory();
    
    function addMeetupHandler(meetupData){
        fetch(
            "https://reactmeetups-ef0c5-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData)
                
            }
        )
        .then(() => {
            history.replace("/")
        });
    }
    return(
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </div>
    )
}

export default NewMeetUp