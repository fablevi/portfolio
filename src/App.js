import { useState, useLayoutEffect, useEffect } from "react";
import { Button, Provider, defaultTheme } from "@adobe/react-spectrum"
import { Row, Col, Container } from "react-bootstrap";
import "./Style/App.css"
import "./Style/AnimateCursor.css"

import LeftBox from "./Components/Left/LeftBox.jsx";
import RightBox from "./Components/Right/RightBox.jsx";
import SchemeChangerButton from "./Components/Menu/SchemeChangerButton.jsx";

function App() {
  if (!localStorage.getItem("componentScheme")) {
    localStorage.setItem("componentScheme", "dark");
  }

  const [componentScheme, setComponentScheme] = useState(localStorage.getItem("componentScheme"));

  function changeComponentScheme() {
    if (componentScheme === "light") {
      setComponentScheme("dark")
      localStorage.setItem("componentScheme", "dark");
    } else {
      setComponentScheme("light")
      localStorage.setItem("componentScheme", "light");
    }
  }

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  useEffect(()=>{
    const cursorAnimationDiv = document.getElementById('containerBG').firstChild
    cursorAnimationDiv.removeEventListener("mousemove", mouseMoved)
    cursorAnimationDiv.addEventListener("mousemove", mouseMoved)
  },[])

  function mouseMoved(e){
    const {currentTarget : target} = e;
    const rect = target.getBoundingClientRect(),
          x = e.clientX -rect.left,
          y = e.clientY -rect.top;
          target.style.setProperty("--mouse-x", x + "px");
          target.style.setProperty("--mouse-y", y + "px");
  }

  const [width, height] = useWindowSize();
  //<span>Window size: {width} x {height}</span>

  return (
    <Provider theme={defaultTheme} id="prov" colorScheme={componentScheme}>
      <Container fluid className="containerBG" id="containerBG">
        <Row className="rowextra">
        {width < 768? 
              <div className="dialogDiv">
                <div style={{fontSize:"26px"}}>
                  Fábián Levente
                </div>
                <SchemeChangerButton componentScheme={componentScheme} changeComponentScheme={changeComponentScheme}/>
              </div> 
            :null}
          <Col className={width <= 768 ? "" : "colextra"} style={{ backgroundColor: "unset" }} md={6} xs={12}>
            <LeftBox width={width} componentScheme={componentScheme} />
          </Col>
          <Col className="colextra" style={{ backgroundColor: "unset" }} md={6} xs={12}>
            <RightBox width={width} componentScheme={componentScheme} changeComponentScheme={changeComponentScheme}/>
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;

/*
<SchemeChangerButton componentScheme={componentScheme} changeComponentScheme={changeComponentScheme}/>

 <Button onPress={()=>{changeComponentScheme()}}>
            {componentScheme === "light"?
              <> <div style={{marginRight:"5px"}}><LightIcon width={"20"} height={"20"}/></div></> :
              <> <div style={{marginRight:"5px"}}><DarkIcon width={"20"} height={"20"}/></div></>}
            
          </Button>
          <div style={{ position: "absolute", padding: "1%", width: "100%", minHeight: "80px" }}>

      </div>
*/
