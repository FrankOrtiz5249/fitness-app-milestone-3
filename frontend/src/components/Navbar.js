import { Link } from 'react-router-dom'
 
const Navbar = () => {

    return (
        <header>
            <div className="conatiner">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar