import styles from "./form.module.css";
export function Form() {
    return (
        <>
            <h2 className={styles.donateTittle}>Participe!</h2>
            <form
                action="https://formsubmit.co/"
                method="POST"
                className={styles.form}
            >
                <input type="text" name="name" placeholder="Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input
                    type="text"
                    name="phone"
                    placeholder="Contact Number"
                    required
                />
                {/*  <label htmlFor="cars">Choose a car:</label>
                <select id="cars" name="donation">
                    <option value="500">500</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select> */}
                <input
                    type="select"
                    name="donation"
                    placeholder="Donation Quantity"
                    required
                />
                <button type="submit">Send</button>
            </form>
        </>
    );
}
