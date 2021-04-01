import * as yup from "yup";
export const AddNewHouseValidation = () => {
  let schema = yup.object().shape({
    houseDescription: yup
      .string()
      .required("Please a description of your house !"),
    houseSold: yup.string().required("Please select an option from above !"),
    housePurpose: yup.string().required("Please select an option!"),
    housePrice: yup.string().required("Please write price of the house!"),

    houseImage: yup
      .string()
      .required("Please add any image link that your house might look lik!"),
    livingRoomImage: yup
      .string()
      .required(
        "Please add any image link that your living room might look lik!"
      ),
    bedRoomImage: yup
      .string()
      .required(
        "Please add any image link that your bed room might look lik !"
      ),
    kitchenImage: yup
      .string()
      .required(
        "Please add any image link that your kitchen room might look lik !"
      ),
    houseCity: yup
      .string()
      .required("Please add add a city where the house is located !"),
    houseNumber: yup.string().required("Please add your house number !"),
    streetName: yup.string().required("Please add the street name !"),
    housePostcode: yup.string().required("Please add the house postcode !"),
    houseType: yup.string().required("Please select the type of the house !"),
  });

  return schema;
};
