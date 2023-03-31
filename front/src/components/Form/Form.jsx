import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css";
const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });
    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value });
        validation({ ...userData, [property]: value }, errors, setErrors);
    };

    const submitHandler = (event)=>{
        event.preventDefault();
        login(userData);
    };
   
    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={userData.username}
                    onChange={handleInputChange}
                    placeholder="Username.."
                />

            </div>
            <p>{errors.username}</p>
            <div>

                <label htmlFor="password">Password:</label>
                <input
                    type="text"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    placeholder="Password.."
                />


            </div>
            <p>{errors.password}</p>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    );
}
export default Form;