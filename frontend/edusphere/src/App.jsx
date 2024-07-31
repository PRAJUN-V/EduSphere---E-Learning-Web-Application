import react from "react"
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import { Login } from './pages/authentication/Login'
import { Register } from './pages/authentication/Register'
import { NotFound } from "./pages/pageNotFound/NotFound"
import { Home } from "./pages/user/Home"
import { AdminDashboard } from "./pages/admin/AdminDashboard"
import { BecomeInstructor } from "./pages/instructor/BecomeInstructor";
import AwaitingApproval from "./pages/instructor/AwaitingApproval";
import { EditInstructorApplication } from "./pages/instructor/EditInstructorApplication";
import { InstructorRequests } from "./pages/admin/InstructorRequests";
import { InstructorDashboard } from "./pages/instructor/InstructorDashboard";
import { CategoryList } from "./pages/admin/CategoryList";
import { InstructorCourses } from "./pages/instructor/InstructorCourses";
import { StudentProfile } from "./pages/user/StudentProfile";
import { InstructorCourseAdd } from "./pages/instructor/courses/InstructorCourseAdd";
import AdminCourses from "./pages/admin/courses/AdminCourses";
import CourseDetails from "./pages/admin/courses/CourseDetails";
import { AllCourses } from "./pages/user/courses/AllCourses";
import CourseDetail from "./pages/user/courses/CourseDetail";

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* common routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />}></Route>

        {/* admin routes */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />

        <Route path="/admin/instructor-requests" element={
          <ProtectedRoute requiredRole="admin">
            <InstructorRequests />
          </ProtectedRoute>
        } />

        <Route path="/admin/category_list" element={
          <ProtectedRoute requiredRole="admin">
            <CategoryList />
          </ProtectedRoute>
        } />

        <Route path="/admin/course_list" element={
          <ProtectedRoute requiredRole="admin">
            <AdminCourses />
          </ProtectedRoute>
        } />

        <Route path="/admin/course-details" element={
          <ProtectedRoute requiredRole="admin">
            <CourseDetails />
          </ProtectedRoute>
        } />

        {/* instructor routes */}
        <Route path="/instructor/become_instructor" element={
          <ProtectedRoute requiredRole="instructor">
            <BecomeInstructor />
          </ProtectedRoute>
        } />

        <Route path="/instructor/awaiting-approval" element={
          <ProtectedRoute requiredRole="instructor">
            <AwaitingApproval />
          </ProtectedRoute>
        } />

        <Route path="/instructor/edit-instructor-application" element={
          <ProtectedRoute requiredRole="instructor">
            <EditInstructorApplication />
          </ProtectedRoute>
        } />

        <Route path="/instructor/dashboard" element={
          <ProtectedRoute requiredRole="instructor">
            <InstructorDashboard />
          </ProtectedRoute>
        } />

        <Route path="/instructor/courses" element={
          <ProtectedRoute requiredRole="instructor">
            <InstructorCourses />
          </ProtectedRoute>
        } />

        <Route path="/instructor/add-course" element={
          <ProtectedRoute requiredRole="instructor">
            <InstructorCourseAdd />
          </ProtectedRoute>
        } />

        {/* student routes */}
        <Route path="/student/profile" element={
          <ProtectedRoute requiredRole="student">
            <StudentProfile />
          </ProtectedRoute>
        } />

        <Route path="/student/all-course" element={
          <ProtectedRoute requiredRole="student">
            <AllCourses />
          </ProtectedRoute>
        } />

        <Route path="/student/course-detail/:courseId" element={
          <ProtectedRoute requiredRole="student">
            <CourseDetail />
          </ProtectedRoute>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App
