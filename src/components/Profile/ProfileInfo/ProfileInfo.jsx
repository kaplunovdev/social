import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultPhoto from '../../../assets/images/avatar.png'


const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        savePhoto(e.target.files[0])
    }

    return (
        <div>

            <div className={style.image_top}>
                <img src="https://www.orangesmile.com/ru/foto/usa/fodder120132.jpg" alt='image'/>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

            <div className={style.userCard}>

                <div className={style.avatar}>
                    <img src={profile.photos.large|| defaultPhoto} alt=''/>
                    {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                </div>
                <div>
                    <p>{profile.fullName}</p>
                    <p>{'props.profile.aboutMe'}</p>
                    <p>City: Taganrog</p>
                    <p>Education: Colledge</p>
                    <p>{profile.contacts.instagram}</p>

                </div>

            </div>

        </div>
    );
};

export default ProfileInfo;
