import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Form.css";

export default function ReactProductForm() 
{
    
    const [result, setResult] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setResult(data);
        console.log(data);
    };

    return (
        <div className="form">
            <h1 className="form_title">New Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                <input type="text" className="input" id="Name" placeholder="Name" {...register("Name", { required: true})}></input>
                </div>
            {errors.Name && <div className="input_error">Name cannot be empty.</div>}
            <div class="row">
            <input type="text" className="input" id="Description" placeholder="Description" {...register("Desc", { required: true})}></input>
            </div>
            {errors.Desc && <div className="input_error">Description cannot be empty.</div>}
            <div class="row">
            <input type="text" className="input" id="Category" placeholder="Category" {...register("Category", { required: true})}></input>
            </div>
            {errors.Category && <div className="input_error">Category cannot be empty.</div>}
            <div class="row">
            <input type="number" className="input" id="Quantity" placeholder="Quantity" {...register("Quantity", { required: true, min:0})}></input>
            </div>
            {errors.Quantity && errors.Quantity.type === "required" && <div className="input_error">Quantity cannot be empty.</div>}
            {errors.Quantity && errors.Quantity.type === "min" && <div className="input_error">Quantity must bigger than zero.</div>}
            <div class="row">
            <input type="number" className="input" id="Price" step="0.01" placeholder="Price" {...register("Price", { required: true, min:0.01})}></input>
            </div>
            {errors.Price && errors.Price.type === "required" && <div className="input_error">Description cannot be empty.</div>}
            {errors.Price && errors.Price.type === "min" && <div className="input_error">Price must bigger than zero.</div>}
            <div class="row" className="button_row">
            <button type="submit" className="submit_button">SUBMIT</button>
            <button type="button" className="cancel_button">CANCEL</button>
            </div>
            </form>
            
            {result && 
            <div class="row">
            <p>Submitted! Please check console log.</p>
            <p>Name: {result.Name}</p>
            <p>Description: {result.Desc}</p>
            <p>Category: {result.Category}</p>
            <p>Quantity: {result.Quantity}</p>
            <p>Price: {result.Price}</p>
            </div>}
        </div>
    );
}


