import { BrowserRouter, Route, Routes } from "react-router-dom";

import PageNotFound from "./pages/404";
import Login from "./pages/login";
import Notifications from "./pages/notifications";
import Profile from "./pages/profile";
import ResetPassword from "./pages/reset-passoword";
import ChangePassword from "./pages/reset-passoword/change-password";
import SnackBar from "./components/snackbar";
import { useAppSelector } from "./stores/hooks";
import Chat from "./pages/chat";
import PersistLogin from "./routeProtectors/persistLogin";
import RedirectHome from "./routeProtectors/redirectHome";
import Unauthorised from "./pages/unauthorised";
import RequireAuthorization from "./routeProtectors/requireAuthorization";
import TutorDashboard from "./pages/usertypes/tutor/dashboard";
import TuteeDashboard from "./pages/usertypes/tutee/dashboard";
import AdminDashboard from "./pages/usertypes/admin/dashboard";
import MyTutee from "./pages/usertypes/tutor/my-tutees";
import MySchedule from "./pages/usertypes/tutor/my-schedule";
import TuteeSchedule from "./pages/usertypes/tutee/my-schedule";
import TuteesRecording from "./pages/usertypes/admin/tutees-management";
import TutorsRecording from "./pages/usertypes/admin/tutors-management";
import MeetingRecords from "./pages/usertypes/admin/meeting-records";
import ComingSoon from "./pages/coming-soon";

function App() {
  const { show, message, isError } = useAppSelector(
    (state) => state.snackbar.value
  );

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/unauthorised" element={<Unauthorised />} />
          <Route element={<RedirectHome />}>
            <Route path="/" element={<Login />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/change-password/:email/:otp"
              element={<ChangePassword />}
            />
          </Route>
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuthorization allowed_user="tutor" />}>
              <Route path="/tutor/dashboard" element={<TutorDashboard />} />
              <Route path="/tutor/my-tutees" element={<MyTutee />} />
              <Route path="/tutor/my-schedules" element={<MySchedule />} />
              <Route path="/tutor/course-management" element={<ComingSoon />} />
              <Route path="/tutor/settings" element={<ComingSoon />} />
            </Route>
            <Route element={<RequireAuthorization allowed_user="tutee" />}>
              <Route path="/tutee/dashboard" element={<TuteeDashboard />} />
              <Route path="/tutee/my-schedules" element={<TuteeSchedule />} />
              <Route path="/tutee/my-course" element={<ComingSoon />} />
              <Route path="/tutee/community" element={<ComingSoon />} />
              <Route path="/tutee/settings" element={<ComingSoon />} />
            </Route>
            <Route element={<RequireAuthorization allowed_user="admin" />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route
                path="/admin/tutees-management"
                element={<TuteesRecording />}
              />
              <Route
                path="/admin/tutors-management"
                element={<TutorsRecording />}
              />
              <Route
                path="/admin/meeting-records"
                element={<MeetingRecords />}
              />
              <Route path="/admin/schedule" element={<ComingSoon />} />
              <Route path="/admin/support-requests" element={<ComingSoon />} />
            </Route>

            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {<SnackBar show={show} message={message} isError={isError} />}
    </>
  );
}

export default App;
