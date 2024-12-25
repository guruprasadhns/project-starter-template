import { UserName } from "../components";


//container holds logic and state, doesn't do any rendering stuff
export function UserNameContainer() {

    //makes api call and set user name
    const username = 'TestUser';

    return (
        <UserName username={username} />
    )
}