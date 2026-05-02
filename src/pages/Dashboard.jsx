
import Navbar from '../components/Dashboard/Navbar/Navbar';
import Footer from '../components/Dashboard/Footer/Footer';
import Siderbar from '../components/Dashboard/Sidebar/Sidebar';
function Dashboard() {
    return (
        <> 
            <Navbar adminName="Hazem" />
            <div className="d-flex " >
                <Siderbar />
                <main className="flex-grow-1 ">
                    <h1>test dashboard</h1>
                </main>
            </div>
            <Footer />
        </>
    )
}



export default Dashboard;
