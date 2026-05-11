import React from 'react'
import TableDashboard from '../../components/ui/TableDashboard/TableDashboard'
import FormDashboard from '../../components/ui/FormDashboard/FormDashboard'
import {Outlet} from "react-router-dom";
export default function CMS() {
  return (
    <section className='py-4'   >
     <Outlet />
    </section>
  )
}
