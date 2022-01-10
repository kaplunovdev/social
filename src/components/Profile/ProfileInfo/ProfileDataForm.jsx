import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

import style from './ProfileInfo.module.css'


const ProfileDataForm = ({handleSubmit, status, updateStatus, profile, aboutMe, error}) => {
    return (
        <form className={style.info} onSubmit={handleSubmit}>

            <div>
                <button className={style.buttonSave}>Save</button>
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div className={style.userName}>Full name: {createField("Full name", "fullName", [], Input)}</div>
            <div>Ищу работу:
                {createField("", "lookingForAJob", [], Input, {type: 'checkbox'})}
            </div>
            <div>
                Мои скиллы:
                {createField("My skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>О себе: {aboutMe}

                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <p>Контакты:</p> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={style.contact}>
                <b>{key}: </b>{createField(key, "contacts." + key, [], Input)}

            </div>
        })}

            <p><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></p>


        </form>
    )
    // (<Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>)
}
const ProfileDataFromReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFromReduxForm;