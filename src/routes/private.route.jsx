import { useContext } from "react"
import { AuthContext } from "../component/context/auth.context"
import { Link, Navigate } from "react-router"
import { Button, Result } from "antd"

const PrivateRoute = (props) => {
    const { userLoging } = useContext(AuthContext)
    // console.log("PrivateRoute - User:", userLoging);
    if (userLoging && userLoging.id) {
        return (
            <>
                {props.children}
            </>
        );
    }
    // return (<Navigate to="/login" replace />);
    return (
        <Result
            status="403"
            title="Unauthorized"
            subTitle={"Sorry, you are not authorized to access this page. Please log in to continue."}
            extra={<Button type="primary">
                <Link to="/login">Go to Sign In</Link>
            </Button>}
        />
    );
}

export default PrivateRoute