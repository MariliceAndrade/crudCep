import { Link } from "react-router-dom";
import { FormOutlined, TableOutlined } from "@ant-design/icons";

const Navbar = ({show}) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <ul>
                <li> <Link to='/'> <FormOutlined /> Cadastrar endereço</Link> </li>
                <li> <Link to='/ListarEnd'> <TableOutlined /> Lista de endereços</Link> </li>
            </ul>
        </div>
    );
};

export default Navbar;