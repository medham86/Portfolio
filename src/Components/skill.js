import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import {CircleProgress} from 'react-gradient-progress'

import 'react-circular-progressbar/dist/styles.css';

export default function Skill(props){

  const {percent , name} = props;
  
  

  return(
    
          <div className=" text-center mt-4  ">
                <div style={{ width: 200, height: 300 }}>
                    {/* <CircularProgressbar value={`${percent}`}  text={`${percent}`} /> */}
                    {/* <CircleProgress value={`${percent}`}  text={`${percent}`} /> */}
                    <CircleProgress percentage={`${percent}`} strokeWidth={10} primaryColor={['#27374D','#DDE6ED']} secondaryColor="#f0f0f0" fill={'transparent'}  />
                    <p style={{fontWeight:'bold',fontFamily:'sans-serif',fontSize:'20px'}}>{name}</p>
                </div>   
                 
          </div>
          
   
  )

}

