import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Searchtrain from './components/Searchtrain'

const MainRoute = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={< Home/>}/>
                <Route path='/searchtrain' element={< Searchtrain/>} />
            </Routes>
        </>
    )
}

export default MainRoute;