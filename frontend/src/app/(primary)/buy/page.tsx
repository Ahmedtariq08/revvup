"use client";
import { getAllUsers } from "@/apis/users";
import { User } from "@/types/user.shema";
import {
    AwaitedReactNode,
    JSXElementConstructor,
    Key,
    ReactElement,
    ReactNode,
    ReactPortal,
    useState,
} from "react";

const BuyPage = () => {
    const [users, setUsers] = useState<any>();

    const clickBtn = async () => {
        console.log("getting users");
        const data = await getAllUsers();
        if (data.isSuccess) {
            setUsers(data?.data ?? []);
        }
        console.log(data);
    };
    return (
        <div>
            <h2>Buy a car!</h2>
            <button className="btn btn-md" onClick={clickBtn}>
                Click to get users data
            </button>
            <ul>
                {users?.data?.map(
                    (user: {
                        id: Key | null | undefined;
                        email:
                            | string
                            | number
                            | bigint
                            | boolean
                            | ReactElement<any, string | JSXElementConstructor<any>>
                            | Iterable<ReactNode>
                            | ReactPortal
                            | Promise<AwaitedReactNode>
                            | null
                            | undefined;
                    }) => {
                        return <li key={user.id}>{user.email}</li>;
                    },
                )}
            </ul>
        </div>
    );
};

export default BuyPage;
