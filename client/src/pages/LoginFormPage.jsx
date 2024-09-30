/**
 * The `LoginFormPage` function renders a login form page with a header and a footer component.
 * @returns The `LoginFormPage` component is being returned. It contains a structure for a login form
 * page with a title "Inicio de Sesión", a `LoginRequest` component for handling the login request, and
 * a `Footer` component at the bottom of the page. The page has a background color of "bg-slate-500"
 * and uses Tailwind CSS classes for styling elements such as width,
 */
import { LoginRequest } from "../components/LoginRequest";
import { Footer } from "../components/Footer";
import "../App.css";

export function LoginFormPage() {

  return (
    <>
      <div className="flex flex-col justify-center h-screen bg-slate-500">
        <div className="flex h-auto justify-center items-center">
          <div className="w-6/12 m-5 px-5 py-16 rounded-2xl glassmorphism">
            <div>
              <h1 className="text-4xl text-center text-slate-100 m-5">Inicio de Sesión</h1>
            </div>
            <LoginRequest />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
