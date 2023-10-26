
import {Link} from "react-router-dom";
function Nav()
{
    return(
        <nav class="navbar bg-warning ms-4">
            <Link to="/" class="navbar-brand ms-3">Crud Operations</Link>
            <div class="nav">
                <Link to="/create-student" class="nav-link"><b>Create student</b></Link>
                <Link to="/student-list" class="nav-link"><b>Student List</b></Link>
            </div>
        </nav>
    )
}
export default Nav;
