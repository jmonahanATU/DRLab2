// Define a functional component named Content
function Content(){
    return(
         // Return a JSX element representing a <div>
        <div>
            <h1>Hello World!</h1>
             <h2>It is {new Date().toLocaleTimeString()}</h2>
         </div>
    );
}

export default Content;