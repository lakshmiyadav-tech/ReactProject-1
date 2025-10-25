const HeroSection = () => {
    return (
        <main>
            <div className="hero container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="hero-btn">
                        <button>Shop now</button>
                        <button className="secondary-btn">Category</button>
                    </div>
                        <div className="shopping">
                            <p>Also available on</p>
                            <div className="icons">
                                <img src="/amazon logo.png" alt="Amazon logo" width={32} />
                                <img src="/flipkartlogo.png" alt="Flipkart logo" width={32} />
                            </div>
                        </div>
                    
                </div>
                <div className="hero-image">
                    <img src="/nikeshoes.png" alt="nikeshoes" />
                </div>
            </div>
        </main>
    )
}

export default HeroSection;