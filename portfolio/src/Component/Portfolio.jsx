
import img2 from '../Images/port.avif'
import Project from './Project';
import Skills from './Skills';

const Portfolio = ()=>{
    return(
        <>

           <div className="portfolio">
             <div className='bannerImg'>
                <img src={img2} alt="port-banner" />
                <p>Full Stack developer ..</p>
             </div>
           </div>

           <Project/>
           <hr className='line' />
            <Skills/>
       

           
        </>
    )
}
export default Portfolio;