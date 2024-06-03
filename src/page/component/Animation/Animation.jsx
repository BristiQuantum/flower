import hg1 from '../../../assets/grafix/hg1.png'
import hg2 from '../../../assets/grafix/hg2.png'
import hg3 from '../../../assets/grafix/hg3 .png'

import './Animation.css'

const Animation = () => {
    return (
        <div>
            <img src={hg1} alt="" className='hg1'/>
            <img src={hg2} alt="" className='hg2'/>
            <img src={hg3} alt="" className='hg3'/>
            
        </div>
    );
};

export default Animation;