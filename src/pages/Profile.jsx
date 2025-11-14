import Footer from "../Components/feed-components/Footer";
import NavBar from "../Components/feed-components/NavBar";
import Cover from "../Components/profile_components/Cover";
import About from "../Components/profile_components/About";
import Interest from "../Components/profile_components/Interest";
import RecentActivities from "../Components/profile_components/RecentActivities";
import ActivityStatus from "../Components/profile_components/ActivityStatus";
import { MainContainer } from "../Components/styled/activity-detail-comp/Middle.styled";
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
