import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";



function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile/*'} element={<ProfileContainer />}></Route>
                        <Route path={'/dialogs/*'} element={<Dialogs />}></Route>
                        <Route path={'/users'} element={<UsersContainer/>}></Route>
                        <Route path={'*'} element={''}></Route>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
