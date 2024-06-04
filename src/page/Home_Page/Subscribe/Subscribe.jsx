

const Subscribe = () => {
    return (
        <div className="subscribe">
            <div className="subscribe-title">
                <h2 className="">join us for get offers ! <br />
                subscribe now
                </h2>

                <div className="flex-grow ">
                    <div className="input-container">
                        <input type="text" name placeholder="your name" className="s-input" autoComplete="false"/>
                        <input type="email" name="email" placeholder="your email"  className="s-input" autoComplete="false"/>
                        <input type="submit" value="Subscribe" className="subsribe-btn"/>
                    </div>
                    <p className="text-sm mt-3">Lorem ipsum dolor sit amet consectetur. <span className="subscribe-text">Lorem, ipsum.</span></p>
                </div>
            </div>
            
        </div>
    );
};

export default Subscribe;