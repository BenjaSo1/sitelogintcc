import './styles/App.css'
import Card from './utils/card.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Logincard from './utils/logincard.jsx';
import Registercard from './utils/register.jsx';
import Cardpublic from './utils/profileinfop.jsx';
import Profileinfo from './utils/profileinfo.jsx';

function App() {
    return (
        <BrowserRouter>
        <Routes>
        <Route path='/p/:username' element= {
            <Card>
                <Cardpublic/>
            </Card>
        }></Route>
        <Route path='/register' element={<Registercard/>}/>
        <Route path='/login' element={<Logincard/>}/>
        <Route path='/' element={
            <Card>
                <Profileinfo/>
            </Card>
        }/>
        </Routes>
        </BrowserRouter>
    )
}

export default App