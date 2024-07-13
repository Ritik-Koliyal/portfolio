import {Link} from 'react-router-dom'
const Home = () =>{
    return(
        <>
            <div className="Home">            
                <h1>Ritik Koliyal</h1>
                <p>Full Stack developer ..</p>
                <p>Building Web Applications That Are as Functional as They Are Beautiful, From Frontend to Backend</p>
                <button> <Link to='/portfolio' style={{textDecoration: 'none', color:'white'}}> View Projects</Link></button>
            </div>
        </>
    )
}
export default Home;