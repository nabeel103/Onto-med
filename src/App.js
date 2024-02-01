import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Admin_navbar from "./components/admin/Admin_navbar";
import Admin_dashboard from "./components/admin/Admin_dashboard";
import Admin_view_user from "./components/admin/Admin_view_user";
import Admin_edit_user from "./components/admin/Admin_edit_user";
import Patient_navbar from "./components/patient/Patient_navbar";
import Patient_dashboard from "./components/patient/Patient_dashboard";
import Patient_history from "./components/patient/Patient_history";
import Admin_add_user from "./components/admin/Admin_add_user";
import Admin_view_report from "./components/admin/Admin_view_report";
import Admin_view_activity from "./components/admin/Admin_view_activity";
import Patient_add_diagosis from "./components/patient/Patient_add_diagosis";
import Patient_view_report from "./components/patient/Patient_view_report";
import Patient_view_profile from "./components/patient/Patient_view_profile";
import Patient_edit_profile from "./components/patient/Patient_edit_profile";
import Patient_history_detail from "./components/patient/Patient_history_detail";
import Practitioner_dashboard from "./components/practitioner/Practitioner_dashboard";
import Practitioner_navbar from "./components/practitioner/Practitioner_navbar";
import Practitioner_case_detail from "./components/practitioner/Practitioner_case_detail";
import Practitioner_view_cases from "./components/practitioner/Practitioner_view_cases";
import Practitioner_view_requests from "./components/practitioner/Practitioner_view_requests";
import Practitioner_view_reports from "./components/practitioner/Practitioner_view_reports";
import Practitioner_view_profile from "./components/practitioner/Practitioner_view_profile";
import Practitioner_edit_case_detail from "./components/practitioner/Practitioner_edit_case_detail";
import Practitioner_view_request_detail from "./components/practitioner/Practitioner_view_request_detail";
import Practitioner_edit_profile from "./components/practitioner/Practitioner_edit_profile";
import Researcher_navbar from "./components/researcher/Researcher_navbar";
import Researcher_dashboard from "./components/researcher/Researcher_dashboard";
import Researcher_case_detail from "./components/researcher/Researcher_case_detail";
import Researcher_edit_case_detail from "./components/researcher/Researcher_edit_case_detail";
import Researcher_view_cases from "./components/researcher/Researcher_view_cases";
import Researcher_view_profile from "./components/researcher/Researcher_view_profile";
import Researcher_edit_profile from "./components/researcher/Researcher_edit_profile";
import Researcher_view_reports from "./components/researcher/Researcher_view_reports";
import Knowledgeengr_navbar from "./components/knowledge_engineer/Knowledgeengr_navbar";
import Knowledgeengr_dashboard from "./components/knowledge_engineer/Knowledgeengr_dashboard";
import Knowledgeengr_view_rule from "./components/knowledge_engineer/Knowledgeengr_view_rule";
import Knowledgeengr_view_rule_detail from "./components/knowledge_engineer/Knowledgeengr_view_rule_detail";
import Knowledgeengr_edit_rule from "./components/knowledge_engineer/Knowledgeengr_edit_rule";
import Knowledgeengr_add_rule from "./components/knowledge_engineer/Knowledgeengr_add_rule";
import Knowledgeengr_view_profile from "./components/knowledge_engineer/Knowledgeengr_view_profile";
import Knowledgeengr_edit_profile from "./components/knowledge_engineer/Knowledgeengr_edit_profile";
import Knowledgeengr_view_report from "./components/knowledge_engineer/Knowledgeengr_view_report";





function App() {
  return (
    <BrowserRouter>
    <div >
      <Routes>
        {/* Nested routing for Navigation bar */}
        <Route path="/" element={<Navbar/>}>
          <Route path="" element={<Hero />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/admin" element={<Admin_navbar />}>
          <Route path="" element={<Admin_dashboard />} />
          <Route path="viewuser" element={<Admin_view_user />} />
          <Route path="edituser" element={<Admin_edit_user />} />
          <Route path="adduser" element={<Admin_add_user />} />
          <Route path="viewreport" element={<Admin_view_report />} />
          <Route path="viewactivity" element={<Admin_view_activity />} />
        </Route>

        <Route path="/patient" element={<Patient_navbar/>}>
          <Route path="" element={<Patient_dashboard />} />
          <Route path="history" element={<Patient_history />} />
          <Route path="adddiagnosis" element={<Patient_add_diagosis />} />
          <Route path="viewreport" element={<Patient_view_report />} />
          <Route path="viewprofile" element={<Patient_view_profile />} />
          <Route path="editprofile" element={<Patient_edit_profile />} />
          <Route path="historydetail" element={<Patient_history_detail />} />
        </Route>

        <Route path="/practitioner" element={<Practitioner_navbar/>}>
          <Route path="" element={<Practitioner_dashboard/>} />
          <Route path="casedetail" element={<Practitioner_case_detail/>} />
          <Route path="editcasedetail" element={<Practitioner_edit_case_detail/>} />
          <Route path="viewcases" element={<Practitioner_view_cases/>} />
          <Route path="viewrequests" element={<Practitioner_view_requests/>} />
          <Route path="viewrequestdetail" element={<Practitioner_view_request_detail/>} />
          <Route path="viewreports" element={<Practitioner_view_reports/>} />
          <Route path="viewprofile" element={<Practitioner_view_profile/>} />
          <Route path="editprofile" element={<Practitioner_edit_profile/>} />
        </Route>

        <Route path="/researcher" element={<Researcher_navbar/>}>
          <Route path="" element={<Researcher_dashboard/>} />
          <Route path="viewcases" element={<Researcher_view_cases/>} />
          <Route path="casedetail" element={<Researcher_case_detail/>} />
          <Route path="editcasedetail" element={<Researcher_edit_case_detail/>} />
          <Route path="viewprofile" element={<Researcher_view_profile/>} />
          <Route path="editprofile" element={<Researcher_edit_profile/>} />
          <Route path="viewreports" element={<Researcher_view_reports/>} />
        </Route>

        <Route path="/knowledgeengr" element={<Knowledgeengr_navbar/>}>
          <Route path="" element={<Knowledgeengr_dashboard/>} />
          <Route path="viewrule" element={<Knowledgeengr_view_rule/>} />
          <Route path="ruledetail" element={<Knowledgeengr_view_rule_detail/>} />
          <Route path="editrule" element={<Knowledgeengr_edit_rule/>} />
          <Route path="addrule" element={<Knowledgeengr_add_rule/>} />
          <Route path="viewprofile" element={<Knowledgeengr_view_profile/>} />
          <Route path="editprofile" element={<Knowledgeengr_edit_profile/>} />
          <Route path="viewreport" element={<Knowledgeengr_view_report/>} />
        </Route>





      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
