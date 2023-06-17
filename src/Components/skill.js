import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {CircleProgress} from 'react-gradient-progress'

import 'react-circular-progressbar/dist/styles.css';

export default function Skill(props){

  const {percent , name} = props;
  
  

  return(
    
          <div className="skill text-center mt-4 ">
                {/* <div style={{ width: 200, height: 300 }}> */}
                   
                    <CircleProgress percentage={`${percent}`} primaryColor={['#27374D','#ffc107']}   strokeWidth={8}  secondaryColor="#f0f0f0"   />
                    
                    <p style={{fontWeight:'bold',fontFamily:'sans-serif',fontSize:'20px'}}>{name}</p>
                {/* </div>    */}
                 
          </div>
          
   
  )

}

