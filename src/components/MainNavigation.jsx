import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.css"
import { useContext } from "react"
import FavoritesContext from "../store/Favorites-context"

function MainNavigation() {
    const favoritesCtx=useContext(FavoritesContext)
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
                        <Link to="/favorites">Favorites <span className={classes.badge}>{favoritesCtx.favorites.length}</span></Link>
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