import { useState } from 'react';
import './Contact.css';
import { FaRegAddressBook, FaRegEnvelope, FaRegMap, FaRegUser } from "react-icons/fa";
import axios from 'axios';
import shapeOne from '../../assets/shape-1.png';
const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://sheet.best/api/sheets/6239c9fb-2051-4951-974b-803544317e71', form).then((Response) => {
            console.log(Response);
            //clearing for fields
            setForm({name: '', email: '', message: ''});
        })
    };



    return (
        <section className="contact section" id="id">
            <h2 className="section__title text-cs">Contact Me</h2>
            <p className="section__subtitle">
                Let's <span>Talk About Ideas</span>
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>
                        <h3 className="contact__card-title">Address</h3>
                        <p className="contact__card-data">Bhubaneswar, Odisha, India</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>
                        <h3 className="contact__card-title">Social Media</h3>
                        <p className="contact__card-data">Linkedin, Instagram</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">asiskumardandapat90@gmail.com</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>
                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">+91 7609809303</p>
                    </div>
                </div>

                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your Full Name <b>*</b>
                            </label>
                            <input type="text" name='name' onChange={handleChange} value={form.name} className="contact__form-input" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your Email Address <b>*</b>
                            </label>
                            <input type="email" name="email" onChange={handleChange} value={form.email} className="contact__form-input" />
                        </div>

                        <div className="contact__form-div contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your Message <b>*</b>
                            </label>
                            <textarea  name="message" onChange={handleChange} value={form.message} className="contact__form-input "></textarea>
                        </div>
                    </div>
                    <div className="contact__submit">
                        <p>* Accept the terms and conditions.</p>
                        <button type="submit" className="btn text-cs">Send Message</button>
                    </div>
                </form>
            </div>
        <div className="section__deco deco__right">
            <img src={shapeOne} alt="" className="shape" />
        </div>
        </section>
    );
};

export default Contact;
