import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Skill from "./skill";
import { responsive, skillData } from "./data";

export default function Skills(){

 


    const skill = skillData.map(item=>(

      <Skill percent={item.percent} name={item.name}/>
    ))

  return(
    <div id="skills" className="container-fluid text-center"  style={{height:'100vh',backgroundColor:'#526D82',color:"#f0f0f0" }} >
     <div className="p-4">
           <h1>Skills</h1>
           <p>This is my skills</p>
     </div>
    <Carousel className="w-75 mx-auto ml-4"  responsive={responsive} >
      
      {skill}
    
    </Carousel>

    </div>
  )

}


