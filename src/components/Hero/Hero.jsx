import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className='hero'>
           <img src={profile_img} alt="" />
           <h1><span>I'm Alamin Hossain,</span> frontend Developer based in BD.</h1>
           <p>I am a froentend Developer, a passionate web developer and front-end designer with expertise in creating interactive and user-friendly web experiences.</p>
           <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
           </div>
        </div>
    );
};

export default Hero;