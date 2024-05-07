import { useEffect, useState } from "react";
import Service from "./Service";


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="text-center space-y-6 mt-3">
            <h1 className="text-[#FF3811] text-xl">Service</h1>
            <h2 className="text-[#151515] text-5xl font-bold">Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-left ">
                {
                    services.map(service =><Service
                    key={service._id} service ={service}
                    >

                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;