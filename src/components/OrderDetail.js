import React from 'react'

function OrderDetail(props) {
    const id = props.match.params.id
    return (
        <div>
            <div className="order-item">
                <p>Umeh Chiamaka</p>
                <p>Fried Rice and Chicken</p>
                <p>Address: Bonny B corner Shop Gwarinpa Abuja</p>
                <p>2 hours ago</p>
                {id}
            </div> <br />
        </div>
    )
}

export default OrderDetail
