import AboutText from '../components/AboutText/AboutText'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Footer from '../components/Footer/Footer'

function About() {
    return (
        <>
            <Header />
            <Banner title="About" image="About.jpg" />
            <div className="container">
                <AboutText />
            </div>
            <Footer />	
        </>
    )
}

export default About