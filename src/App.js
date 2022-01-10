import React, {Suspense} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {withRouter} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        function RedirectToProfile() {
            return <Navigate to={`/profile`}/>;
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <div className='center'>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path='/'
                                   element={<RedirectToProfile/>}/>

                            <Route path='/dialogs'
                                   element={
                                       <Suspense fallback={<Preloader/>}>
                                           <DialogsContainer/>
                                       </Suspense>}/>
                            <Route path='/profile'
                                   element={
                                       <Suspense fallback={<Preloader/>}>
                                           <ProfileContainer/>
                                       </Suspense>}/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<LoginPage/>}/>
                            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
                        </Routes>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

const SamuraiJSApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}
export default SamuraiJSApp;