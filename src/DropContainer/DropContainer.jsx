// import { useDrop } from "react-dnd";
// import DraggableItem from "../DraggableItem/DraggableItem";

// export default function DropContainer({ items, setItems, otherItems, setOtherItems, title }) {
//   const [, dropRef] = useDrop(() => ({
//     accept: "COMPONENT",
//     drop: (dragged) => {
//       // Avoid duplicates
//       if (!items.find((i) => i.id === dragged.id)) {
//         setOtherItems(otherItems.filter(i => i.id !== dragged.id));
//         setItems([...items, dragged]);
//       }
//     }
//   }));

//   return (
//     <div
//       ref={dropRef}
//       style={{
//         border: "2px dashed gray",
//         minHeight: 200,
//         width: "60vw",
//         padding: 15,
//       }}
//     >
//       <h3>{title}</h3>

//       {items.map((item) => (
//         <DraggableItem key={item.id} item={item} />
//       ))}
//     </div>
//   );
// }
import React from "react";
import { useDrop } from "react-dnd";
import DraggableItem from "../DraggableItem/DraggableItem";

const DropContainer=({ ref,items, setItems, otherItems, setOtherItems, title ,widthLen, dataComponent}) =>{
  const [, dropRef] = useDrop({
    accept: "ITEM",
    drop: (dragged) => {
      if (!items.find((i) => i.id === dragged.id)) {
        setOtherItems(otherItems.filter(i => i.id !== dragged.id));
        setItems([...items, dragged]);
      }
    }
  });
     console.log("Hi this is in inside renederComponent",dataComponent)


  return (
    <div ref={ref}>
    <div
      ref={dropRef}
      style={{
        width: `${widthLen}vw`,
        minHeight: 300,
        padding: 5,
        border: "0.5px dashed #aaa",
      }}
    >
      <h3>{title}</h3>

      {items.map((item) => (
        <DraggableItem widthLen={widthLen}key={item.id} item={item} dataComponent={dataComponent}/>
      ))}
    </div>
    </div>
  );
}

export default DropContainer;