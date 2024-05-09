import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import OrderTable from "./OrderTable";
import axios from "axios";




const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const [orders, setOrders] = useState([])
    const url = `http://localhost:5000/orders?email=${user?.email}`

    useEffect(() => {

        axios.get(url, { withCredentials: true })
        .then(res => {
            setOrders(res.data)
        })



        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => {
        //         setOrders(data)
        //     })

    }, [url]);


    const handleDelete = _id => {
        // const proceed = confirm('Are you sure you want to delete?')
        console.log('deleted', _id)

        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remaining = orders.filter(order => order._id !== _id)
                    setOrders(remaining)
                }

            })
    }
    const handleOrdersCOnfirm = (id) => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }

    return (
        <div>
            <h2>Your Orders {orders.length}</h2>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    {
                        orders.map(order => <OrderTable
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleOrdersCOnfirm={handleOrdersCOnfirm}
                        ></OrderTable>)
                    }
                </table>
            </div>
        </div>
    );
};

export default MyOrders;