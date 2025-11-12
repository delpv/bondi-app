import Footer from "../components/feed-components/Footer";
import NavBar from "../components/feed-components/NavBar";
import Cover from "../components/profile_components/Cover";
import About from "../components/profile_components/About";
import Interest from "../components/profile_components/Interest";
import RecentActivities from "../components/profile_components/RecentActivities";
import ActivityStatus from "../components/profile_components/ActivityStatus";
import { MainContainer } from "../components/styled/activity-detail-comp/Middle.styled";
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
