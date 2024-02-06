
const ContactForm = () => {
    return (
        // <div>
        <form className="contactForm">
            <label>
                Name:
                <input
                    type="text"
                    name="name"

                    placeholder="Enter your name"
                    required

                />
            </label>

            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                />
            </label>
            <label>
                Desired Course:
                <input
                    type="text"
                    name="course"
                    placeholder="Enter desired course"
                />
            </label>
            <label>
                Message:
                <textarea
                    name="message"

                    placeholder="Enter your message"
                    required
                ></textarea>
            </label>
            <label>
                Reviews:
                <textarea
                    name="reviews"
                    placeholder="Enter your reviews"
                ></textarea>
            </label>
            <label>
                Phone Number:
                <input
                    type="tel"
                    name="phone"

                    placeholder="Enter your phone number"
                />
            </label>

            <button type="submit" color="submit-btn">Submit</button>

        </form>
        // </div>
    );

};

export default ContactForm;
