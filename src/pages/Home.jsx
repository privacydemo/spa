import React from 'react';
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Departments from '../components/Departments';
import MessageForm from '../components/MessageForm';
import YouTubeVideo from '../components/YouTubeVideo';

const Home = () => {
    return (
        <>
            <Hero
                title={"Life Care Hospital, Where Compassion Meets Excellence in Healthcare "}
                imageUrl={"/hero.png"}
            />
            <YouTubeVideo />
            <Biography imageUrl={"/about.png"} />
            <Departments />
            <MessageForm />

        </>
    );
}

export default Home;
