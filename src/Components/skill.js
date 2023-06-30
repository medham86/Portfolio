import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {CircleProgress} from 'react-gradient-progress'

import 'react-circular-progressbar/dist/styles.css';

export default function Skill(props){

  const {percent , name} = props;
  
  

  return(
    
          <div className="skill text-center mt-4 z-10" style={{color:'white'}}>
               
                   
                    <CircleProgress percentage={`${percent}`} primaryColor={['red','#ffc107']}   strokeWidth={8}  secondaryColor="#FFF4F4"   />
                    
                    <p style={{fontWeight:'bold',fontFamily:'sans-serif',fontSize:'20px'}}>{name}</p>
                {/* </div>    */}
                 
          </div>
          
   
  )

}

