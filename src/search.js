import React,{Component} from "react";
import App from "./App"
import "./App.css";
class Search extends Component{
filterUpdate(){
const val=this.myvalue.value;
console.log(val)
this.props.filterUpdate(val)

}

render(){
  return(
<form>
<input type="text" className="Search" placeholder="NoSimilar Data just Search..! " onChange={this.filterUpdate.bind(this)} ref={(value)=>{this.myvalue=value}}>

</input>
  </form>
  )
 
}
  

}
export default Search;