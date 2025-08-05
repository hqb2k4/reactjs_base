/*
arrow function = () => {}
function component = () => {
  return (

  )
}
*/

// import css
import './style.css';

//Fragment <></>
const MyComponent = () => {
    return (
        <> 
            <h2 style={
                {backgroundColor: 'lightblue'}
            }>My Component</h2>
            <p className="description">Component = HTML + CSS + JS</p>
        </>
    );
}

export default MyComponent;