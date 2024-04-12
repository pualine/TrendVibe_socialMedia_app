import { Routes, Route } from "react-router-dom"
import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm";
import Home from "./_root/pages/Home";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
    return (
        <main className="flex h-screen">
            {/* public routes */}
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="/signin" element={<SigninForm />} />
                    <Route path="/signup" element={<SignupForm />} />
                </Route>


                <Route element={<RootLayout />}>
                    {/* private routes */}
                    <Route index element={<Home />} />
                </Route>

            </Routes>
        </main>
    )
}

export default App