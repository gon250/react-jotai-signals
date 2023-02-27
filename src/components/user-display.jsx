import {useAtom} from "jotai";

import {filteredUsersAtom} from "../atoms/index.js";

function UserDisplay() {
    const [users] = useAtom(filteredUsersAtom);
    return (
        <div>
            {users.map((user) => (
                <div>
                    {user.first_name} {user.last_name} {user.email}
                </div>
            ))}
        </div>
    );
}

export default UserDisplay;
