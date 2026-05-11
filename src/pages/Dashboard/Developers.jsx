import React from 'react'
import tableDashboard from '../../components/ui/TableDashboard/TableDashboard';
import FormDashboard from '../../components/ui/FormDashboard/FormDashboard';
import {Outlet} from "react-router-dom";
export default function Developers() {
  return (
    <section className='py-4'   >
     <Outlet />
    </section>
  )
}
