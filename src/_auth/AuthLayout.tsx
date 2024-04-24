import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
          <img 
          src="/assets/gifs/signup.gif" 
          alt="logo"
          className="hidden xl:block h-full w-1/2  object-cover bg-no-repeat" 
          />
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center py-10">
            <Outlet />
          </section>
        </>

      )}
    </>
  );
};

export default AuthLayout;
