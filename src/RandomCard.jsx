import './assets/styles/RandomCard.css';
import users from "./data/users.json";
import Card from "./components/Card";
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
    const [index, setIndex] = useState(0);
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
    // obtengo el color aleatorio para el fondo, las letras y el icono
    // del boton
    let color = colors[getRandomIndex(colors.length)];
    
    useEffect(() => {
        // 1° Actualizo el color de fondo
	document.body.style = `background-color: ${color};`;
    }, [index]);

    const handleSetIndex = () => {
	// el indice aleatorio no debe superar los limites extremos
        if(index >= 0 && index < users.length)
	{
            setIndex(getRandomIndex(users.length));
	}
    }

    return (
        <div className="random-card">
	    {/* 2° Actualiza el color del titulo */}
	    <Card user={users[index]} color={color}/>
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
	</div>
    );
}  

export default RandomCard;
