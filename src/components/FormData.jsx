import React, { useState } from "react";

function FormData() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });
    const [submitText, setSubmitText] = useState("");
    const [message, setMessage] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
        if (formData.name && formData.email) {
            setSubmitText({ ...formData })
            setFormData({ name: "", email: ""});
            setMessage("");
        } else {
            setMessage("กรุณากรอกข้อมูลให้ครบทุกช่อง")
        }
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleReset() {
        setFormData({ name: "", email: ""});
        setSubmitText("");
        setMessage("");
    }
    return (
        <div className="flex flex-col items-center text-gray-800 max-w-[500px] h-100 border-1 pt-10">
            <h1 className="text-3xl font-bold mb-4">Simple Form</h1>

            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-1 rounded px-3 py-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-1 rounded px-3 py-2 mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <div className="space-x-3">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-10 py-2  hover:bg-blue-600"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="bg-red-500 text-white px-10 py-2  hover:bg-red-600"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </form>
            <p className="text-xl mt-4 text-red-600 font-semibold">{message}</p>
            <div>
                {submitText && (
                    <div className="text-xl mt-4 text-gray-800 font-semibold border-1 px-5 py-2 bg-gray-200">
                        <p>Name: {submitText.name}</p>
                        <p>Eamil: {submitText.email}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FormData;
