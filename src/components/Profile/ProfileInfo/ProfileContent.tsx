import React from "react";
import { useSelector } from "react-redux";
import classes from "./ProfileContent.module.css";
import { AppStateType } from "../../../store/redux-store";
import { ProfilePhotoActions } from "./ProfilePhotoActions/ProfilePhotoActions";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";
import { Col, Row } from "antd";
import FriendMini from "../../Friends/FriendMini/FriendMini";
import { PostsContainer } from "../../Posts/PostsContainer";

export const ProfileContent: React.FC = () => {
  const profileState = useSelector(
    (state: AppStateType) => state.profileReducer.profile
  );
  const friendsState = useSelector(
    (state: AppStateType) => state.friendsReducer.friends
  );
  return (
    <div className={classes.profileContainer}>
      <div className={classes.wrapper}>
        <Row justify="center" align="top">
          <Col className={classes.photoContainer} span={7}>
            <ProfilePhotoActions profilePhoto={profileState.photos.large} />
          </Col>
          <Col className={classes.infoContainer} span={16} offset={1}>
            <ProfileInfo
              fullName={profileState.fullName}
              lookingForJobDescr={profileState.lookingForAJobDescription}
              mailLink={profileState.contacts.mainLink}
            />
          </Col>
        </Row>
        <Row justify="center" align="top">
          <Col className={classes.randomFriends} span={7}>
            {friendsState
              .map((el) => (
                <FriendMini key={el._id} name={el.name} avatar={el.avatar} />
              ))
              .sort(() => 0.5 - Math.random())
              .slice(0, 6)}
          </Col>
          <Col className={classes.postContainer} span={16} offset={1}>
            <PostsContainer />
          </Col>
        </Row>
      </div>
    </div>
  );
};
