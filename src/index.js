import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Link,
    Outlet,
    useParams,
    useNavigate,
    useLocation
} from "react-router-dom";
import Login from "./Components/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
//1

// root.render(
//   <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="signin" element={<SignIn/>}/>
//         <Route path="signinpage" element={<Navigate replace={true} to="/signin"/>}/>
//     </Routes>
//   </BrowserRouter>
// );

//2

// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="register" element={<Register/>}/>
//             <Route path="register/signin" element={<Signin/>}/>
//             <Route path="register/signup" element={<Signup/>}/>
//             <Route path="registerpage" element={<Navigate replace={true} to="/register"/>}/>
//         </Routes>
//     </BrowserRouter>
// );

//3

// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="register" element={<Register/>}>
//                 <Route path="signin" element={<Signin/>}/>
//                 <Route path="signup" element={<Signup/>}/>
//             </Route>
//             <Route path="registerpage" element={<Navigate replace={true} to="/register"/>}/>
//         </Routes>
//     </BrowserRouter>
// );


//4


// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="register" element={<Register/>}>
//                 <Route path="signin" element={<Signin/>}/>
//                 <Route path="signup" element={<Signup/>}>
//                     <Route path=":name" element={<Name/>}/>
//                 </Route>
//             </Route>
//             <Route path="registerpage" element={<Navigate replace={true} to="/register"/>}/>
//         </Routes>
//     </BrowserRouter>
// );



//5


// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="register" element={<Register/>}>
//                 <Route path="signin" element={<Signin/>}/>
//                 <Route path="signup" element={<Signup/>}>
//                     <Route path=":name/:family" element={<Name/>}/>
//                 </Route>
//             </Route>
//             <Route path="registerpage" element={<Navigate replace={true} to="/register"/>}/>
//         </Routes>
//     </BrowserRouter>
// );


//6


// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="register" element={<Register/>}>
//                 <Route path="signin" element={<Signin/>}/>
//                 <Route path="signup" element={<Signup/>}>
//                     <Route path=":name/:family" element={<Name/>}/>
//                 </Route>
//             </Route>
//             <Route path="registerpage" element={<Navigate replace={true} to="/register"/>}/>
//             <Route path="*" element={<Notfound/>}/>
//         </Routes>
//     </BrowserRouter>
// );


//7


// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="register" element={<Register/>}>
//                 <Route path="signin" element={<Signin/>}/>
//                 <Route path="signup" element={<Signup/>}>
//                     <Route path=":name/:family" element={<Name/>}/>
//                 </Route>
//             </Route>
//             <Route path="registerpage" element={<Navigate replace={true} to="/register"/>}/>
//             <Route path="notfound" element={<Notfound/>}/>
//             <Route path="*" element={<Navigate replace={true} to="/notfound"/>}/>
//         </Routes>
//     </BrowserRouter>
// );


//8


// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/panel" element={<Panel/>}/>
//             <Route path="register" element={<Register/>}>
//                 <Route path="signin" element={<Signin/>}/>
//                 <Route path="signup" element={<Signup/>}>
//                     <Route path=":name" element={<Name/>}/>
//                 </Route>
//             </Route>
//             <Route path="registerpage" element={<Navigate replace={true} to="/register"/>}/>
//             <Route path="notfound" element={<Notfound/>}/>
//             <Route path="*" element={<Navigate replace={true} to="/notfound"/>}/>
//         </Routes>
//     </BrowserRouter>
// );


//9

// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/panel" element={<Panel/>}/>
//             <Route path="register" element={<Register/>}>
//                 <Route path="signin" element={<Signin/>}/>
//                 <Route path="signup" element={<Signup/>}>
//                     <Route path=":name" element={<Name/>}/>
//                 </Route>
//             </Route>
//             <Route path="registerpage" element={<Navigate replace={true} to="/register"/>}/>
//             <Route path="notfound" element={<Notfound/>}/>
//             <Route path="*" element={<Navigate replace={true} to="/notfound"/>}/>
//         </Routes>
//     </BrowserRouter>
// );


//10


root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="panel" element={<Panel/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}>
                <Route path="signin" element={<Signin/>}/>
                <Route path="signup" element={<Signup/>}>
                    <Route path=":name" element={<Name/>}/>
                </Route>
            </Route>
            <Route path="registerpage" element={<Navigate replace={true} to="/register"/>}/>
            <Route path="notfound" element={<Notfound/>}/>
            <Route path="*" element={<Navigate replace={true} to="/notfound"/>}/>
        </Routes>
    </BrowserRouter>
);


//1

// function Home() {
//     return(
//         <div>
//             <h1>Home page</h1>
//             <Link to="register" className="btn btn-primary">Register</Link>
//         </div>
//     )
// }


// function SignIn() {
//     return(
//         <h1>Sign in page</h1>
//     )
// }


//2

// function Home() {
//     return(
//         <div>
//             <h1>Home page</h1>
//             <Link to="register" className="btn btn-primary ml-1">Register</Link>
//         </div>
//     )
// }
//
//
// function Register() {
//     return(
//         <div>
//             <h1>Sign in page</h1>
//             <Link to="signup" className="btn btn-success ml-1 mr-2">Sign Up</Link>
//             <Link to="signin" className="btn btn-primary">Sign In</Link>
//         </div>
//     )
// }
//
//
// function Signin() {
//     return(
//         <div>
//             <h1>Signin page</h1>
//             <Link to="/" className="btn btn-primary">Back to Home</Link>
//         </div>
//     )
// }
//
//
// function Signup() {
//     return(
//        <div>
//            <h1>Signup page</h1>
//            <Link to="/register" className="btn btn-primary">Back to Register</Link>
//        </div>
//     )
// }


//3

// function Home() {
//     return (
//         <div>
//             <h1>Home page</h1>
//             <Link to="register" className="btn btn-primary ml-1">Register</Link>
//         </div>
//     )
// }
//
//
// function Register() {
//     return (
//         <div>
//             <h1>Sign in page</h1>
//             <Link to="signup" className="btn btn-success ml-1 mr-2">Sign Up</Link>
//             <Link to="signin" className="btn btn-primary">Sign In</Link>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Signin() {
//     return (
//         <h1>Signin page</h1>
//     )
// }
//
//
// function Signup() {
//     return (
//         <h1>Signup page</h1>
//     )
// }


//4

// function Home() {
//     return (
//         <div>
//             <h1>Home page</h1>
//             <Link to="register" className="btn btn-primary ml-1">Register</Link>
//         </div>
//     )
// }
//
//
// function Register() {
//     return (
//         <div>
//             <h1>Sign in page</h1>
//             <Link to="signup" className="btn btn-success ml-1 mr-2">Sign Up</Link>
//             <Link to="signin" className="btn btn-primary">Sign In</Link>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Signin() {
//     return (
//         <h1>Signin page</h1>
//     )
// }
//
//
// function Signup() {
//     return (
//         <div>
//             <h1>Signup page</h1>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Name() {
//     const {name} = useParams();
//     return (
//         <h1>Name Component - {name}</h1>
//     )
// }



//5

// function Home() {
//     return (
//         <div>
//             <h1>Home page</h1>
//             <Link to="register" className="btn btn-primary ml-1">Register</Link>
//         </div>
//     )
// }
//
//
// function Register() {
//     return (
//         <div>
//             <h1>Sign in page</h1>
//             <Link to="signup" className="btn btn-success ml-1 mr-2">Sign Up</Link>
//             <Link to="signin" className="btn btn-primary">Sign In</Link>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Signin() {
//     return (
//         <h1>Signin page</h1>
//     )
// }
//
//
// function Signup() {
//     return (
//         <div>
//             <h1>Signup page</h1>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Name() {
//     const {name , family} = useParams();
//     return (
//         <h1>Name Component - {name} : {family}</h1>
//     )
// }



//6


// function Home() {
//     return (
//         <div>
//             <h1>Home page</h1>
//             <Link to="register" className="btn btn-primary ml-1">Register</Link>
//         </div>
//     )
// }
//
//
// function Register() {
//     return (
//         <div>
//             <h1>Sign in page</h1>
//             <Link to="signup" className="btn btn-success ml-1 mr-2">Sign Up</Link>
//             <Link to="signin" className="btn btn-primary">Sign In</Link>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Signin() {
//     return (
//         <h1>Signin page</h1>
//     )
// }
//
//
// function Signup() {
//     return (
//         <div>
//             <h1>Signup page</h1>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Name() {
//     const {name , family} = useParams();
//     return (
//         <h1>Name Component - {name} : {family}</h1>
//     )
// }
//
//
// function Notfound() {
//     return (
//         <h1>Not Found Page</h1>
//     )
// }



//7

// function Home() {
//     return (
//         <div>
//             <h1>Home page</h1>
//             <Link to="register" className="btn btn-primary ml-1">Register</Link>
//         </div>
//     )
// }
//
//
// function Register() {
//     return (
//         <div>
//             <h1>Sign in page</h1>
//             <Link to="signup" className="btn btn-success ml-1 mr-2">Sign Up</Link>
//             <Link to="signin" className="btn btn-primary">Sign In</Link>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Signin() {
//     return (
//         <h1>Signin page</h1>
//     )
// }
//
//
// function Signup() {
//     return (
//         <div>
//             <h1>Signup page</h1>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Name() {
//     const {name , family} = useParams();
//     return (
//         <h1>Name Component - {name} : {family}</h1>
//     )
// }
//
//
// function Notfound() {
//     return (
//         <h1>Not Found Page</h1>
//     )
// }



//8


// function Home() {
//     return (
//         <div>
//             <h1>Home page</h1>
//             <Link to="register" className="btn btn-primary ml-1">Register</Link>
//         </div>
//     )
// }
//
//
// function Register() {
//     return (
//         <div>
//             <h1>Sign in page</h1>
//             <Link to="signup" className="btn btn-success ml-1 mr-2">Sign Up</Link>
//             <Link to="signin" className="btn btn-primary">Sign In</Link>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Signin() {
//     return (
//         <h1>Signin page</h1>
//     )
// }
//
//
// function Signup() {
//     return (
//         <div>
//             <h1>Signup page</h1>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Name() {
//     const {name} = useParams();
//     const navigate = useNavigate();
//     return (
//         <div>
//             <h1>Name Component - {name}</h1>
//             <button onClick={() => {
//                 navigate ("/panel" , {state:name})
//             }}>Submit</button>
//         </div>
//     )
// }
//
//
// function Panel() {
//     const location = useLocation()
//     return (
//         <h1>Panel Page {location.state}</h1>
//     )
// }
//
//
// function Notfound() {
//     return (
//         <h1>Not Found Page</h1>
//     )
// }


//9


// function Home() {
//     return (
//         <div>
//             <h1>Home page</h1>
//             <Link to="register" className="btn btn-primary ml-1">Register</Link>
//         </div>
//     )
// }
//
//
// function Register() {
//     return (
//         <div>
//             <h1>Sign in page</h1>
//             <Link to="signup" className="btn btn-success ml-1 mr-2">Sign Up</Link>
//             <Link to="signin" className="btn btn-primary">Sign In</Link>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Signin() {
//     return (
//         <h1>Signin page</h1>
//     )
// }
//
//
// function Signup() {
//     return (
//         <div>
//             <h1>Signup page</h1>
//             <Outlet/>
//         </div>
//     )
// }
//
//
// function Name() {
//     const {name} = useParams();
//     const navigate = useNavigate();
//     return (
//         <div>
//             <h1>Name Component - {name}</h1>
//             <button onClick={() => {
//                 navigate ("/panel" , {state:name})
//             }}>Submit</button>
//             <Link to="/panel" state={name}>Submit</Link>
//         </div>
//     )
// }
//
//
// function Panel() {
//     const location = useLocation()
//     return (
//         <h1>Panel Page {location.state}</h1>
//     )
// }
//
//
// function Notfound() {
//     return (
//         <h1>Not Found Page</h1>
//     )
// }


//10


function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <Link to="register" className="btn btn-primary ms-1">Register</Link>
            <Link to="login" className="btn btn-success ms-1">Login</Link>
        </div>
    )
}


function Register() {
    return (
        <div>
            <h1>Sign in page</h1>
            <Link to="signup" className="btn btn-success ml-1 mr-2">Sign Up</Link>
            <Link to="signin" className="btn btn-primary">Sign In</Link>
            <Outlet/>
        </div>
    )
}


function Signin() {
    return (
        <h1>Signin page</h1>
    )
}


function Signup() {
    return (
        <div>
            <h1>Signup page</h1>
            <Outlet/>
        </div>
    )
}


function Name() {
    const {name} = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Name Component - {name}</h1>
            <button onClick={() => {
                navigate ("/panel" , {state:name})
            }}>Submit</button>
            <Link to="/panel" state={name}>Submit</Link>
        </div>
    )
}


function Panel() {
    const location = useLocation()
    return (
        <h1>Panel Page {location.state}</h1>
    )
}


function Notfound() {
    return (
        <h1>Not Found Page</h1>
    )
}