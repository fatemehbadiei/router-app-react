import React, {Component} from "react";
import Joi from "joi";
import Input from "./Input";

class Form extends Component {
    state = {
        date: {},
        errors: {}
    };

    validate = () => {
        const result = this.schema.validate(this.state.data, {abortEarly: false});
        console.log(result)

        if (!result.error) return null;
        const errors = {};
        for (const item of result.error.details) {
            errors[item.path[0]] = item.message
        }
        return errors;
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate(); // null // state = null
        this.setState({errors: errors || {}}); // state ={}
        if (errors) return;

        this.doSubmit();
    }

    validateProperty = ({id, value}) => {
        const schemaObj = {};
        for (const item of this.schema._ids._byKey.entries()) {
            schemaObj[item[1].id] = item[1].schema
        }
        const obj = {[id]: value};
        const subSchema = Joi.object({[id]: schemaObj[id]});
        const {error} = subSchema.validate(obj);
        return error ? error.details[0].message : null
    }

    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.id] = errorMessage;
        else delete errors[input.id];


        const data = {...this.state.data};
        data[input.id] = input.value;
        this.setState({data, errors});
    }

    renderInput(id, label, type="text") {
        const {data, errors} = this.state
        return (
            <Input
                id={id}
                label={label}
                value={data[id]}
                onchange={this.handleChange}
                type={type}
                error={errors[id]}
            />
        )
    }

    renderButton(label) {
        return (
            <button disabled={this.validate()} type="submit" className="btn btn-primary">{label}</button>
        )
    }

}

export default Form;