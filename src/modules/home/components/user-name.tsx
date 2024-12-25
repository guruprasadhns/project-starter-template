import { IUserNameProps } from "../types";
import { StyledUserName } from "./user-name-styles";

export function UserName(props: IUserNameProps) {
    const { username } = props;
    return <StyledUserName>{username}</StyledUserName>
}