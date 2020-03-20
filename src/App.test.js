import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from './testStore';
import { BrowserRouter } from 'react-router-dom';
import GamesProvider, { GamesContext } from './contexts/GamesContext';
import HomepageNav from './components/HomepageNav/HomepageNav';
import App from './App';
import SignInNav from './components/SignInNav/SignInNav';
import SignUpNav from './components/SignUpNav/SignUpNav';
import SearchPageNav from './components/SearchPageNav/SearchPageNav';
import ProfileNav from './components/ProfileNav/ProfileNav';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SearchForm from './components/SearchForm/SearchForm';
import ReviewFilter from './components/ReviewFilter/ReviewFilter';
import ProfileStats from './components/ProfileStats/ProfileStats';
import PlatformFilter from './components/PlatformFilter/PlatformFilter';
import GenreFilter from './components/GenreFilter/GenreFilter';
import GameResults from './components/GameResults/GameResults';
import GameResultItem from './components/GameResultItem/GameResultItem';
import FolderSuccessPopup from './components/FolderSuccessPopup/FolderSuccessPopup';
import FolderGamesDisplay from './components/FolderGamesDisplay/FolderGamesDisplay';
import FolderGame from './components/FolderGame/FolderGame';
import FolderDisplay from './components/FolderDisplay/FolderDisplay';
import AddFolderWindow from './components/AddFolderWindow/AddFolderWindow';

describe('Basic smoke tests', () => {
    it('app renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<BrowserRouter>
                            <GamesProvider>
                                <App />
                            </GamesProvider>
                        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Homepage nav renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <HomepageNav />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Sign in nav renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <SignInNav />
                </GamesProvider>
            </BrowserRouter>
        , div)
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Sign up nav renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <SignUpNav />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Search page nav renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <SearchPageNav />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Profile nav renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <ProfileNav />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Sign up form renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <SignUpForm />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Sign in form renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <SignInForm />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Search form renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <SearchForm />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Review filter renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <ReviewFilter />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Profile stats render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <ProfileStats />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Platform filters render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <PlatformFilter />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Genre filters render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider>
                    <GenreFilter />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Game results render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <GameResults />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Game result item renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <GameResultItem />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Folder success popup renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderSuccessPopup />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Folder game display renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderGamesDisplay />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Folder game item renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderGame />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Folder display renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <GamesProvider value={TestObject}>
                    <FolderDisplay />
                </GamesProvider>
            </BrowserRouter>
        , div);
        ReactDOM.unmountComponentAtNode(div);
    });

})

