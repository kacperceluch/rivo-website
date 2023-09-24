import heroImg from "../assets/hero-img.png"

const Hero = () => {
    return (
        <section id="heroSection" className="hero" >
            <div className="hero-container">
                <div className="hero-left">
                    <h1>Discover and Find Your Own Fashion!</h1>
                    <h3>Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</h3>
                    <div className="primary-btn">Explore now</div>
                </div>
                <img src={heroImg} />
            </div>
        </section>
    )
}

export default Hero;