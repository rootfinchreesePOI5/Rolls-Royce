import React from 'react'
import Contact_image from '../assets/rolls-images/location.webp'
import Widebtn from './Widebtn';
import Title from './Title';
import logo from '../assets/rolls-images/logo.png'
import Intro from './Intro';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "e9909238-8860-4ddd-82f6-f1722546689a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className='contact' >
            <div className='contact-container' >
                <div className='contact-item1' style={{ backgroundImage: `url(${Contact_image})` }}>
                    <Intro p={'ROLLS-ROYCE MOTOR CARS'} h1={'CONTACT US'}/>
                    <div className='find'>
                        <Widebtn text={'find us'} />
                        <div class="scroll-down">
                            <div class="line">
                                <div class="glow"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-item2'>
                    <Title text='About Rolls-Royce Motor Cars Dubai' />
                    <div className='text-about'>
                        <p>The official dealer of Rolls-Royce Motor Cars in Dubai, Sharjah, and the Northern Emirates.</p>
                        <p>After another successful year, Rolls-Royce Motor Cars Dubai looks back at all of the monumental milestones and achievements over the course of almost five decades of operations. For over twenty years, Rolls-Royce Motor Cars Dubai has become the exclusive home of what is the pinnacle of automotive luxury. Now Rolls-Royce Motor Cars Dubai has come to be one of the top markets in the world for Rolls-Royce sales.</p>
                        <p>Currently, Rolls-Royce Motor Cars Dubai operates sales and service facilities across Dubai and Sharjah. Most notably, our newly renovated flagship showroom on Sheikh Zayed Road, which provides a dedicated Rolls-Royce state-of-the-art facility that puts a true emphasis on customer experience with its new visual identity.</p>
                    </div>
                </div>
                <div className='contact-item3'>
                    <h1>Reach Our Customer Service Group</h1>
                    <div className='item3-container'>
                        <div className='item3-items'>
                            <h2>Contact Our Help Center!</h2>
                            <div className='contact-form'>
                                <form onSubmit={onSubmit}>
                                    <input type="text" name="name" placeholder='Enter your name' required />
                                    <input type="email" name="email" placeholder='Enter your email' required />
                                    <textarea rows={20} placeholder='Message' name="message" required></textarea>

                                    <button className='submit' type="submit"><img src={logo} alt="" /> Submit Form</button>

                                </form>
                                <span>{result}</span>

                            </div>
                        </div>
                        <div className='item3-items'>
                        <h2>About Our Team</h2>
                        <p>Rolls-Royce Motor Cars Dubai is renowned for the highest level of professionalism and advice. Our sales and service staff provide an experience in line with the Rolls-Royce Motor Cars marque, known for creating the ultimate in motoring.</p>
                        <Widebtn text={'More About Us'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact