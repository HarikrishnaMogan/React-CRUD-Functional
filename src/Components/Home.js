import"./Home.css";
function Home()
{
    return(
        <>
        <div className="container">
         <div className="head">
             <h1 className="display-3 font-weight-bold">Learning MERN Stack</h1>
         </div>
         <div>
            <h3 className="techheading">Technologies Used</h3>
            <div className="tech">
              <div>React JS</div>
              <div>React Router Dom</div>
              <div>Bootstrap</div>
              <div>Css</div>
            </div>
         </div>
         </div>
        </>
    );
}

export default Home;