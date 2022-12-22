import "/src/assets/styles/Card.css";
import {
    useState,
    useEffect
} from "react";
import {
    EnvelopeFill,
    TelephoneFill,
    GeoAltFill
} from "react-bootstrap-icons";

function Card({user, color})
{
    
    return (
        <section id="card">
	    <h2 style={{"color": color}}>
	        {`${user.name.title} ${user.name.first} ${user.name.last}`}
	    </h2>
	    <figure>
                <img type="image/jgp" src={user.picture.large} alt={`This is a ${user.name.first} ${user.name.last} photo`}/>
	    </figure>
	    <ul style={{"color": color}}>
                <li>
	            <EnvelopeFill
	                size={14}
	                color={color}
	            />{user.email}
	        </li>
                <li>
	            <TelephoneFill
	                size={14}
	                color={color}
	            />{user.phone}
	        </li>
                <li>
	            <GeoAltFill
	                size={14}
	                color={color}
	            />{`${user.location.country} ${user.location.state} ${user.location.city}`}
	        </li>
	    </ul>
	</section>
    );
}

export default Card;
