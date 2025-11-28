import Footer from "../components/feed-components/Footer";
import NavBar from "../components/feed-components/NavBar";
import Cover from "../components/profile_components/Cover";
import About from "../components/profile_components/About";
import Interest from "../components/profile_components/Interest";
import ActivityStatus from "../components/profile_components/ActivityStatus";
import { MainContainer } from "../components/styled/activity-detail-comp/Middle.styled";
import {
  ProfilePageContainer,
  ProfileMainContent,
  ProfileSectionsContainer,
} from "../components/styled/profile-style-comp/Profile.styled";

export default function Profile({ userObject }) {
  return (
    <ProfilePageContainer>
      <NavBar />
      <MainContainer>
        <ProfileMainContent>
          <Cover user={userObject} />
          <ProfileSectionsContainer>
            <About user={userObject} />
            <Interest />
            <ActivityStatus />
          </ProfileSectionsContainer>
        </ProfileMainContent>
      </MainContainer>
      <Footer />
    </ProfilePageContainer>
  );
}
