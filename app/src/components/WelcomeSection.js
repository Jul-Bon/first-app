import React from 'react';

function WelcomeSection () {
    return (
        <section className="welcome-section">
            <div className="container">
                <div className="welcome-text-part">
                <h2 className="welcome-title">Welcome!</h2>
                <p className="welcome-text">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at
                    the coast of the Semantics, a large language ocean.
                </p>
                </div>
                <div className="welcome-img"></div>
            </div>
        </section>
    );
}

export default WelcomeSection;