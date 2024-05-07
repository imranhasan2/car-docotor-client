import baneer1 from '../../../assets/images/banner/1.jpg'
import baneer2 from '../../../assets/images/banner/2.jpg'
import baneer3 from '../../../assets/images/banner/3.jpg'
import baneer4 from '../../../assets/images/banner/4.jpg'
import baneer5 from '../../../assets/images/banner/5.jpg'
import baneer6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full mt-5">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={baneer1} className="w-full rounded-lg" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515]   to-[rgba(21, 21, 21, 0.00)] top-0 rounded-lg">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline ml-5">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6 " className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={baneer2} className="w-full rounded-lg" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515]   to-[rgba(21, 21, 21, 0.00)] top-0 rounded-lg">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline ml-5">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={baneer3} className="w-full rounded-lg" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515]   to-[rgba(21, 21, 21, 0.00)] top-0 rounded-lg">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline ml-5">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={baneer4} className="w-full rounded-lg" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515]   to-[rgba(21, 21, 21, 0.00)] top-0 rounded-lg">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline ml-5">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={baneer5} className="w-full rounded-lg" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515]   to-[rgba(21, 21, 21, 0.00)] top-0 rounded-lg">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline ml-5">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={baneer6} className="w-full rounded-lg" />
                <div className="absolute flex h-full items-center bg-gradient-to-r from-[#151515]   to-[rgba(21, 21, 21, 0.00)] top-0 rounded-lg">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className="btn btn-secondary">Discover More</button>
                            <button className="btn btn-outline ml-5">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;