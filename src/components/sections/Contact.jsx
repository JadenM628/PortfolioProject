import emailjs from 'emailjs-com'
import { useState } from 'react';
import  Footer  from '../Footer'

export const Contact = () => {

        const [formData, setFormData] = useState ({
            name: "",
            email: "",
            message: "",
        });

        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY


        const handleSubmit =(e) => {
            e.preventDefault()

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
                alert("Message Sent.");
                setFormData({name:"", email: "", message: ""})
            }).catch(() => alert("Something went wrong. Please try again."))
        };

    return <div className="flex flex-col min-h-screen"><section id="contact" className="min-h-screen flex items-center justify-center py-20">
        <div className="px-4 w-150">
            <h2 className="text-3xl font-bold mb-8">Contact Me</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                    <input type="text" id="name" name="name" required  value={formData.name} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                </div>

                <div className="relative">
                    <input type="email" id="email" name="email" required value={formData.email} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="example@gmail.com" onChange={(e) => setFormData({...formData, email: e.target.value})}/>
                </div>

                <div className="relative">
                    <textarea  id="message" name="message" required rows={5} value={formData.message} className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Message" onChange={(e) => setFormData({...formData, message: e.target.value})}/>
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                    Send Message
                </button>
            </form>

            <p className=" mt-20 text-gray-400 text-xl mb-8 max-w-lg mx-auto">
                You can also connect with me through <strong className='text-blue-400'>LinkedIn</strong>, <strong className='text-purple-400'>GitHub</strong>, Or <strong className='text-white'>Email</strong> - Just use the icons below!
            </p>
        </div>
    </section>
    
    </div>
};