import React from "react";
import classes from "./ProfileContent.module.css";
import { AppRootStateType, useAppSelector } from "../../../bll/store";
import { ProfilePhotoActions } from "./ProfilePhotoActions/ProfilePhotoActions";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Col, Row } from "antd";
import FriendMini from "../../Friends/FriendMini/FriendMini";
import { PostsContainer } from "../../Posts/PostsContainer";
import { profileSelect } from "../../../bll/reducers/profile-reducer";

export const ProfileContent: React.FC = () => {
  const profileState = useAppSelector(profileSelect);
  const friendsState = useAppSelector(
    (state: AppRootStateType) => state.friendsReducer.friends
  );

  return (
    <div className={classes.profileContainer}>
      <div className={classes.wrapper}>
        <Row justify="center" align="top">
          <Col className={classes.photoContainer} span={6}>
            <ProfilePhotoActions profilePhoto={profileState.photos.large} />
          </Col>
          <Col className={classes.infoContainer} span={17} offset={1}>
            <ProfileInfo
              fullName={profileState.fullName}
              lookingForJobDescr={profileState.lookingForAJobDescription}
              mailLink={profileState.contacts.mainLink}
              github={profileState.contacts.github}
            />
          </Col>
        </Row>
        <Row justify="center" align="top">
          <Col className={classes.randomFriends} span={6}>
            {friendsState
              .map((el) => (
                <FriendMini key={el._id} name={el.name} avatar={el.avatar} />
              ))
              .sort(() => 0.5 - Math.random())
              .slice(0, 6)}
          </Col>
          <Col className={classes.postContainer} span={17} offset={1}>
            <PostsContainer />
          </Col>
        </Row>
      </div>
    </div>
  );
};
