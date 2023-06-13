import { Topbar } from '@/pages/Home/Topbar'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div className="w-full flex flex-col items-center">
      <Topbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}
