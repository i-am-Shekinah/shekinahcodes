function Contact() {
    return (
        <div>
            <div>
                <p>{">_ contact_form.sh"}</p>

                <label htmlFor="name">$ name</label>
                <input type="text" placeholder="Enter your name" />

                <label htmlFor="email">$ email</label>
                <input type="email" placeholder="your@email.com" />

                <label htmlFor="message">$ message</label>
                <textarea placeholder="Enter your message..."></textarea>

                <button type="submit">./send_message.sh</button>
            </div>


            <div>
                <div>
                    <h3>Let's Collaborate</h3>

                    <p>I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>

                    <a href="">GitHub</a>
                    <a href="">LinkedIn</a>
                    <a href="">Twitter</a>
                    <a href="mailto:michaelolatunji.dev@gmail.com">Email</a>
                </div>

                <div>
                    <p><span>Status: </span>Available for work</p>
                    <p><span>Location: </span>Remote / Worldwide</p>
                    <p><span>Response: </span>Within 24 hours</p>
                </div>
            </div>

        </div>
    )
}

export default Contact;