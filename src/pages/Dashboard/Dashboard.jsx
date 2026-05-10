import {Routes , Route} from "react-router-dom";
import Navbar from '../../components/Dashboard/Navbar/Navbar';
import HomeDashboard from './HomeDashboard';
import Projects from './Projects';
import Users from './Users';
import Footer from '../../components/Dashboard/Footer/Footer';
import Siderbar from '../../components/Dashboard/Sidebar/Sidebar';
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";
function Dashboard() {
    return (
        <> 
            <Navbar adminName="Hazem" />
            <div className="d-flex " >
                <Siderbar />
                <main className="flex-grow-1 ">
                    <Routes>
                        <Route path="/" element={<HomeDashboard />} />
                        <Route path="/projects" element={<Projects />} />
                       {/* nested routes first child is table and second is form */}
                        <Route path="/users" element={<Users />}>
                            <Route index element={<TableDashboard />} />
                            <Route path= "add" element={<FormDashboard />} />
                        </Route>
                    </Routes>
                </main>
            </div>
            <Footer />
        </>
    )
}


export default Dashboard;
