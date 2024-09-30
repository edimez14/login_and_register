/**
 * The `Footer` function returns a JSX element for a footer component displaying a copyright notice.
 * @returns A Footer component is being returned. It consists of a div element with a class name of
 * "flex justify-center items-center bg-slate-500 p-2" containing a paragraph element with a class name
 * of "text-slate-100" displaying the text "© todo los derechos reservados 2024 - 2024".
 */
export function Footer() {
    return (
        <>
            <div className="flex justify-center items-center bg-slate-500 p-2">
                <p className="text-slate-100">© todo los derechos reservados 2024 - 2024</p>
            </div>
        </>
    );
}