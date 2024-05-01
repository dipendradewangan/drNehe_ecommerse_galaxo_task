import React, { Fragment} from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

const Payment = () => {
    
    const submitHandler = ()=>{
        console.log("this is submit")
    }
    return (
        <Fragment>
            <div className="bg-white mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between">
                <div>
                    <form onSubmit={(e)=>submitHandler(e)}>
                        <h1>Card Info</h1>
                        <div>
                            this is card info
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
