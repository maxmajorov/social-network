import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "196d543e-854d-4840-b68c-b0f81150459a" },
});

export type UsersFromServerType = {
  id: number;
  followed: boolean;
  name: string;
  photos: {
    large: string | null;
    small: string | null;
  };
  uniqueUrlName: string | null;
  status: boolean | null;
};

export type UsersResponseType = {
  items: Array<UsersFromServerType>;
  totalCount: number;
  error: string;
};

// export const usersAPI = {
//   getUsers() {
//     return instance
//       .get<Array<UsersFromServerType>>(`users`)
//       .then((response) => response.data);
//   },
// };

// const userServ = {
//   async getUsers() {
//     try {
//       const usersData = await axios.get<UsersResponseType>(
//         "https://social-network.samuraijs.com/api/1.0/users"
//       );
//       return usersData.data.items;
//     } catch (error) {
//       throw new Error("error, users not found");
//     }
//   },
// };

// export let usersGetFromServer = axios
//   .get<UsersResponseType>("https://social-network.samuraijs.com/api/1.0/users")
//   .then((response) => {
//     // console.log(response.data.items);
//     return response.data.items;
//   });
