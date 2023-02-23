import './assets/styles/RandomCard.css';
import axios from "axios";
import Card from "./components/Card";
import RandomCardForm from "./components/RandomCardForm";
import {Shuffle} from "react-bootstrap-icons";
import {
    useState,
    useEffect
} from "react";

function getRandomIndex(length)
{
    return Math.floor(Math.random() * length);
}

function RandomCard() 
{
    const url = "https://gsh-users-api.up.railway.app/users";
    const [index, setIndex] = useState(0);
    const [users, setUsers] = useState([]);
    const [userToUpdate, setUserToUpdate] = useState(null);
    const colors = [
	"#FDB137",
	"#785964",
	"#6D6875",
	"#B5838D",
	"#E5989B",
	"#7E9680",
	"#C73866",
	"#FFB4A2",
	"#79616F",
	"#EAB595"
    ];
    const [color, setColor] = useState(colors[getRandomIndex(colors.length)]);

    useEffect(() => {
        getUsers();
    }, []);
    
    useEffect(() => {
        // 1° Actualizo el color de fondo
	document.body.style = `background-color: ${color};`;
    }, [color]);

    const getUsers = () => {
        axios.get(url)
	    .then( res => {
		setUsers(res.data.data);
	    })
	    .catch(err => console.log(err));
    }

    const handleSetIndex = () => {
	// el indice aleatorio no debe superar los limites extremos
        if(index >= 0 && index < users.length)
	{
            setIndex(getRandomIndex(users.length));
	}
	setColor(colors[getRandomIndex(colors.length)]);
    }

    const create = data => {
        axios.post(url, data)
	    .then(res => getUsers())
	    .catch(err => console.log(err));
    }

    const update = updatedUser => {
        axios.put(`${url}/${updatedUser.id}`, updatedUser)
	    .then(res => getUsers())
	    .catch(err => console.log(err));
    }

    const remove = id => {
        axios.delete(`${url}/${id}`)
	    .then(res => {
		setIndex(getRandomIndex(users.length - 1));
		getUsers();
	    })
	    .catch(err => console.log(err));
    }

    return (
        <div id="random-card">
	    {/* 2° Actualiza el color del titulo */}
	    <RandomCardForm
                sendUser={user => create(user)}
	        sendUpdatedUser={updatedUser => update(updatedUser)}
	        cleanner={() => setUserToUpdate(null)}
	        userToUpdate={userToUpdate}
	    />
	    <div id="random-button-container">
	        <button 
	            id="random-button"
	            onClick={handleSetIndex}
	        >
	            {/* 3° Actualizo el color del icono del boton */}
	            <Shuffle
                        size={24}
	                color={color}
	            />
	        </button>
	    </div>
	    {Boolean(users.length) && <Card
		sendToUpdate={user => setUserToUpdate(user)}
		user={users[index]}
		color={color}
		remove={id => remove(id)}
	    />}
	</div>
    );
}  

export default RandomCard;
