import { getAllDealerships, getAllUsers } from "@/actions/users.actions";

const BuyPage = async () => {
    const users = await getAllUsers();
    const dealerships = await getAllDealerships();
    return (
        <div>
            <h2>Buy a car!</h2>
            {/* <button className="btn btn-md" onClick={clickBtn}>
                Click to get users data
            </button> */}
            <ul>
                {users?.map((user) => {
                    return <li key={user.uid}>{user.email}</li>;
                })}
                {!Array.isArray(users) ? <div>Loading...</div> : <></>}
            </ul>
            <ul>
                {dealerships?.map((dealership) => {
                    return <li key={dealership?.uid}>{dealership?.city!}</li>;
                })}
                {!Array.isArray(dealerships) ? (
                    <div>Loading...</div>
                ) : (
                    <>{dealerships.length}</>
                )}
            </ul>
        </div>
    );
};

export default BuyPage;
