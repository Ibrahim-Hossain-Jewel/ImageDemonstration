import React from 'react';
import { Route, Link } from 'react-router-dom';

const HomePage = ()=>(
  <div>
    <h2>Home Page component</h2>
  </div>
);
const topicDetails = (props)=>{
  console.log(props);
  return(
    <div>
      <h1>Topic detail page {props.match.params.topicsId} </h1>
    </div>
  );
}
const topiclist = (props)=>{
  console.log(props);
  //Nested react routing structure.
  return(
    <div>
      <h1> Topic list page </h1>
      <Link to = {`${props.match.url}/12`}>Topic 12</Link><br /><br />
      <Link to = {`${props.match.url}/15`}>Topic 15</Link><br /><br />
      <Link to = {`${props.match.url}/20`}>Topic 20</Link>
    </div>
  );
}
//Basically path name is the route name
function App() {
  return(
    <div>
      <Route path = '/' component = {HomePage} />
      <Route path = '/blog/asdqw/topics' component = {topiclist} />
      <Route path = '/blog/asdqw/topics/:topicsId' component = {topicDetails} />
    </div>
  );
}
export default App;