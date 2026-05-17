
import CardStatus from '../../ui/CardStatus/CardStatus'
function Status() {
  return (
    <section className='py-4'>
        <div className='container'>
            <div className= "row">
                <div className="col-12 col-md-3"> <CardStatus counter={120} title="projects" icon="fas fa-project-diagram"/></div>
                <div className="col-12 col-md-3 "><CardStatus counter={45} title="Users" icon="fas fa-users"/></div>
                <div className="col-12 col-md-3 "><CardStatus counter={67} title="Developers" icon="fas fa-laptop-code"/></div>
                <div className="col-12 col-md-3"><CardStatus counter={89} title="Blogs" icon="fas fa-blog"/></div>
            </div>
        </div>
       
    </ section >
  
  )
}
export default Status;