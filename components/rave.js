import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { Text, Input, Button, Stack, Box } from "@chakra-ui/react";

function Rave() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const onChange = (e) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const config = {
    public_key: "FLWPUBK_TEST-5b9478eb5570eec85103137c517dbdb4-X",
    tx_ref: "MS_" + Math.floor(Math.random() * 1000000000 + 1),
    amount: contactInfo.amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: contactInfo.email,
      phonenumber: contactInfo.phone,
      name: contactInfo.name,
    },
    customizations: {
      title: "MofeoluwaSanmi",
      description: "Gift for the wedding",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  return (
      <Box bg="brand.main" px="4rem" py="3rem" minW="30.7rem" zIndex="4">
        <Text
          color="brand.black"
          fontSize="2.4rem"
          fontWeight="700"
          textAlign="center"
          pt="1rem"
        >
          Give Gifts
        </Text>
        <Text color="brand.gray" ontSize="1.5rem" mt=".9rem" mb="1rem">
          We are delighted to share our love story wit you. All gifts towards
          the wedding are welcome. Kindly monetize all presents. God bless you.
        </Text>
        <hr />
        <Box mt="1.5rem" as="form" id="payMoney">
          <Stack spacing={3} mt="1.5rem">
            <Text mb="0.5rem" color="brand.gray">
              Full Name
            </Text>
            <Input
              h="4.8rem"
              fontSize="1.5rem"
              color="brand.black"
              variant="outline"
              placeholder="Enter your full name"
              id="name"
              value={contactInfo.name}
              onChange={onChange}
              _focus={{ boxShadow: "none" }}
              borderRadius="50rem"
            />
            <Text mb="0.5rem" color="brand.gray">
              Email Address
            </Text>
            <Input
              h="4.8rem"
              fontSize="1.5rem"
              color="brand.black"
              variant="outline"
              id="email"
              placeholder="Enter your email address"
              value={contactInfo.email}
              onChange={onChange}
              _focus={{ boxShadow: "none" }}
              borderRadius="50rem"
            />
            <Text mb="0.5rem" color="brand.gray">
              Phone Number
            </Text>
            <Input
              h="4.8rem"
              fontSize="1.5rem"
              color="brand.black"
              variant="outline"
              id="phone"
              placeholder="Enter your phone number"
              value={contactInfo.phone}
              onChange={onChange}
              _focus={{ boxShadow: "none" }}
              borderRadius="50rem"
            />
            <Text mb="0.5rem" color="brand.gray">
              Amount
            </Text>
            <Input
              h="4.8rem"
              fontSize="1.5rem"
              color="brand.black"
              variant="outline"
              id="amount"
              placeholder="Enter amount"
              value={contactInfo.amount}
              onChange={onChange}
              _focus={{ boxShadow: "none" }}
              borderRadius="50rem"
            />
          </Stack>
          <Button
          h="4.2rem"
          w="15.6rem"
          mt="2rem"
          fontSize="1.5rem"
          borderRadius="50rem"
          bg="brand.dark"
          color="brand.light"
            value="Continue"
            onClick={(e) => {
              e.preventDefault();
              handleFlutterPayment({
                callback: (response) => {
                  console.log(response);
                  closePaymentModal(); // this will close the modal programmatically
                },
                onClose: () => {},
              });
            }}
          >
            Continue
          </Button>
          {/* <form action="" method="POST" id="payMoney">  */}
          {/* <label>Full Name</label>
      <input type="text" id="name" placeholder="Enter your full name" 
      value={contactInfo.name} onChange={onChange} required/>
      <label>Email</label>
      <input type="email" id="email" placeholder="Enter your email address"
      value={contactInfo.email} onChange={onChange} required/>
      <label>Phone Number</label>
      <input type="number" id="phone" placeholder="Enter your phone number"
      value={contactInfo.phone} onChange={onChange}required/>
      <label>Amount</label>
      <input type="number" id="amount" placeholder="Enter amount" value={contactInfo.amount} onChange={onChange} required/> */}
          {/* <button value="Continue"  onClick={(e) => {
        e.preventDefault();
  handleFlutterPayment({
    callback: (response) => {
       console.log(response);
        closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {},
  });
}}>Continue</button> */}
          {/* </form> */}
        </Box>
      </Box>
  );
}

export default Rave;
