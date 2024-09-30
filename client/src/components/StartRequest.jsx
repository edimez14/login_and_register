/* This code snippet is a React component named `StartRequest`. It is responsible for loading user data
based on the user ID stored in the localStorage. Here's a breakdown of what the code does: */
import { useEffect, useState } from "react";
import { getUserById } from "../api/Request.api";

export function StartRequest() {
	const [user, setUser] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	/* The `useEffect` hook in the React component `StartRequest` is responsible for loading user data
	when the component mounts. Here's a breakdown of what the code inside `useEffect` is doing: */
	useEffect(() => {
		async function loadUser() {
			try {
				const userId = localStorage.getItem("userId");

				if (!userId) {
					setErrorMessage(
						<div className="flex-col items-center justify-center p-5 m-5">
							<p className="text-center text-slate-100 m-5">No estás autenticado. Inicia sesión primero.</p>
							<div className="flex justify-center">
								<button type="submit" className="bg-slate-600 rounded-md border-slate-400 border-2 hover:border-slate-100 hover:bg-slate-500 p-2" onClick={handleClick}>
									Iniciar Sesión
								</button>
							</div>
						</div>
					);
					return;
				}

				const res = await getUserById(userId);
				setUser(res.data);
			} catch (error) {
				setErrorMessage("Error al cargar el usuario.");
				console.error('Error en la solicitud:', error);
			}
		}

		loadUser();
	}, []);

	/**
	 * The handleClick function removes the "userId" from localStorage, sets the user to null, and
	 * redirects to the "/login" page.
	 */
	const handleClick = () => {
		localStorage.removeItem("userId");
		setUser(null);
		window.location.href = "/login";
	};

	/* This portion of the code in the `StartRequest` component is handling the conditional rendering
	based on the state of `errorMessage` and `user`. */
	if (errorMessage) {
		return (
			<div className="px-10">
				{errorMessage}
			</div>
		);
	}

	if (!user) {
		return (
			<div className="px-10">
				<h3 className="text-slate-100 m-5">Cargando usuario...</h3>
			</div>
		);
	}

	return (
		<>
			<div className="px-10">
				<div>
					<h1 className="text-2xl text-slate-100 m-5">Nombre de Usuario: <strong>{user.userName}</strong></h1>
					<p className="text-slate-100 m-5">Correo Electronico: <strong>{user.email}</strong></p>
					<p className="text-slate-100 m-5">Nombre: <strong>{user.firtName}</strong></p>
					<p className="text-slate-100 m-5">Apellido: <strong>{user.lastName}</strong></p>
					<p className="text-slate-100 m-5">Numero Celular: <strong>{user.numberPhone}</strong></p>
				</div>
				<div className="flex justify-center p-5 m-5">
					<button type="submit" className="bg-slate-600 rounded-md border-slate-400 border-2 hover:border-slate-100 hover:bg-slate-500 p-2" onClick={handleClick}>
						Cerrar Sesión
					</button>
				</div>
			</div>
		</>
	);
}
