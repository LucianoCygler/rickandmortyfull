import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styled from 'styled-components';
const NavLink = styled(Link)`
  display: inline-block;
  margin-right: 1rem;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  :hover{
   color: red;
  }
 }}
`;



export default function Nav(props) { //(props)
   return (
      <div >
         <div>
            <NavLink to="/home">
               <p>Home</p>
            </NavLink>
            <NavLink to="/about">
               <p>About</p>
            </NavLink>
            <NavLink to="/favorites">
               <p>Favorites</p>
            </NavLink>

         </div>
         <SearchBar onSearch={props.onSearch} />



      </div>
   );
}

