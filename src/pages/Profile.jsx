<<<<<<< HEAD
import NavBar from "../Components/feed-components/NavBar.jsx";
import Footer from "../Components/feed-components/Footer.jsx";
=======
import Footer from "../components/feed-components/Footer";
import NavBar from "../components/feed-components/NavBar";
>>>>>>> fb28215a0f9a558d12196340cf89e188465d7ff9
import Cover from "../components/profile_components/Cover";
import About from "../components/profile_components/About";
import Interest from "../components/profile_components/Interest";
import RecentActivities from "../components/profile_components/RecentActivities";
import ActivityStatus from "../components/profile_components/ActivityStatus";
<<<<<<< HEAD
=======
import { MainContainer } from "../components/styled/activity-detail-comp/Middle.styled";
>>>>>>> fb28215a0f9a558d12196340cf89e188465d7ff9
import {
  ProfilePageContainer,
  ProfileMainContent,
  ProfileSectionsContainer,
} from "../components/styled/profile-style-comp/Profile.styled";

export default function Profile() {
  return (
    <ProfilePageContainer>
      <NavBar />
      <MainContainer>
        <ProfileMainContent>
          <Cover />
          <ProfileSectionsContainer>
            <About />
            <Interest />
            <RecentActivities />
            <ActivityStatus />
          </ProfileSectionsContainer>
        </ProfileMainContent>
      </MainContainer>
      <Footer />
    </ProfilePageContainer>
  );
}
