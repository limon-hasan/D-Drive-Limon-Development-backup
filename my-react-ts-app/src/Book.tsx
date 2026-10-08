interface BooksPropsType {
    name : string
}

export default function Book({name} : BooksPropsType) {
    return(
        <li>BOOK NAME: {name} </li>
    )
}