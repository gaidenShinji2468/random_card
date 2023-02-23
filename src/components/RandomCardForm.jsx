import {
    useState,
    useEffect
} from "react";
import "/src/assets/styles/RandomCardForm.css";

function RandomCardForm({
    sendUser,
    sendUpdatedUser,
    cleanner,
    userToUpdate
})
{
    const initialState = {
        first_name: "",
	last_name: "",
	email: "",
	password: "",
	birthday: ""
    };
    const [user, setUser] = useState(initialState);

    useEffect(() => {
	console.log(userToUpdate)//DEBUG
        userToUpdate ? fillFields(userToUpdate) : cleanFields();
    }, [userToUpdate]);

    const handleChange = event => {
        const name = event.target.name;
	const value = event.target.value;

	setUser({
            ...user,
	  [name]: value
	});
    }

    const handleSubmit = event => {
	event.preventDefault();
        userToUpdate ? sendUpdatedUser(user) : sendUser(user);
	cleanFields();
    }

    const fillFields = userToUpdate => {
        setUser(userToUpdate);
    }

    function cleanFields()
    {
        setUser(initialState);
	cleanner();
    }

    return (
        <form className="card" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="first_name">First Name</label><input
	            id="first_name"
	            name="first_name"
	            type="text"
	            value={user.first_name}
	            onChange={handleChange}
	        />
	    </fieldset>
            <fieldset>
                <label htmlFor="last_name">Last Name</label><input
	            id="last_name"
	            name="last_name"
	            type="text"
	            value={user.last_name}
	            onChange={handleChange}
	        />
	    </fieldset>
            <fieldset>
                <label htmlFor="email">E-mail</label><input
	            id="email"
	            name="email"
	            type="email"
	            value={user.email}
	            onChange={handleChange}
	        />
	    </fieldset>
            <fieldset>
                <label htmlFor="password">Password</label><input
	            id="password"
	            name="password"
	            type="password"
	            value={user.password}
	            onChange={handleChange}
	        />
	    </fieldset>
            <fieldset>
                <label htmlFor="birthday">Birthday</label><input
	            id="birthday"
	            name="birthday"
	            type="date"
	            value={user.birthday}
	            onChange={handleChange}
	        />
	    </fieldset>
	    <div id="button-group">
	        <button type="submit">
	            {userToUpdate ? "Update" : "Create"}
	        </button>
	        <button
	            type="reset"
	            onClick={cleanFields}
	        >Cancel</button>
	    </div>
	</form>
    );
}

export default RandomCardForm;
