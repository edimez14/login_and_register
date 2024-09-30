/**
 * The RegisterFormPage function renders a registration form page with EnterRegister component and a
 * footer.
 * @returns The RegisterFormPage component is being returned. It contains a div with a background color
 * of "bg-slate-500" and two child components - EnterRegister and Footer. The EnterRegister component
 * is displayed within a styled div with a heading "Registrase". The Footer component is displayed
 * below the EnterRegister component.
 */
import { EnterRegister } from "../components/EnterRegister";
import { Footer } from "../components/Footer";
import "../App.css";

export function RegisterFormPage() {

    return (
        <>
            <div className="flex flex-col justify-center h-screen bg-slate-500">
                <div className="flex h-auto justify-center items-center">
                    <div className="w-6/12 m-5 px-5 py-16 rounded-2xl glassmorphism">
                        <div>
                            <h1 className="text-4xl text-center text-slate-100 m-5">Registrase</h1>
                        </div>
                        <EnterRegister />
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
