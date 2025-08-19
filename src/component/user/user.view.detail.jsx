import { Drawer, Image, notification, Upload } from "antd";
import React, { useState } from 'react';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { updateUserAvatarAPI, uploadFileAPI } from "../../service/api.service";

const UserViewDetail = ({ isDrawerOpen, setIsDrawerOpen, dataDetail, fetchAllUser }) => {
    console.log("isDrawerOpen", isDrawerOpen);
    // Handling preview file upload
    // Convert file to base64
    const getBase64 = file =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });

    // State for image preview
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);

    // Handle image preview
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
    };

    // Notification
    const [api, contextHolder] = notification.useNotification();

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {fileList.length >= 1 ?
                <div style={{ marginTop: 8 }}>
                    <EditOutlined />
                    Change Avatar
                </div>
                :
                <div style={{ marginTop: 8 }}>
                    <PlusOutlined />
                    <p>Upload Avatar</p>
                </div>}
        </button>
    );
    // Handle save update avatar
    const handleUserUpdateAvatar = async () => {
        // Update Avatar
        if (fileList.length === 0) {
            api.warning({
                message: 'No file selected',
                description: 'Please choose an avatar before saving!',
            });
            return;
        }

        try {
            const file = fileList[0].originFileObj;
            const resUpload = await uploadFileAPI(file, "avatar"); 
            if (resUpload?.data) {
                // Update User Avatar
                const newAvatar = resUpload.data.fileUploaded; 
                const resUpdateUserAvatar = await updateUserAvatarAPI(newAvatar, dataDetail._id, dataDetail.fullName, dataDetail.email, dataDetail.phone);
                if (resUpdateUserAvatar?.data) {
                    api.success({
                        message: 'User avatar updated successfully',
                        description: `User avatar updated successfully!`,
                    });
                    console.log("User avatar updated successfully:", resUpdateUserAvatar.data);
                    setIsDrawerOpen(false);
                    setFileList([]);
                    fetchAllUser();
                } else {
                    api.error({
                        message: 'Update user avatar failed',
                        description: `Update user avatar failed: ${resUpdateUserAvatar?.data?.message || 'Unknown error'}`,
                    });
                    console.error("Update user avatar failed:", resUpdateUserAvatar);
                }
            }
        } catch (error) {
            api.error({
                message: 'Upload avatar failed',
                description: `Upload avatar failed: ${error.response?.data?.message || error.message}`,
            });
            console.error("Upload avatar failed:", error);
        }     
    };
    return (
        <>
            <Drawer
                title="Basic Drawer"
                closable={true}
                closeIcon={<span aria-label="Close Button">X</span>}
                onClose={() => { setIsDrawerOpen(false) }}
                open={isDrawerOpen}
                width={"40vw"}
            >
                {contextHolder}
                {/* Optional Chaining Operator */}
                <p>{`User Detail:`}</p><br />
                <p>{`ID: ${dataDetail?._id}`}</p><br />
                <p>{`Full Name: ${dataDetail?.fullName}`}</p><br />
                <p>{`Email: ${dataDetail?.email}`}</p><br />
                <p>{`Role: ${dataDetail?.role}`}</p><br />
                <p>Avatar:</p><br />
                <img
                    height={250}
                    width={300}
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail?.avatar}`}
                    alt="" /><br />
                <p>Upload Avatar:</p><br />
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    beforeUpload={() => false}
                    maxCount={1}
                >
                    {uploadButton}
                </Upload>
                {fileList.length >= 1 && (
                    <button
                        type="button"
                        onClick={() => handleUserUpdateAvatar()}
                        style={{
                            marginTop: "10px",
                            padding: "6px 12px",
                            borderRadius: "6px",
                            border: "1px solid #1677ff",
                            background: "#1677ff",
                            color: "#fff",
                            cursor: "pointer"
                        }}
                    >
                        Save Avatar
                    </button>
                )}
                {previewImage && (
                    <Image
                        wrapperStyle={{ display: 'none' }}
                        preview={{
                            visible: previewOpen,
                            onVisibleChange: visible => setPreviewOpen(visible),
                            afterOpenChange: visible => !visible && setPreviewImage(''),
                        }}
                        src={previewImage}
                    />
                )}
            </Drawer>
        </>
    );
}

export default UserViewDetail;