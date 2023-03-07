import {
  View
} from 'react-native';
import React from 'react';
import CartItem from './CartItem';
import Summary from './Summary';
import Button from './Button';

const Cart = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 3 }}>
        <CartItem />
      </View>
      <View style={{ flex: 2, alignItems: 'center', marginTop: 20 }}>
        <Summary />
      </View>
      <View style={{ flex: 0.5, padding: 20 }}>
        <Button
          justifyContent="center"
          alignItems="center"
          width="100%"
          height={50}
          backgroundColor="#f40057"
          borderRadius={30}
          text="Continue"
          fontSize={17}
          fontWeight="bold"
          color="white"
        />
      </View>
    </View>
  );
};

export default Cart;