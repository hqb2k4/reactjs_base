import { Drawer } from "antd";

const UserViewDetail = ({ isDrawerOpen, setIsDrawerOpen, dataDetail}) => {
    console.log("isDrawerOpen", isDrawerOpen);
    return (
        <Drawer
            title="Basic Drawer"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={() => { setIsDrawerOpen(false) }}
            open={isDrawerOpen}
        >
            {/* Optional Chaining Operator */}
            <p>{`User Detail:`}</p>
            <p>{`Avatar: ${dataDetail?.avatar}`}</p>
            <p>{`ID: ${dataDetail?._id}`}</p>
            <p>{`Full Name: ${dataDetail?.fullName}`}</p>
            <p>{`Email: ${dataDetail?.email}`}</p>
            <p>{`Role: ${dataDetail?.role}`}</p>
        </Drawer>
    );
}

export default UserViewDetail;