import Swal from "sweetalert2";
import "./Contact.css";
import axiosPro from "../../../src/Axiosbase/useAxiosbase";
import useProvider from "../../../src/Hook/useProvider";

const Contact = () => {
    const { theme } = useProvider();
    const handleContact = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const emailsubject = form.emailsubject.value;
        const text = form.message.value;
        const fullName = form.fullname.value;
        const phoneNumber = form.number.value;
        try {
            const response = await axiosPro.post("/send-mail",
                {
                    from: email,
                    subject: emailsubject,
                    message: text,
                    name: fullName,
                    phone: phoneNumber
                });
            console.log(response)
            if (response.status === 200) {
                Swal.fire({
                    title: 'Send successfully',
                    icon: "success",
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset();
            }
            else {
                Swal.fire({
                    title: 'Sorry not sent',
                    icon: "warning",
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    },
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        } catch (err) {
            console.error(err.message);
            alert(err.message)
        }

        // fetch("https://prodevsite.vercel.app/send-mail",
        //     {
        //         method: "POST",
        //         headers: {
        //             "content-type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             from: email,
        //             subject: emailsubject,
        //             message: text,
        //             name: fullName,
        //             phone: phoneNumber
        //         })
        //     }
        // )
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
    };

    return (
        //  css>>>
        <div className={`w-[100%] h-[100vh] py-[23px] ${theme === 'colorblind' ? "bg-[#0e4e7be8]" : "bg-[#040d13e8]"}`} >
            {/* mailto:protap.saha009@gmail.com */}
            {/* css>>> #contact .contact */}
            <div className="contact w-[80%] mx-auto">
                {/* css>>> .contact .heading */} {/* css>>> .contact .heading span */}
                <h2 className={`text-[3rem] text-[#fff] tracking-[1px] text-center`}>
                    Contact <span className="text-[palevioletred]">Me!</span>
                </h2>
                <form onSubmit={handleContact}>
                    <div className="form_container">

                        <div className={`input_field`}>
                            <input
                                type="text"
                                placeholder="Full name"
                                id="name"
                                name="fullname"
                                className="text-[#fff] placeholder:text-[#fff]"
                                required
                            />
                            <span className="left_onfocus_field"></span>
                            <span className="right_onfocus_field"></span>
                            <span className="input_circle_light"></span>
                        </div>

                        <div className={
                            `input_field`}>
                            <input
                                type="text"
                                placeholder="Email address"
                                name="email"
                                id="email"
                                className="text-[#fff] placeholder:text-[#fff]"
                                required
                            />
                            <span className="left_onfocus_field"></span>
                            <span className="right_onfocus_field"></span>
                            <span className="input_circle_light"></span>
                        </div>

                        <div className={
                            `input_field`}>
                            <input
                                type="text"
                                placeholder="Phone number"
                                name="number"
                                id="number"
                                className="text-[#fff] placeholder:text-[#fff]"
                                required
                            />
                            <span className="left_onfocus_field"></span>
                            <span className="right_onfocus_field"></span>
                            <span className="input_circle_light"></span>
                        </div>

                        <div className={
                            `input_field`}>
                            <input
                                type="text"
                                placeholder="Email subject"
                                name="emailsubject"
                                id="subject"
                                className="text-[#fff] placeholder:text-[#fff]"
                                required
                            />
                            <span className="left_onfocus_field"></span>
                            <span className="right_onfocus_field"></span>
                            <span className="input_circle_light"></span>
                        </div>

                    </div>

                    <div className={`textarea_field`}>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Your massege"
                            className="text-[#fff] placeholder:text-[#fff]"
                            required
                        ></textarea>
                        <span className="left_onfocus_field"></span>
                        <span className="right_onfocus_field"></span>
                    </div>
                    <div className="submit">
                        <button
                            type="submit"
                            className="
                        submit_btn_animate 
                        left_sl right_sl 
                        animate_smtb
                        " >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Contact;