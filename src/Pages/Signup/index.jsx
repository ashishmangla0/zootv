import Container from "../../Elements/Container";
import Heading from "../../Elements/Heading";

const SignUp = () => {
    return (
        <>
            <section className="block block--signin">
                <Container>
                    <form className="form form__signin">
                        <Heading className={"form__title"} level={1} title="Sign in your account" />

                        <div className="form__group">
                            <label className="form__label">User Name</label>
                            <input className="form__control" type="text" />
                        </div>
                        <div className="form__group">
                            <label className="form__label">Password</label>
                            <input className="form__control" type="password" />
                        </div>
                        <div>
                            <button type="submit">
                                SignIn
                            </button>
                        </div>
                    </form>
                </Container>
            </section>
        </>
    )
}
export default SignUp