import UserCard from "./UserCard"

interface User {
    name : string, 
    isLoggedIn : boolean
}

const users : User[] = [
    {name :"Hasan", isLoggedIn :  true},
    {name :"Limon", isLoggedIn :  true},
    {name :"Jawad", isLoggedIn :  false},
    {name :"Sakib", isLoggedIn : true},
    {name :"Shanto", isLoggedIn :  false},
]


export default function Users({name} : {name : string}) {
    return(
        <div>
            {
                // users.map(user => <li>{user.name} {user.isLoggedIn.toString()}</li>)

                // users.map(user => {
                //         return <li>{user.name} {user.isLoggedIn.toString()}</li>
                //     }
                // )
                users.map(user => <li> <UserCard name = {user.name }></UserCard></li>
                )
            }
        </div>
    )
}