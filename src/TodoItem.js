import React from "react";
// Styling that is used when box is checked
function TodoItem(props){
  const completedStyle = {
    fontStyle: "italic",
    color: "cdcdcd",
    textDecoration: "line-through"
  }
    
/// Input housing the checkbox and clickEvent that enables the checkmark when clicked  
  return (
      <div>
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
// conditionally rendered line below, if box isn't checked styling above isn't applied
        />
        <p style={props.item.completed ? completedStyle: null}>{props.item.text}</p>
      </div>
    );
}

export default TodoItem