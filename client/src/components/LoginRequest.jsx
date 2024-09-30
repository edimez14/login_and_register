/* This code snippet is a React component called `LoginRequest` that handles user login functionality.
Here's a breakdown of what the code does: */
import { useState } from "react";
import { LoginUser } from "../api/Request.api";

export function LoginRequest() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	/**
	 * The handleSubmit function is an asynchronous function that handles form submission for user login,
	 * saves the userId in localStorage upon successful login, and redirects to the user's dashboard page,
	 * displaying an error message if the login fails.
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await LoginUser({ email, password });

			
			/* `localStorage.setItem("userId", res.data.userId);` is storing the user's `userId` in the
			browser's `localStorage`. This allows the user's `userId` to be saved locally on the user's
			device even after the browser is closed or refreshed. This can be useful for persisting user data
			or session information across different pages or visits to the website. */
			localStorage.setItem("userId", res.data.userId);

			window.location.href = "/login-view";
		} catch (error) {
			console.error("Error en el inicio de sesión:", error);
		}
	};

	return (
		<div>
			<form className="grid justify-center" onSubmit={handleSubmit}>
				<div>
					<div>
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
								id="email"
								placeholder="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						{errorMessage && <p className="text-red-500 text-center my-2">
                                {setErrorMessage("debe ingrese su correo electronico")}
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
								id="password"
								placeholder="contraseña"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						{errorMessage && <p className="text-red-500 text-center my-2">
                                {setErrorMessage("debe ingrese su contraseña")}
                            </p>}
					</div>
				</div>
				<div className="flex justify-center p-2">
					<button
						type="submit"
						className="bg-slate-600 rounded-md border-slate-400 border-2 hover:border-slate-100 hover:bg-slate-500 p-2"
					>
						Iniciar Sesión
					</button>
				</div>
			</form>
			<div className="flex justify-center">
				<p className="text-slate-100 m-5">
					¿No tienes una cuenta?{" "}
					<a className="hover:text-slate-300" href="/register">
						Registrate
					</a>
				</p>
			</div>
		</div>
	);
}
