import React from 'react'
import './homepage.css';
// const Video = () => {
//     return (

//         <>





        {/* <div className="videoList">
<div className="video">
    <video className="thevideo" loop preload="none">
        <source src="https://giant.gfycat.com/VerifiableTerrificHind.mp4" type="video/mp4"></source>
        <source src="https://giant.gfycat.com/VerifiableTerrificHind.webm" type="video/webm"></source>
    </video>
</div>

        </div> */}
        {/*  */}
            {/* <div className="videosList">           

<div className="video">
    <video className="thevideo" loop preload="none">
      <source src="https://giant.gfycat.com/VerifiableTerrificHind.mp4" type="video/mp4">
      <source src="https://giant.gfycat.com/VerifiableTerrificHind.webm" type="video/webm">
    Your browser does not support the video tag.
   /> */}
   {/* </source> */}
 
// </>
//     )
// }
class Video extends React.Component{

    state = {
      products: [
        {
          "_id": "1",
          "title": "Video 1",
          "src": [
              "video1.mp4",
              
            ],
          "description": "UI/UX designing, html css tutorials",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
         
        },
        {
          "_id": "2",
          "title": "Video 2",
          "src": [
              "video2.mp4",
             
            ],
          "description": "UI/UX designing, html css tutorials",
          "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        
        }
      ],
      index: 0
    };
  
    myRef = React.createRef();
  
  
  
    render(){
      const {products, index} = this.state;
      return(
        <div className="middle">
          {
            products.map(item =>(
              <div className="details" key={item._id}>
                <div className="big-img">
                  <video src={item.src[index]} width="500px" alt="" autoPlay muted loop/>
                </div>
  
                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                    
                  </div>
                <p>{item.description}</p>
                  <p>{item.content}</p>
  
                  </div>
              </div>
            ))
          }
        </div>
      );
    };
  }
  

export default Video
