

const OrderTable = ({ order, handleDelete,handleOrdersCOnfirm }) => {
    console.log(order)
    const {_id, price, service, img, date } = order;
    console.log(_id)


    return (

        <tbody>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>

                    <div className="avatar">
                        <div className=" w-24 h-24">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>


                </td>
                <td>
                    {service}
                </td>
                <td>$ {price}</td>
                <td>{date}</td>
                <th>
                    <button onClick={() => handleOrdersCOnfirm (_id)} className="btn btn-ghost btn-xs">Pending</button>
                </th>
            </tr>


        </tbody>

    );
};

export default OrderTable;