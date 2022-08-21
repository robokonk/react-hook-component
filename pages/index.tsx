import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { validateMMYY } from "../utils";

const checkoutFormSchema = yup
  .object()
  .shape({
    emailAddress: yup.string().required(),
    expirationDate: yup.string().required(),
    idCard: yup.number().required(),
  })
  .required();

type CheckoutFormData = yup.InferType<typeof checkoutFormSchema>;

const CheckoutPage = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({ resolver: yupResolver(checkoutFormSchema) });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="p-3">
          Email:
          <input {...register("emailAddress", { required: "this is wrong" })} />
          <p>{errors.emailAddress?.message}</p>
        </div>

        <div className="p-3">
          Card Validation:
          <input
            {...register("expirationDate", {
              required: "this is wrong",
              // pattern: /d\d\d\/\d\d\d/,
              validate: validateMMYY,
            })}
          />
          <p>{errors.expirationDate?.message}</p>
        </div>

        <div>
          IDCard:
          <input {...register("idCard", { required: true })} />
          {errors.idCard && <p>This field is required</p>}
        </div>

        <button>Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
