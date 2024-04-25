import MainPages from "./pages/mainPageds/MainPages";
import ErrorPage from "./pages/errorPage/ErrorPage";
import {useLayoutEffect, useState} from "react";


function App() {

    const [user, setUser] = useState({})
    useLayoutEffect(() => {

        const name = prompt('Введите ваше имя:')
        const lastName = prompt('Введите вашу фамилию:')

        setUser({ name, lastName })
    }, [])

    if (!user.name || !user.lastName) {
        return null
    }

    return (user.name.trim() === 'John' && user.lastName.trim() === 'Johns') ? <MainPages user={user}/> : <ErrorPage user={user}/>

}

export default App;








