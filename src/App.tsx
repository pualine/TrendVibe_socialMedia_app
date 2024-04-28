import { Routes, Route } from "react-router-dom"
import "./globals.css";
import SigninForm from "./_auth/forms/SigninForm";
import Home from "./_root/pages/Home";
import SignupForm from "./_auth/forms/SignupForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster"
import { Explore, Saved, AllUsers, LikedPosts, UpdateProfile, Profile, EditPost, PostDetails, CreatePost } from "./_root/pages";





const App = () => {
    return (
        <>  
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
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/all-users" element={<AllUsers />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/update-post/:id" element={<EditPost />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/profile/:id/*" element={<Profile />} />
                    <Route path="/update-profile/:id" element={<UpdateProfile />} />
                    <Route path="/liked-post" element={<LikedPosts />} />
                </Route>

            </Routes>
            <Toaster />
        </main>
        </>
    )
}

export default App