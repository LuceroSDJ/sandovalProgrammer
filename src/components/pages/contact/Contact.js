import React from 'react'

import { useForm, ValidationError } from '@formspree/react';
import styles from "./Contact.module.css";

export default function Contact() {
    const [state, handleSubmit] = useForm("mqknowep");
    if (state.succeeded) {
        return (
            <div className={styles.thankYouNote}>
                <p> <span>Awesome!</span> <br/> I'll get back to you within the next two business days.</p>
            </div>
        )
    }
    return (
        <div className={styles.container}>

        <form onSubmit={handleSubmit}>
        {/* <form action="..." method="POST">     */}
            <label for="full-name">Full Name</label>
            <input 
                type="text" 
                name="name" 
                id="full-name" 
                placeholder="First and Last Name" 
                required
            />
            <label htmlFor="email">
                Email Address
            </label>
            <input
                id="email"
                type="email" 
                name="email"
                placeholder="yourEmail@abc.com" 
            />
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                rows="7"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
        </div>
    )
}
