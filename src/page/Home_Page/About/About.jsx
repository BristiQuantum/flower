
import img1 from '../../../assets/img/about.png'


const About = () => {
    return (
        <div className="px-2 lg:px-20 2xl:px-32 flex flex-col md:flex-row gap-9 z-50">
            <div className="basis-[45%] space-y-4">
                <h2>We have got the best collection of flowers</h2>
                <p className='z-40'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores deserunt modi molestiae consectetur vel earum, aut veniam laboriosam ut inventore excepturi, repellendus a odio quam alias dolore molestias at ipsum facilis ipsam nam, maiores quia.</p>
            </div>

            <div className="relative w-[270px] h-[320px] sm:w-[400px] sm:h-[480px] ml-auto md:mx-0">
                <div className="w-52 sm:w-80 sm:h-96  bg-pink-500 p-4 absolute top-0 left-0 z-40">
                    <img src={img1} alt="" />
                </div>
                <div className=" w-32 sm:w-48 sm:h-56 bg-pink-500 p-4 absolute right-0 bottom-0 z-40">
                    <img src={img1} alt="" />
                </div>
            </div>

        </div>
    );
};

export default About;