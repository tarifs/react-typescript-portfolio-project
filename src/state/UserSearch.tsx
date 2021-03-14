import {useState} from "react";

const users = [
    {name: 'A', age: '10'},
    {name: 'B', age: '20'},
    {name: 'C', age: '30'}
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('')
    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })
    }

    return <div>
        User Search
        <input value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={onclick}>Find User</button>
    </div>
}

export default UserSearch