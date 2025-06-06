import React from 'react';

const YouTubeVideo = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ugn_qmQ0NFo?si=3F3hUaouoOzUCp2e"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTubeVideo;