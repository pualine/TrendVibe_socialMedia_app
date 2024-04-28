
import Bottombar from '@/components/shared/Bottombar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import { ModeToggle } from '@/components/shared/ModeToggle'
import { ThemeProvider } from '@/components/shared/ThemeProvider'
import Topbar from '@/components/shared/Topbar'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <>

      <div className='w-full md:flex'>
        <Topbar />
        <LeftSidebar />
        <section className='flex flex-1 h-full'>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className='mt-10 ml-3'>
              <ModeToggle />
            </div>
            <Outlet />
          </ThemeProvider>
        </section>
        <Bottombar />
      </div>
    </>
  )
}

export default RootLayout