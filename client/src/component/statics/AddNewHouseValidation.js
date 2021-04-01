import * as yup from "yup"
export const AddNewHouseValidation = ()=>{
    let schema = yup.object().shape({
      houseDescription: yup.string().required("Please a description of your house !")
    });
}