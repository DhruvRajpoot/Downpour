import * as yup from "yup";

const Schema = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Z ]*$/, "Name must be only contain letters").required("Name is required"),
    email: yup.string().email().required("Email is required"),
    pickup_location: yup.string().required("Pickup location is required"),
    drop_location: yup.string().required("Drop is required"),
});
export default Schema;