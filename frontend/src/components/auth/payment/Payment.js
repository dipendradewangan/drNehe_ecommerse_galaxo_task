import React, { Fragment, useRef } from 'react'
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements
} from '@stripe/react-stripe-js'
import axios from 'axios'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Payment = () => {
    const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"))
    const payBtn = useRef(null)

    const submitHandler = ()=>{

    }
    return (
        <Fragment>
            <div className="bg-white mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between">
                <div>
                    <form onSubmit={(e)=>submitHandler(e)}>
                        <h1>Card Info</h1>
                        <div>
                            <CreditCardIcon/>
                            <CardNumberElement />
                        </div>
                    </form>
                </div>
                <CreditCardIcon/>
                <VpnKeyIcon/>
            </div>
        </Fragment>
    )
}

export default Payment
