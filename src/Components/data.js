
 export const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 1024},
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: {  max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  export const skillData = [{
      id:1,
      percent:90,
      name:'Cyber security'
    },
    {
      id:2,
      percent:75,
      name:'FrontEnd Developer'
    },
    {
      id:3,
      percent:50,
      name:'BackEnd Developer'
    },
    {
      id:4,
      percent:70,
      name:'Data Science'
    }]


    function importAll(r) {
      let images = {};
      r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
      return images;
    }
    
   export const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));