import { useState } from 'react'

export default function Button({action}) {

    const [active, setActive] = useState(false);

    const doAction = (action) => {
        fetch(action)

        setActive(true)
        setTimeout(() => {
            setActive(false);
        }, 500)
    }

    return (
        <button onClick={e => { doAction(action) } }>{active ? 'Ooh' : 'Do it!'}</button>
    )
}