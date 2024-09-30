/**
 * The EnterRegister function in JavaScript React handles user registration form submission and error
 * handling.
 * @returns The `EnterRegister` component is being returned. It is a form component that allows users
 * to register by providing their email, password, username, first name, last name, and phone number.
 * The form includes validation for required fields and upon submission, it calls the `createUser`
 * function from the API to create a new user. If successful, it stores the user ID in local storage
 * and redirects
 */
import { useForm } from "react-hook-form";
import { createUser } from "../api/Request.api";

export function EnterRegister() {
    const { register, handleSubmit, formState: {
        errors
    }, } = useForm();

    /* The `const onSubmit = handleSubmit(async (data) => { ... });` function in the `EnterRegister`
    component is handling the form submission logic. Here's a breakdown of what it does: */
    const onSubmit = handleSubmit(async (data) => {
        try {
            const res = await createUser(data);
            localStorage.setItem("userId", res.data.userId);
            console.log(res);
            window.location.href = "/login-view";
        } catch (error) {
            console.error("Error en el registro:", error);
        }
    });

    return (
        <>
            <div>
                <form className="grid justify-center" onSubmit={onSubmit}>
                    <div className="grid grid-cols-2 grid-rows-3 gap-3 px-10">
                        <div className="">
                            <label
                                className="text-center text-slate-100 m-5"
                                htmlFor="email"
                            >
                                Correo Electrónico:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2"
                                    type="text"
                                    placeholder="email"
                                    /* The `{...register("email", { required: true })}` syntax in the
                                    React component is using the `register` function provided by the
                                    `react-hook-form` library to register an input field within a
                                    form. */
                                    {...register("email", { required: true })}
                                />
                            </div>
                            {/* The code snippet `{errors.email && <p className="text-red-500
                            text-center my-2">falta valor en este campo</p>}` is a conditional
                            rendering statement in React. */}
                            {errors.email && <p className="text-red-500 text-center my-2">
                                falta valor en este campo
                            </p>}
                        </div>
                        <div>
                            <label
                                className="text-center text-slate-100 m-5"
                                htmlFor="password"
                            >
                                Contraseña:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2"
                                    type="password"
                                    placeholder="contraseña"
                                    {...register("password", { required: true })}
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-center my-2">
                                falta valor en este campo
                            </p>}
                        </div>
                        <div>
                            <label
                                className="text-center text-slate-100 m-5"
                                htmlFor="email"
                            >
                                Nombre de Usuario:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2"
                                    type="text"
                                    placeholder="Nombre de Usuario"
                                    {...register("userName", { required: true })}
                                />
                            </div>
                            {errors.userName && <p className="text-red-500 text-center my-2">
                                falta valor en este campo
                            </p>}
                        </div>
                        <div>
                            <label
                                className="text-center text-slate-100 m-5"
                                htmlFor="email"
                            >
                                Primer Nombre:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2"
                                    type="text"
                                    placeholder="Primer Nombre"
                                    {...register("firtName", { required: true })}
                                />
                            </div>
                            {errors.firtName && <p className="text-red-500 text-center my-2">
                                falta valor en este campo
                            </p>}
                        </div>
                        <div>
                            <label
                                className="text-center text-slate-100 m-5"
                                htmlFor="email"
                            >
                                Primer Apellido:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2"
                                    type="text"
                                    placeholder="Primer Apellido"
                                    {...register("lastName", { required: true })}
                                />
                            </div>
                            {errors.lastName && <p className="text-red-500 text-center my-2">
                                falta valor en este campo
                            </p>}
                        </div>
                        <div>
                            <label
                                className="text-center text-slate-100 m-5"
                                htmlFor="email"
                            >
                                Numero de Telefono:
                            </label>
                            <div>
                                <input
                                    className="bg-slate-300 rounded-lg text-slate-800 p-2 m-2"
                                    type="text"
                                    placeholder="Numero de Telefono"
                                    {...register("numberPhone", { required: true })}
                                />
                            </div>
                            {errors.numberPhone && <p className="text-red-500 text-center my-2">
                                falta valor en este campo
                            </p>}
                        </div>
                    </div>
                    <div className="flex justify-center p-2 col-span-2">
                        <button
                            type="submit"
                            className="bg-slate-600 rounded-md border-slate-400 border-2 hover:border-slate-100 hover:bg-slate-500 p-2"
                        >
                            Registrarse
                        </button>
                    </div>
                </form>
                <div className="flex justify-center">
                    <p className="text-slate-100 m-5">
                        ¿Ya tienes una cuenta?{" "}
                        <a className="hover:text-slate-300" href="/login">
                            Inicia Sesion
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}