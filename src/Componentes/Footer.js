import '../App.css';
import logo from '../Recursos/logo.svg';
import icono1 from '../Recursos/icon-facebook.svg';
import icono2 from '../Recursos/icon-twitter.svg';
import icono3 from '../Recursos/icon-pinterest.svg';
import icono4 from '../Recursos/icon-instagram.svg';
function App(){
    return(
        <div className = "footer">
            <div >
                <img style={{width: '20%',justifySelf:"start", marginLeft:"30%",background:"#242325"}} src = {logo} alt = "Shortly"/>
            </div>
            <div style={{ display:"grid", gridTemplateRows:"23% 16% 16% 16%",backgroundColor: "#242325", width:"8%" , marginLeft:"38%" , justifyItems:"start"}}  >
                <h3 href = "./" >Features</h3>
                <p>Link Shortening</p>
                <p>Branded Links</p>
                <p>Analytics</p>
            </div>
            <div style={{backgroundColor: "#242325",display:"grid", gridTemplateRows:"23% 16% 16% 16%", width:"8%" , marginLeft:"52%" , justifyItems:"start"}}>
                <h3 href = "./" >Resources</h3>
                <p>Blog</p>
                <p>Developer</p>
                <p>Support</p>
            </div>
            
            <div style={{backgroundColor: "#242325",display:"grid", gridTemplateRows:"17% 15% 15% 16% 16%", width:"8%" , marginLeft:"66%" , justifyItems:"start"}}>
                <h3 href = "./" >Company</h3>
                <p>About</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>

            <div  style={{backgroundColor: "#242325" , display:"grid",gridGap:"10px" ,gridTemplateColumns:"25% 25% 25% 25%", width:"14%" , marginLeft:"76%" ,justifyItems:"start"}}>
                <img style={{width: "20px"}} src = {icono1} />
                <img style={{width: "20px"}} src = {icono2} />
                <img style={{width: "20px"}} src = {icono3} />
                <img style={{width: "20px"}} src = {icono4} />
            </div>
        </div>
    );
}

export default App;