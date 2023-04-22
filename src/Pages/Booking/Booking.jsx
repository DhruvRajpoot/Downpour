import { useState } from "react";
import {
  BookingContainer,
  BookingWrapper,
  Button,
  Description,
  ErrorMsg,
  FormContainer,
  Heading,
  Image,
  Input,
  InputContainer,
  InputWrapper,
  Label,
  LeftContainer,
  RightContainer,
  TextArea,
  TextAreaContainer,
} from "./BookingStyle";
import taxibooking from "../../Assets/Images/taxi-booking.png";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail, MdDateRange, MdAccessTimeFilled } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import Schema from "./BookingSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const Booking = () => {
  const mindate=new Date().toISOString().split('T')[0];
  const [remainingdata,setRemainingData] = useState({date:'',time:''});

  const onChangeHandler = (e) => {
    setRemainingData({...remainingdata,[e.target.name]:e.target.value})
  }
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(Schema),
})
  
  const onSubmitHandler = (data) => {
    console.log('Form Submitted')
    console.log(data );
    data.date=remainingdata.date;
    data.time=remainingdata.time;
    console.log(data)
    reset();
};


  return (
    <BookingContainer>
        <Heading>Book a Taxi Appointment</Heading>
        <BookingWrapper>
      <LeftContainer>
        <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
          <InputContainer>
            <Label>Name</Label>
            <InputWrapper>
              <BsFillPersonFill />
              <Input {...register("name")} name="name" placeholder="Enter your name" />
            </InputWrapper>
              <ErrorMsg>{errors.name?.message}</ErrorMsg>
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <InputWrapper>
              <MdEmail />
              <Input {...register("email")} name="email" placeholder="Enter your email" />
            </InputWrapper>
              <ErrorMsg>{errors.email?.message}</ErrorMsg>
          </InputContainer>
          <InputContainer>
            <Label>Pickup Location</Label>
            <InputWrapper>
              <ImLocation2 />
              <Input {...register("pickup_location")} name="pickup_location" placeholder="Enter your pickup location" />
            </InputWrapper>
              <ErrorMsg>{errors.pickup_location?.message}</ErrorMsg>
          </InputContainer>
          <InputContainer>
            <Label>Drop Location</Label>
            <InputWrapper>
              <ImLocation2 />
              <Input {...register("drop_location")} name="drop_location" placeholder="Enter your drop location" />
            </InputWrapper>
              <ErrorMsg>{errors.drop_location?.message}</ErrorMsg>
          </InputContainer>
          <InputContainer>
            <Label>Date</Label>
            <InputWrapper>
              <MdDateRange />
              <Input type="date" name='date' min={mindate} onChange={onChangeHandler} required/>
            </InputWrapper>
          </InputContainer>
          <InputContainer>
            <Label>Time</Label>
            <InputWrapper>
              <MdAccessTimeFilled />
              <Input type="time" name='time' onChange={onChangeHandler} required/>
            </InputWrapper>
          </InputContainer>
          <TextAreaContainer>
            <Label>Addition Requirement</Label>
            <InputWrapper>
              <TextArea name="additional" placeholder="Enter your additional requirement" />
            </InputWrapper>
          </TextAreaContainer>
          <Button type="submit">Book Now</Button>
        </FormContainer>
      </LeftContainer>

      <RightContainer>
      <Image src={taxibooking} alt='Taxi Booking'/>
      </RightContainer>
      </BookingWrapper>
    </BookingContainer>
  );
};

export default Booking;
