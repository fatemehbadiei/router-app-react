// import React, {useRef} from "react";
//
//use Ref
//
// const Login = ()=>{
//
//     const username = useRef();
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(username.current.value);
//     }
//
//     return(
//         <div>
//             <form className="container mt-3" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="username" className="form-label">Username</label>
//                     <input ref={username} type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
//                         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="text" className="form-control" id="password"/>
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                         <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
//
// export default Login;


//use state

// import React, {useState} from "react";
//
// const Login = ()=>{
//
//     const [state,setState] = useState({
//         account : {username : "" , password : ""}
//     });
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }
//
//     const handleChange = (e)=>{
//        const account = {...state.account} ;
//        account.username = e.currentTarget.value;
//        setState({account});
//     }
//
//     const handleChange1 = (e)=>{
//         const account = {...state.account} ;
//         account.password = e.currentTarget.value;
//         setState({account});
//     }
//
//     return(
//         <div>
//             <form className="container mt-3" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="username" className="form-label">Username</label>
//                     <input value={state.account.username} onChange={handleChange} type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input value={state.account.password} onChange={handleChange1} type="text" className="form-control" id="password"/>
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
//
// export default Login;


//use relative way
//
// import React, {useState} from "react";
//
// const Login = ()=>{
//
//     const [state,setState] = useState({
//         account : {username : "" , password : ""}
//     });
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }
//
//     const handleChange = (e)=>{
//         const account = {...state.account} ;
//         account[e.currentTarget.id] = e.currentTarget.value;
//         setState({account});
//     }
//
//
//     return(
//         <div>
//             <form className="container mt-3" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="username" className="form-label">Username</label>
//                     <input value={state.account.username} onChange={handleChange} type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input value={state.account.password} onChange={handleChange} type="text" className="form-control" id="password"/>
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
//
// export default Login;

//use destructuring
//
// import React, {useState} from "react";
//
// const Login = ()=>{
//
//     const [state,setState] = useState({
//         account : {username : "" , password : ""}
//     });
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }
//
//     const handleChange = ({currentTarget})=>{
//         const account = {...state.account} ;
//         account[currentTarget.id] = currentTarget.value;
//         setState({account});
//     }
//
//
//     return(
//         <div>
//             <form className="container mt-3" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="username" className="form-label">Username</label>
//                     <input value={state.account.username} onChange={handleChange} type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input value={state.account.password} onChange={handleChange} type="text" className="form-control" id="password"/>
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
//
// export default Login;


//use destructuring and assign a relative name to currentTarget

// import React, {useState} from "react";
//
// const Login = ()=>{
//
//     const [state,setState] = useState({
//         account : {username : "" , password : ""}
//     });
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }
//
//     const handleChange = ({currentTarget : input})=>{
//         const account = {...state.account} ;
//         account[input.id] = input.value;
//         setState({account});
//     }
//
//
//     return(
//         <div>
//             <form className="container mt-3" onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="username" className="form-label">Username</label>
//                     <input value={state.account.username} onChange={handleChange} type="text" className="form-control" id="username" aria-describedby="emailHelp"/>
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input value={state.account.password} onChange={handleChange} type="text" className="form-control" id="password"/>
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//                     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
//
// export default Login;

//create an input component

// import React, {useState} from "react";
// import Input from "./Input";
//
// const Login = ()=>{
//
//     const [state,setState] = useState({
//         account : {username : "" , password : ""}
//     });
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//     }
//
//     const handleChange = ({currentTarget : input})=>{
//         const account = {...state.account} ;
//         account[input.id] = input.value;
//         setState({account});
//     }
//
//
//     return(
//         <div>
//             <form className="container mt-3" onSubmit={handleSubmit}>
//                 <Input id="username" label="UserName" value={state.account.username} onchange={handleChange} type="text"/>
//                 <Input id="password" label="Password" value={state.account.password} onchange={handleChange} type="password"/>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="check"/>
//                     <label className="form-check-label" htmlFor="check">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
//
// export default Login;


//validate form

// import React, {useState} from "react";
// import Input from "./Input";
//
// const Login = ()=>{
//
//     const [state,setState] = useState({
//         account : {username : "" , password : ""},
//         errors : {}
//     });
//
//
//     const validate = () => {
//         const errors = {};
//         if (state.account.username.trim() === ""){
//             errors.username = "Username is required";
//         }
//         if (state.account.password.trim() === ""){
//             errors.password = "Username is required";
//         }
//         return Object.keys(errors).length === 0 ? null : errors;
//     }
//
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const errors = validate();
//         setState({...state,errors});
//         if (errors) return;
//         console.log("submitted");
//     }
//
//     const handleChange = ({currentTarget : input})=>{
//         const account = {...state.account} ;
//         account[input.id] = input.value;
//         setState({account});
//     }
//
//
//     return(
//         <div>
//             <form className="container mt-3" onSubmit={handleSubmit}>
//                 <Input id="username" label="UserName" value={state.account.username} onchange={handleChange} type="text"/>
//                 <Input id="password" label="Password" value={state.account.password} onchange={handleChange} type="password"/>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="check"/>
//                     <label className="form-check-label" htmlFor="check">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
//
// export default Login;


//show errors

// import React, {useState} from "react";
// import Input from "./Input";
//
// const Login = () => {
//
//     const [state, setState] = useState({
//         account: {username: "", password: ""},
//         errors: {}
//     });
//
//
//     const validate = () => {
//         const errors = {};
//         if (state.account.username.trim() === "") {
//             errors.username = "Username is required";
//         }
//         if (state.account.password.trim() === "") {
//             errors.password = "Password is required";
//         }
//         return Object.keys(errors).length === 0 ? null : errors;
//     }
//
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const errors = validate(); // null // state = null
//         setState({...state, errors:errors || {}}); // state ={}
//         if (errors) return;
//         console.log("submitted");
//     }
//
//     const handleChange = ({currentTarget: input}) => {
//         const account = {...state.account};
//         account[input.id] = input.value;
//         setState({...state,account});
//     }
//
//
//     return (
//         <div>
//             <form className="container mt-3" onSubmit={handleSubmit}>
//                 <Input id="username" label="UserName" value={state.account.username} onchange={handleChange}
//                        type="text" error={state.errors.username}/>
//                 <Input id="password" label="Password" value={state.account.password} onchange={handleChange}
//                        type="password" error={state.errors.password}/>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="check"/>
//                     <label className="form-check-label" htmlFor="check">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
//
// export default Login;


//show errors when user type

// import React, {useState} from "react";
// import Input from "./Input";
//
// const Login = () => {
//
//     const [state, setState] = useState({
//         account: {username: "", password: ""},
//         errors: {}
//     });
//
//
//     const validate = () => {
//         const errors = {};
//         if (state.account.username.trim() === "") {
//             errors.username = "Username is required";
//         }
//         if (state.account.password.trim() === "") {
//             errors.password = "Password is required";
//         }
//         return Object.keys(errors).length === 0 ? null : errors;
//     }
//
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const errors = validate(); // null // state = null
//         setState({...state, errors:errors || {}}); // state ={}
//         if (errors) return;
//         console.log("submitted");
//     }
//
//     const validateProperty = (input) => {
//         if (input.id === "username"){
//             if (input.value.trim() === ""){
//                 return "Username is required"
//             }
//         }
//
//         if (input.id === "password"){
//             if (input.value.trim() === ""){
//                 return "Password is required"
//             }
//         }
//     }
//
//     const handleChange = ({currentTarget: input}) => {
//         const errors = {...state.errors};
//         const errorMessage = validateProperty(input);
//         if (errorMessage) errors[input.id] = errorMessage;
//         else delete errors[input.id];
//
//
//         const account = {...state.account};
//         account[input.id] = input.value;
//         setState({...state, account, errors});
//     }
//
//
//     return (
//         <div>
//             <form className="container mt-3" onSubmit={handleSubmit}>
//                 <Input id="username" label="UserName" value={state.account.username} onchange={handleChange}
//                        type="text" error={state.errors.username}/>
//                 <Input id="password" label="Password" value={state.account.password} onchange={handleChange}
//                        type="password" error={state.errors.password}/>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="check"/>
//                     <label className="form-check-label" htmlFor="check">Check me out</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
//
// export default Login;


//use joi


// import React, {useState} from "react";
// import Input from "./Input";
// import Joi from "joi";
//
// const Login = () => {
//
//     const [state, setState] = useState({
//         account: {username: "", password: ""},
//         errors: {}
//     });
//
//
//     const schema = Joi.object({
//         username: Joi.string().required().label("Username"),
//         password: Joi.string().required().label("Password"),
//     });
//
//     const validate = () => {
//         const result = schema.validate(state.account , {abortEarly:false});
//         console.log(result)
//
//         if(!result.error) return null ;
//         const errors = {};
//         for (const item of result.error.details){
//             errors[item.path[0]] = item.message
//         }
//         return errors;
//     }
//
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const errors = validate(); // null // state = null
//         setState({...state, errors:errors || {}}); // state ={}
//         if (errors) return;
//         console.log("submitted");
//     }
//
//     const validateProperty = ({id,value}) => {
//         const schemaObj = {};
//         for(const item of schema._ids._byKey.entries()){
//             schemaObj[item[1].id] = item[1].schema
//         }
//         const obj = {[id] : value};
//         const subSchema = Joi.object({[id] : schemaObj[id]});
//         const {error} = subSchema.validate(obj);
//         return error ? error.details[0].message : null
//     }
//
//     const handleChange = ({currentTarget: input}) => {
//         const errors = {...state.errors};
//         const errorMessage = validateProperty(input);
//         if (errorMessage) errors[input.id] = errorMessage;
//         else delete errors[input.id];
//
//
//         const account = {...state.account};
//         account[input.id] = input.value;
//         setState({...state, account, errors});
//     }
//
//
//     return (
//         <div>
//             <form className="container mt-3" onSubmit={handleSubmit}>
//                 <Input id="username" label="UserName" value={state.account.username} onchange={handleChange}
//                        type="text" error={state.errors.username}/>
//                 <Input id="password" label="Password" value={state.account.password} onchange={handleChange}
//                        type="password" error={state.errors.password}/>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="check"/>
//                     <label className="form-check-label" htmlFor="check">Check me out</label>
//                 </div>
//                 <button disabled={validate()} type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }
//
// export default Login;


//write this code with class component


// import React, {Component} from "react";
// import Input from "./Input";
// import Joi from "joi";
//
// class Login extends Component {
//
//     state = {
//         account: {username: "", password: ""},
//         errors: {}
//     };
//
//
//     schema = Joi.object({
//         username: Joi.string().required().label("Username"),
//         password: Joi.string().required().label("Password"),
//     });
//
//     validate = () => {
//         const result = this.schema.validate(this.state.account, {abortEarly: false});
//         console.log(result)
//
//         if (!result.error) return null;
//         const errors = {};
//         for (const item of result.error.details) {
//             errors[item.path[0]] = item.message
//         }
//         return errors;
//     }
//
//
//     handleSubmit = (e) => {
//         e.preventDefault();
//         const errors = this.validate(); // null // state = null
//         this.setState({...this.state, errors: errors || {}}); // state ={}
//         if (errors) return;
//         console.log("submitted");
//     }
//
//     validateProperty = ({id, value}) => {
//         const schemaObj = {};
//         for (const item of this.schema._ids._byKey.entries()) {
//             schemaObj[item[1].id] = item[1].schema
//         }
//         const obj = {[id]: value};
//         const subSchema = Joi.object({[id]: schemaObj[id]});
//         const {error} = subSchema.validate(obj);
//         return error ? error.details[0].message : null
//     }
//
//     handleChange = ({currentTarget: input}) => {
//         const errors = {...this.state.errors};
//         const errorMessage = this.validateProperty(input);
//         if (errorMessage) errors[input.id] = errorMessage;
//         else delete errors[input.id];
//
//
//         const account = {...this.state.account};
//         account[input.id] = input.value;
//         this.setState({...this.state, account, errors});
//     }
//
//     render() {
//         return (
//             <div>
//                 <form className="container mt-3" onSubmit={this.handleSubmit}>
//                     <Input id="username" label="UserName" value={this.state.account.username} onchange={this.handleChange}
//                            type="text" error={this.state.errors.username}/>
//                     <Input id="password" label="Password" value={this.state.account.password} onchange={this.handleChange}
//                            type="password" error={this.state.errors.password}/>
//                     <div className="mb-3 form-check">
//                         <input type="checkbox" className="form-check-input" id="check"/>
//                         <label className="form-check-label" htmlFor="check">Check me out</label>
//                     </div>
//                     <button disabled={this.validate()} type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         )
//     }
//
//
// }
//
// export default Login;


//independence form component


import React from "react";
// import Input from "./Input";
import Joi from "joi";
import Form from "./Form";


class Login extends Form {

    state = {
        data: {username: "", password: ""},
        errors: {}
    };


    schema = Joi.object({
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    });

    doSubmit = ()=>{
        console.log("submitted");
    }

    render() {
        return (
            <div>
                <form className="container mt-3" onSubmit={this.handleSubmit}>
                    {this.renderInput("username" , "Username")}
                    {this.renderInput("password" , "Password" , "password")}
                    {this.renderButton("Submit")}
                </form>
            </div>
        )
    }


}

export default Login;