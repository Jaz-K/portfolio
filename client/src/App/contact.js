export default function Contact() {
    return (
        <section>
            <h1>Contact me</h1>
            <form
                method="POST"
                action="https://formsubmit.co/jasminangelique@gmail.com"
            >
                <div className="contactForm">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" required />
                </div>
                <div className="contactForm">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" required />
                </div>
                <div className="contactForm">
                    <label htmlFor="text">Your Text</label>
                    <textarea name="text" id="text" required></textarea>
                </div>
                <button>Submit</button>
            </form>
        </section>
    );
}
