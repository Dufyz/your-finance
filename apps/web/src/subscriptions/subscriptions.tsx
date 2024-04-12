import UserSubscription from "./user-subscription";

export default async function Subscriptions({ user }: any) {

    return (
        <>
            <UserSubscription user={user} />
        </>
    )

}