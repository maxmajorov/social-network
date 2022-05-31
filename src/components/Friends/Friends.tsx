import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { v1 } from "uuid";
import { AppStateType } from "../../store/redux-store";
import { FriendMaxi } from "./FriendMaxi/FriendMaxi";
import classes from "./Friends.module.css";

type LocationType = {
  city: string;
  country: string;
};

type FriendsPageType = {
  _id: string;
  name: string;
  location: LocationType;
  avatar: string;
};

const tempFriends: Array<FriendsPageType> = [
  {
    _id: v1(),
    name: "Olga",
    location: {
      city: "Minsk",
      country: "Belarus",
    },
    avatar:
      "https://avatarko.ru/img/kartinka/29/fantastika_rusalka_Ariel_28509.jpg",
  },
  {
    _id: v1(),
    name: "Pavel",
    location: {
      city: "Minsk",
      country: "Belarus",
    },
    avatar: "https://avatarko.ru/img/kartinka/17/kot_multfilm_16243.jpg",
  },
  {
    _id: v1(),
    name: "Karina",
    location: {
      city: "Wroclaw",
      country: "Poland",
    },
    avatar: "https://avatarko.ru/img/avatar/11/multfilm_Timon_10391.jpg",
  },
  {
    _id: v1(),
    name: "Oleg",
    location: {
      city: "Kiev",
      country: "Ukraine",
    },
    avatar: "https://add-groups.com/uploads/mini/short/7a/1371_original.jpg",
  },
  {
    _id: v1(),
    name: "Volodya",
    location: {
      city: "Moscow",
      country: "Russia",
    },
    avatar:
      "https://www.meme-arsenal.com/memes/2860a0cb8333cc6923653a31792d4453.jpg",
  },
  {
    _id: v1(),
    name: "Kazik",
    location: {
      city: "New York",
      country: "USA",
    },
    avatar: "https://avatarko.ru/img/kartinka/33/cherep_naushniki_32366.jpg",
  },
  {
    _id: v1(),
    name: "Tadik",
    location: {
      city: "Zelva",
      country: "Belarus",
    },
    avatar:
      "https://avatarko.ru/img/kartinka/30/multfilm_Simpsons_Bart_29436.jpg",
  },
];

function Friends() {
  const authState = useSelector((state: AppStateType) => state.authReducer);
  useEffect(() => {
    // Потом переисать для всех страниц
    document.title = `Friends`;
    return () => {
      // cleanup
      document.title = `Social Network`;
    };
  });

  if (!authState.isAuth) {
    console.log(authState.isAuth);
    return <Navigate replace to="/authentication" />;
  }
  return (
    <main className={classes.friends}>
      <div className={classes.search}>
        <input className={classes.serchInput} type="text" />
      </div>
      <div className={classes.list}>
        {tempFriends.map((el) => (
          <FriendMaxi
            key={el._id}
            id={el._id}
            name={el.name}
            avatar={el.avatar}
          />
        ))}
      </div>
    </main>
  );
}

export default Friends;
