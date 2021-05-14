import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.css"

function MainNavigation() {
    return(
        <header className={classes.header}>
            <div className={classes.logo}>
                REAKT MITUPS
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New Meetups</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation