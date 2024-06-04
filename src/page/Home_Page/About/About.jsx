
import img1 from '../../../assets/img/about1.png'
import img from '../../../assets/img/about.png'
import bg from '../../../assets/grafix/hg6.png'


const About = () => {
    return (
        <div className="about">
            <div className="basis-[45%] space-y-4">
                <h2>We have got the best collection of flowers</h2>
                <p className='z-40'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores deserunt modi molestiae consectetur vel earum, aut veniam laboriosam ut inventore excepturi, repellendus a odio quam alias dolore molestias at ipsum facilis ipsam nam, maiores quia.</p>
            </div>

            <div className="about-img-box">
                <div className="about-img1 ">
                    <img src={img1} alt="" className='h-full'/>
                </div>
                <div className="about-img2">
                    <img src={img} alt="" />
                </div>
            </div>


            <img src={bg} alt="" className='about-grafix1'/>
            <img src={bg} alt="" className='about-grafix2'/>

        </div>
    );
};

export default About;