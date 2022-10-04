import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
//import Othercom from './externalComponent/externalComponent'; 
import { Othercom, Logo } from './externalComponent/externalComponent';
import Externalsecond from './externalComponent/externalSecondComponent';
import Prop from './externalComponent/prOps'


///////////////////////////////////////////////////todo app

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       todo: [],
//       value: ''
//     }
//   }

//   addTodo = () => {
//     this.state.todo.push(this.state.value)
//     this.setState({
//       todo: this.state.todo,
//       value: ''
//     })

//   }

// deleteTodo =(index)=>{
// this.state.todo.splice(index,1)
// this.setState({
//   todo: this.state.todo,

//  })
// }


// edit=(index)=>{
//   let  updateValue = prompt('put edit value')
//   this.state.todo[index]=updateValue
//   this.setState({
//     todo: this.state.todo,

//    })

// }

//   render() {
//     let { todo, value } = this.state
//     return (
//       <div>
//         <h1>todo app</h1>

//         <input value={value} type='text' placeholder="enter value" onChange={(e) => this.setState({ value: e.target.value })}></input>
//         <button onClick={this.addTodo} > add val</button>
//         <ul>
//           {todo.map((val, i) => {
//             return <li key={i} > {val}
//             <button  onClick={()=> this.edit(i)} >edit</button>
//             <button  onClick={ ()=> this.deleteTodo(i) } >   delete</button>

//              </li>
//           })}

//         </ul>

//       </div>
//     )
//   }
// }

///////////////////////////////////////////////////todo app


///start react 

///////class component

// class   App extends React.Component{
//   render(){
//     return(
// <div>hello react</div>
//     )
//   }
// } 

//////////////////  var

// class App extends React.Component {
//   render() {
//     let name = 'husnain'
//     let naMe = ['mak', 'hena', 'dom', 'tommy',]
//     return (
//       <div>
//       <h1>{name} </h1>
// <ul>
//         <li>  {naMe[0]} </li>
//         <li>  {naMe[1]} </li>
//         <li>  {naMe[2]} </li>
//         <li>  {naMe[3]} </li>
//       </ul>
//       </div>
//     )
//   }
// }



// class App extends React.Component{
//   render(){
//    let firstName ='mak'
//    let midName ='tommy'
//    let lastName ='dom'

//     return(

// <div>  
// { `${firstName }   ${lastName} ` }  </div>

//     )
//   }
// }
///////////////////////////////////////////////////////////

// let ArrayObject = [{name:'mak'},{name:'tommy'}]
// class App extends React.Component{
//   render(){
//     return(
//     <div>
//      <h1>{ArrayObject.map((item,i)=>{
//     ////////////////////////////////////  console.log(item)
//  return <h1  key={i} >{item.name} </h1>
//      })} </h1>

//     </div>
//     )
//   }
// }


// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////other compoonent  
// class Header extends React.Component{
//     render(){
//         return(
//             <div  className='header' >
//                       <h1>header component  render to App component </h1>
//             </div>
//         )
//     }
// }
// ///////////////////app component in the render
// class App extends React.Component{
//     render(){
//         return(
//             <div  >
//                 <Header/>
// //                            
//        <h1  className='app' >
// //                     main A<sup  >pp</sup> component 
// //                 </h1>
// //                 <OthersComponent/>
// </div>
//                     )
//     }
// }
// ////////////////////////////////others component
// class OthersComponent  extends React.Component{
//     render(){
//         return (
//            <div className='fotor'>
//             <h2  style={{color : 'blue'}  }> OthersComponent  render to App component </h2>

//            </div>
//         )
//     }
// } 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  class app extends React.Component{
//     render() {
//         return(


//            <div>

//             <Externalsecond/>
//            <Othercom/>
//            <Othercom/>
//            <Othercom/>
//            <Othercom/>
//                 <h1  className='bg-danger' >hello world</h1>

// <img style={{width : '200px'}}  src="https://th.bing.com/th/id/OIP.0jQYtp8WxZ0se451lF-neAHaD4?w=311&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
//          <externalSecond/>
//              <Externalsecond/>
//              <Logo/>
//             </div>
//         )
//     }
//  } 





////////////////////////

// class App extends React.Component {
//     //constructorMaking
//     constructor() {
//         super()
//         this.state = {
//             name: "husnain",
//             mail:" husnain3964@gmail.com",
//             cell: "03143964",
//             newName:''

//         }
//     };

// //function
//  adding = ()=>{
//     console.log(this.state.name);
// }

// //function setVaal
// setVal=()=>{

// this.setState({
//     name:'husnain shah'
// })

// }

// addnew =()=>{
//     this.setState({
//         name:  this.state.newName
//     })
// }

//     render() {
//         return (
//             <div>
//                 <h1> my mail is
//                     {
//                         ` ${this.state.mail} `
//                     }
//                 </h1>
//                 <h1>my name is
//                     {
//                         ` ${this.state.name}`
//                     }
//                 </h1>
//                 <h1>my num is

//                     {
//                         ` ${this.state.cell}`
//                     }
//                 </h1>
//   {/* <input onChange={(e)=>this.setState({name:e.target.value})}  type="text" name=""  placeholder='value' id="val" /> */}
//    {/* <input onChange={(e)=>console.log(e.target.value) } type="text" name=""  placeholder='value' id="val" /> */}
//    <input onChange={(e)=>this.setState({newName:e.target.value})} type="text" name=""  placeholder='value' id="val" />

//             <button onClick={this.adding} >add</button>
//            <button  onClick={this.setVal}  >change name</button>
//             <button onClick={this.addnew} >addnew</button>       
//                    </div>
//         )
//     }
// }





///////////////// one function all handle input
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             name:'shapater',
//             email:'shapater@.mail.com',
//             phone:'56fdverg345'
//         }
//     }

// addVal=(e)=>{
//     this.setState({
//   [e.target.name]:e.target.value   
// })
// }


//     render(){
//         return(
// <div>
// <div>
// <h1>my name is
//     {
//         ` ${this.state.name}`
//     }
// </h1>

// <h1>my mail is
//     {
//         ` ${this.state.email}`
//     }
// </h1>
// </div>


// <input  name='name' onChange={(e)=>this.addVal(e) } type="text" placeholder='enter your val' />
// <input  name='email'  onChange={(e)=>this.addVal(e) } type="text" placeholder='enter your val' />
// <button onClick={ this.addVal}>g</button>
//             </div>
//         )
//     }
// }
// export default App;






////props 
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//           name:"amk",
//           email:'svcjkdsfhdsk'
//         }
//     }

//     sendProps= (abc)=>{
//         console.log(abc);
//     }

//     render(){
//         return(

//         <div>
//             <h1>
//               this is app page

//             </h1>
//         < Othercom  name={this.state.name} email='12345555'   />

//         <Log sendProps={this.sendProps} />
//         </div>




//         )
//     }
// }

// export default App


// class App extends React.Component{

//     //recive date functiom
//     get_data =(data)=>{
//         console.log(data);
//     }

// //send date    

//     render(){
//         return(
//             <div>
//                 <h1>
//                      this is app component
//                 </h1>
//                 <Prop get_data={this.get_data}   />
//                 {/* <Prop name='house' price='30000000000' />
//                 <Prop name='bike' price='30000' />
//                 <Prop name='watch' price='3000' /> */}
//             </div>
//         )
//     }
// }


// export default App

///////////////////////////////////////////////////////////todo app
class App extends React.Component {

    constructor() {
        super()

        this.state = {
            todo: [],
            Value: ''

        }
    }



    //button add
    add = () => {


        // this.state.todo.push(this.state.Value)
        // this.setState(this.state.todo),

        this.setState({
            todo: [...this.state.todo, this.state.Value],
            Value: ''
        })

    }
    //delete button
    del = (index) => {
        this.state.todo.splice(index , 1)
        this.setState({
            todo: this.state.todo
            
        })
    }

//edit button
edit = (index)=>{

let update = prompt(' update value')


this.state.todo [index]=update
    this.setState({
        todo:this.state.todo
    })

}

    render() {

        let { todo, Value } = this.state
        return (

            <div>
                <ul className='mainheading' >
                    todo app
                    <br />

                    {
                        todo.map((value, index) => {
                            return (
                                <li key={index} > {value}
                                    <button onClick={() => this.del(index)} className='button'>del</button>
                                    <button  onClick={()=> this.edit(index)} className='button'>edit</button>
                                </li>
                            )
                        })
                    }


                </ul>
                <div className='input' >
                    <input className='input' value={Value} onChange={(e) => this.setState({ Value: e.target.value })} type="text" name="" id="" />
                    <button className='button' onClick={this.add} >add</button>
                </div>
            </div>
        )
    }
}



export default App