import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
          <img 
          src="/assets/icons/login.svg" 
          alt="logo"
          className="hidden xl:block ml-4 mt-20 py-10 ps-20 px-5 h-auto  object-cover bg-no-repeat"
          style={{ position: "relative" }} 
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
