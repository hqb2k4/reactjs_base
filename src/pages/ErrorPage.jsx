import { Button, Result } from "antd";
import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div id="error-page">
            <Result
                status="404"
                title="Oops!"
                subTitle={<i>{error.statusText || error.message}</i>}
                extra={<Button type="primary">
                    <Link to="/">Back to HomePage</Link>
                </Button>}
            />
        </div>
    );
}