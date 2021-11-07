import StripeCheckout from 'react-stripe-checkout';

import React from 'react'

export const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JtAupKPHWN83iIQjJ3BCUsAxIVbhGE1Ww3WvJb1feauL8lDrmoA8bnFFumB7m6DbyXAE2HIHlkPJkbHMtG0pxIO00YSrDfC3P';
    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }
    return (
        <StripeCheckout 
        label='Pay now'
        name='Ecommerce'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}
