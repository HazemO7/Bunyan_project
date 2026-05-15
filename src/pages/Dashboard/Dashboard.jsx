import {Routes , Route} from "react-router-dom";
import Navbar from '../../components/Dashboard/Navbar/Navbar';
import HomeDashboard from './HomeDashboard';
import Projects from './Projects';
import Users from './Users';
import Footer from '../../components/Dashboard/Footer/Footer';
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar';
import TableDashboard from "../../components/ui/TableDashboard/TableDashboard";
import FormDashboard from "../../components/ui/FormDashboard/FormDashboard";
import CMS from "./CMS";
import Developers from "./Developers";
import LiveChat from "./LiveChat";
import { useState } from "react";
function Dashboard() {
    const [draftIcon, setDraftIcon] = useState(false);

return(
        <> 
            <Navbar adminName="Hazem" />
            <div className="d-flex " >
                <Sidebar draftIcon={draftIcon} />
                <main className="flex-grow-1 ">
                    <Routes>
                        <Route path="/" element={<HomeDashboard />} />
                        {/* nested routes first child is table and second is form */}
                        <Route path="/users" element={<Users setDraftIcon={setDraftIcon} />}>
                            <Route index element={<TableDashboard  title= "Users" />} />
                            <Route path= "add" element={<FormDashboard />} >
                        </Route>
                        </Route>
                        <Route path="/projects" element={<Projects  />}>
                            <Route index element={<TableDashboard  title= "Projects" />} />
                            <Route path= "add" element={<FormDashboard />} />
                        </Route>
                        <Route path="/developers" element={<Developers />} > 
                            <Route index element={<TableDashboard  title= "Developers" />} />
                            <Route path= "add" element={<FormDashboard />} />
                        </Route>
                        <Route path="/cms" element={<CMS />}>
                              <Route index element={<TableDashboard  title= "CMS" />} />
                              <Route path= "add" element={<FormDashboard />} />
                        </Route>
                        <Route path="/live-chat" element={<LiveChat />} />
                    </Routes>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;
