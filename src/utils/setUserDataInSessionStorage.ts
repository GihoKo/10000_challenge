import { User } from "@supabase/supabase-js";

const setUserDataInSessionStorage = (user: User) => {
    sessionStorage.setItem("user", JSON.stringify(user));
};

export default setUserDataInSessionStorage;
