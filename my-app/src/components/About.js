import React,{useState} from "react";
import PropTypes from "prop-types";
export default function About(props) {

    // const [myStyle,setMyStyle] = useState({color:'white',
    // backgroundColor:'black'})

    // const [btnText,setBtnText]=useState("Disable Dark Mode")


    // let toggleStyle=()=>{
    //     if (myStyle.color==='white'){setMyStyle({
    //         color:"black",
    //         backgroundColor:"white"})
    //         setBtnText('Enable Dark Mode');

    //     }
    //     else{setMyStyle({
    //         color:"white",
    //         backgroundColor:'black'})
    //         setBtnText('Disable Dark Mode');
    //     }
    // }
    // document.body.style.backgroundColor='white';
  return (
    <>
      <div className="container my-3"   >
        <h1 className={`text-center mt-5 text-${props.mode==='dark'?'light':'dark'}`}>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                WELCOME
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='dark'?'white':'black'}}>
                Welcome to our innovative text analyzer website, where words
                come to life through the power of manipulation! At TextWizard,
                we empower you to explore the versatility of your text like
                never before. Seamlessly transform paragraphs by toggling
                between uppercase and lowercase, unlocking a spectrum of
                creative possibilities. Whether you're a writer seeking
                stylistic variations, a student aiming for diverse
                presentations, or a professional enhancing document readability,
                TextWizard is your go-to tool. With user-friendly features and
                real-time previews, you can effortlessly experiment with case
                changes, capitalize on bold expressions, and unleash the full
                potential of your prose. Join us on a journey of linguistic
                exploration where your words take center stage, and let
                TextWizard be your trusty companion in the art of textual
                metamorphosis.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
      <button className="btn btn-primary my-3"style={myStyle} onClick={toggleStyle}>{btnText}</button>
      </div> */}
    </>
  );
}
