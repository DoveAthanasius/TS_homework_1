import { IUser, usersArray, } from "./models/users"
import { userInfoArray } from "./models/userinfo"
import { IUserPosition } from "./models/userPosition"

function getUsersJobPosition(usersArray: Array<IUser>): Array<IUserPosition> {
  const userPositionArray: Array<IUserPosition> = []
  usersArray.forEach(user => {
    const userInfo = userInfoArray.find(userInfo => userInfo.userid === user.userid)
    if(userInfo) {
      userPositionArray.push(
        {
          name: userInfo.name,
          position: userInfo.organization.position,
          age: userInfo.age,
          gender: user.gender
        }
      )
    }
  });
  return userPositionArray;
}

let usersPosition = getUsersJobPosition(usersArray);
console.log("Users Possition", usersPosition);
