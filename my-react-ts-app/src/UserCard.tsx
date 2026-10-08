export default function UserCard({name } : {name : string}) {
    return(
        <div className = "user">
            <h3> Name: {name} </h3>
        </div>
    )
}