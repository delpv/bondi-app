import Footer from "../Components/feed-components/Footer";
import NavBar from "../Components/feed-components/NavBar";
import Cover from "../Components/profile_components/Cover";
import About from "../Components/profile_components/About";
import Interest from "../Components/profile_components/Interest";
import RecentActivities from "../Components/profile_components/RecentActivities";
import ActivityStatus from "../Components/profile_components/ActivityStatus";
import {
  ProfilePageContainer,
  ProfileMainContent,
  ProfileSectionsContainer,
} from "../Components/styled/profile-style-comp/Profile.styled";

export default function Profile() {
  return (
    <ProfilePageContainer>
      <NavBar />
      <ProfileMainContent>
        <Cover />
        <ProfileSectionsContainer>
          <About />
          <Interest />
          <RecentActivities />
          <ActivityStatus />
        </ProfileSectionsContainer>
      </ProfileMainContent>
      <Footer />
    </ProfilePageContainer>
  );
}
