import React from 'react';

const YouTubeVideo = () => {
    return (
        <div id="youtubeVideoDiv" style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
            <div class="gdpr-info-box js-data-gdpr-not-available-placeholder" style="display: none;">
                <div id="ot-warning-text">
                    <p class="title">We're sorry, this content is unavailable.</p>
                    <p class="desc">To improve your experience, make sure Targeting cookies are enabled.</p>
                </div>
                <div id="ot-settings-btn">
                    <a class="btn btn-tertiary" onclick="OneTrust.ToggleInfoDisplay()">Update your cookie settings</a>
                </div>
            </div>
                <iframe
                    className="optanon-category-C0004 embed-responsive-item"
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/3YxaaGgTQYM?si=0Tq4NitaSWuh20MQ"
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