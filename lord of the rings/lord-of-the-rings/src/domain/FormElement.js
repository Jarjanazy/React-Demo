
const FormElement = ({id, name, text}) => {
    return (
        <div className="form-control">
                <label htmlFor="name"> {text} </label>
                <input type="text" id={id} name={name}></input>
            </div>
    );
}

export default FormElement;