import FormElement from "./FormElement"

const doSubmit = (e) => {
    // by default the browser tries to submit the form and refresh the page
    e.preventDefault();
    console.log("Hello world");
}
const NewsLetterSubscription = () => {
    return (
        <form className="form" onSubmit={doSubmit}>
            <FormElement id={"name"} name={"name"} text={"Name:"}/>
            <FormElement id={"email"} name={"email"} text={"Email:"}/>
            <button type="submit"> Subscribe </button>
        </form>
    );
}

export default NewsLetterSubscription;