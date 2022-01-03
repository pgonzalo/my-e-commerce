import React, { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import "./FormComponent.css";
import Spinner from "../Spinner/Spinner";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

//Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  adress: "",
};

const FormComponent = () => {
  const [values, setValues] = useState(initialState);
  const [purchaseID, setPurchaseID] = useState(""); 
  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  //Add new document in collection purchases
  const onSubmitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    setPurchaseID(docRef);
    setTimeout(() => {
        setIsLoading(false);
        setValues(initialState);
      }, 1000);
  };

  return (
    <div>
      <form className="form-container" onSubmit={onSubmitHandler}>
        <Input
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Lastname"
          name="lastName"
          value={values.lastName}
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={onChangeHandler}
        />
        <Input
          placeholder="Adress"
          name="adress"
          value={values.adress}
          onChange={onChangeHandler}
        />
        <Button primary>Send</Button>
      </form>
      {
        isLoading ? (
          <Spinner />
        ) : (
          purchaseID.id && (
            <div>
              <SuccessMessage msg={purchaseID} />
            </div>
          )
        )
      }
    </div>
  );
};

export default FormComponent;
