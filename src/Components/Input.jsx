// import React from "react";
//
// const Input = ({id,label,value,onchange,type}) => {
//     return (
//         <div className="mb-3">
//             <label htmlFor={id} className="form-label">{label}</label>
//             <input value={value} onChange={onchange} type={type} className="form-control"
//                    id={id}/>
//         </div>
//     )
// }
//
// export default Input;


//show errors

import React from "react";

const Input = ({id, label, value, onchange, type, error}) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                value={value}
                onChange={onchange}
                type={type}
                className="form-control"
                id={id}
            />
            {error && <div className="alert alert-danger mt-1">{error}</div>}
        </div>
    )
}

export default Input;