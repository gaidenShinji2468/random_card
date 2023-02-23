import "/src/assets/styles/Card.css";
import {
    EnvelopeFill,
    PencilSquare,
    Trash
} from "react-bootstrap-icons";

function Card({
    sendToUpdate,
    user,
    color,
    remove
})
{ 
    return (
        <section className="card">
	    <h2 style={{color}}>
	        {`${user.first_name} ${user.last_name}`}
	    </h2>
	    <figure>
	        <img type="image/jpg" src="./unknown_user.jpg" alt="User profile photo"/>
	    </figure>
	    <ul style={{color}}>
	        <li>
	            <EnvelopeFill
                        size="14"
	                color={color}
	            />{user.email}
	        </li>
	    </ul>
	    <div>
	        <span
	            id="update"
	            onClick={() => sendToUpdate(user)}
	        ><PencilSquare/></span>
	        <span
	            id="delete"
	            onClick={() => remove(user.id)}
	        ><Trash/></span>
	    </div>
	</section>
    );
}

export default Card;
