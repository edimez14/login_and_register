/**
 * The StartPage function renders a component for collecting user data within a styled container, along
 * with a footer component.
 * @returns The `StartPage` component is being returned. It contains a structure with a background
 * color, a section for user data input using the `StartRequest` component, and a footer at the bottom
 * of the page using the `Footer` component.
 */
import { StartRequest } from "../components/StartRequest";
import { Footer } from "../components/Footer";
import "../App.css"

export function StartPage() {
  return (
    <>
      <div className="flex flex-col h-screen bg-slate-500">
        <div className="flex h-auto justify-center">
          <div className="w-6/12 m-5 px-5 py-4 rounded-2xl glassmorphism">
            <h1 className="text-4xl text-center text-slate-100 m-5">Datos del Usuario</h1>
            <StartRequest />
          </div>
        </div>
        <div className="py-12">
          <Footer />
        </div>
      </div>
    </>
  );
}
