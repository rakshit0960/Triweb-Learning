export interface User {
    id: number,
    name: string,
    password: string,
    age: number,
    accountStatus: lockState
}

type lockState = "locked" | "unlocked";

export const addUserToDB = (username: string, password: string): string => {
    return "User Registered";
}

export const updateUserData = (user: User): string => {
    return "user Registered";
}
 