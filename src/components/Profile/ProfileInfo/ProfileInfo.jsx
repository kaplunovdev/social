import React, {useState} from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultPhoto from '../../../assets/images/avatar.png'
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = ({profile, isOwner, savePhoto, saveProfile, status, updateStatus}) => {

    const [editMode, setEditMode] = useState(false)
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        savePhoto(e.target.files[0])
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            })
    }

    return (
        <div>

            {/*<div className={style.image_top}>*/}
            {/*    <img src="https://www.orangesmile.com/ru/foto/usa/fodder120132.jpg" alt='image'/>*/}
            {/*</div>*/}


            <div className={style.userCard}>

                <div className={style.avatar}>
                    <img src={profile.photos && profile.photos.large} alt=''/>
                    {isOwner && <input className={style.inputChangeImage} type={'file'}
                                       onChange={onMainPhotoSelected}


                    />}
                </div>
                {editMode ? <ProfileDataForm
                        profile={profile}
                        onSubmit={onSubmit}
                        initialValues={profile}
                    /> :
                    <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        status={status}
                        updateStatus={updateStatus}
                        goToEditMode={() => {
                            setEditMode(true)
                        }}

                    />}


            </div>

        </div>
    );
};
const ProfileData = ({profile, status, updateStatus, isOwner, goToEditMode}) => {
    return (

        <div className={style.info}>

            {isOwner &&
                <div>
                    <button className={style.editBtn} onClick={goToEditMode}>✐</button>

                </div>}

            <p className={style.userName}>{profile.fullName}</p>
            <p><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></p>
            <p>О себе:{profile.aboutMe || ' Нет записи'}</p>
            <p>Ищу работу:{profile.lookingForAJob ? ' Да' : ' Нет'}</p>

            <p>
                Мои скиллы: {profile.lookingForAJobDescription}
            </p>

            <p>Контакты: {Object.keys(profile.contacts).map(key => {
                return (<Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>)
            })}</p>


        </div>
    )

}

export const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default ProfileInfo;
