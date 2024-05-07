
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen  mt-5 mb-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2  relative'>
                    <img src={person} className="max-w-sm rounded-lg shadow-2xl w-[460px] h-[473px]" />
                    <img src={parts} className="max-w-sm rounded-lg shadow-2xl w-[327px] h-[300px] absolute right-0 top-1/2 " />
                </div>
                <div className='w-1/2 p-4'>
                    <h1 className="text-2xl font-bold text-orange-600"> About Us</h1>
                    <h1 className='text-5xl font-bold'>We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] mt-3">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;