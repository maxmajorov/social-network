import React from "react";
import classes from "./ProfileInfo.module.css";
import { ProfileStatus } from "../ProfileStatus/ProfileStatus";
import { useAppDispatch, useAppSelector } from "../../../../bll/store";
import {
  profileSelect,
  updateUserContactTC,
} from "../../../../bll/reducers/profile-reducer";
import { EditableSpan } from "../../../EditableSpan/EditableSpan";
import { useParams } from "react-router";

export const ProfileInfo: React.FC = () => {
  const profileState = useAppSelector(profileSelect);

  const { userId } = useParams();
  const dispatch = useAppDispatch();

  const updateContactCallback = (contact: string) => {
    let updatedProfile = {
      //Можно сделать форму
      aboutMe: "Yo!",
      fullName: "Max Predko",
      lookingForAJob: true,
      lookingForAJobDescription: "Open for a new opportunities",
      contacts: {
        mainLink: contact,
        // github: contact.includes("github") ? contact : "",
      },
    };

    console.log(updatedProfile.contacts);
    console.log(contact.includes("github"));

    dispatch(updateUserContactTC(updatedProfile, userId));
  };

  return (
    <div className={classes.userInfo}>
      <div className={classes.userName}>
        <h3>{profileState.fullName}</h3>
        <ProfileStatus />
      </div>
      <div>
        <ul className={classes.userList}>
          <li className={classes.userItem}>
            <b>looking for a job: </b>
            {profileState.lookingForAJob
              ? profileState.lookingForAJobDescription
              : "no"}
          </li>
          <li className={classes.userItem}>
            <b>mail: </b>
            <EditableSpan
              updateData={updateContactCallback}
              data={profileState.contacts.mainLink}
            />
          </li>
          <li className={classes.userItem}>
            <b>github: </b>
            <a href={profileState.contacts.github}>
              <EditableSpan
                updateData={updateContactCallback}
                data={profileState.contacts.github}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
