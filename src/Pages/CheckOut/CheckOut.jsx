import { useLoaderData } from "react-router-dom";
import check from '../../assets/images/checkout/checkout.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const CheckOut = () => {
    const checkOut = useLoaderData()
    const { user } = useContext(AuthContext)
    const {_id,title, price, img } = checkOut;

   

    const handleOrder = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const orders = {
            customerName: name,
            email,
            date,
            price: price,
            _id,
            img,
            service: title,
            
            
        }
        console.log(orders)


        fetch("http://localhost:5000/orders",{
            method : "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then (data => {
            console.log(data)
            if(data.insertedId){
                alert('order successfully')
            }
        })
        

    }


    return (
        <div>
            <div className="relative">
                <img src={check} alt="" />
                <h2 className="absolute top-1/2 pl-12 text-white font-semibold text-3xl">Check Out</h2>

            </div>


            <div className="mt-12">
                <h1 className="text-center text-4xl">Check Service : {title}</h1>



                <form onSubmit={handleOrder} className="card-body">

                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                defaultValue={user?.displayName}
                                name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date"
                                name="date" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                defaultValue={user?.email}
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due Amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + price} className="input input-bordered" required />

                        </div>
                    </div>

                    <div className="form-control mt-6">

                        <input className="btn btn-block  text-white bg-[#FF3811]" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>


        </div>



    );
};

export default CheckOut;