import React from 'react';
import './WelcomeSection.css';

function WelcomeSection () {
    return (
        <section className="welcome-section">
            <div className="welcome-section-wrap container">
                <div className="welcome-text-part">
                <h2 className="section-title welcome-title">Welcome!</h2>
                <p className="welcome-text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at
                    the coast of the Semantics, a large language ocean.
                </p>
                </div>
                <div className="welcome-img">
                    <img src="../images/img_1.jpg" alt="Room"/>
                </div>
            </div>
        </section>
    );
}

export default WelcomeSection;