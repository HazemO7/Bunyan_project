
import {Outlet} from "react-router-dom";
export default function Developers({setDraftIcon}) {
  return (
    <section className='py-4'   >
     <Outlet context={{setDraftIcon}}/>
    </section>
  )
}
