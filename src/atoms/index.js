import {atom} from "jotai/vanilla";

export const filterAtom = atom("");

export const usersAtom = atom(async () => {
    const resp = await fetch("https://reqres.in/api/users");
    const json = await resp.json();
    return json.data;
});

export const filteredUsersAtom = atom(async (get) => {
    const filter = get(filterAtom);
    const users = await get(usersAtom);
    return (users ?? [])?.filter?.(
        (user) =>
            user.first_name.includes(filter) ||
            user.last_name.includes(filter) ||
            user.email.includes(filter)
    );
});
