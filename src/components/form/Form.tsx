import styles from "./form.module.css";
export function Form() {
    return (
        <>
            <h2>Donate!</h2>
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
                <input
                    type="text"
                    name="donation"
                    placeholder="Donation Quantity"
                    required
                />
                <button type="submit">Send</button>
            </form>
        </>
    );
}
