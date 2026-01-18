import './App.css';
import Education1 from './component/Education/Education1/Education1';
import Experience1 from './component/Experience/Experience1/Experience1';
import LeftPage from './Pages/LeftPage/LeftPage';
import RightPage from './Pages/RightPage/RightPage';
import SortableList from './Pages/DNDExample/DNDExample';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useState } from "react";
import DropContainer from './DropContainer/DropContainer';
function App() {
  const [left, setLeft] = useState([
      { id: 2, type: "Header", props: { name: "Nitesh Agarwal" } },
      { id: 3, type: "Experience", props: { company: "Google", role: "Developer" } }
    ]);
  
  const [right, setRight] = useState([
    // { id: 1, type: "Header1", props: { name: "Nitesh Agarwal" } },
    //       { id: 4, type: "header", props: { name: "Nitesh Agarwal" } },
    //   { id: 5, type: "header", props: { name: "Nitesh Agarwal" } },

  ]);
  function upperFunction(ele){
    setRight([ele])
  }
  return (
    <div className="App">
      <h1>Resume builder</h1>
          <DndProvider backend={HTML5Backend}>

        <div className='container'>
          <div>
            <LeftPage left={left} right={right} setLeft={setLeft} setRight={setRight}/>
          </div>
          <div>
            <RightPage left={left} right={right} setLeft={setLeft} setRight={setRight} upperFunction={upperFunction}/>
          </div>
        </div>
          <DropContainer
                title="Right Container"
                items={right}
                setItems={setRight}
                otherItems={left}
                setOtherItems={setLeft}
                />
        </DndProvider>
    </div>
  );
}

export default App;
