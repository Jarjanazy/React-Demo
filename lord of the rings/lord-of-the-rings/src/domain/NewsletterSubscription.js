import FormElement from "./FormElement"

const NewsLetterSubscription = () => {

    return (
        <form className="form">
            <FormElement id={"name"} name={"name"} text={"Name:"}/>
            <FormElement id={"email"} name={"email"} text={"Email:"}/>
        </form>
    );
}

export default NewsLetterSubscription;