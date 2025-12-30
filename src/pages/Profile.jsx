import Footer from "../components/feed-components/Footer";
import NavBar from "../components/feed-components/NavBar";
import Cover from "../components/profile_components/Cover";
import About from "../components/profile_components/About";
import ActivityStatus from "../components/profile_components/ActivityStatus";
import { MainContainer } from "../components/styled/activity-detail-comp/Middle.styled";
import {
  ProfilePageContainer,
  ProfileMainContent,
  ProfileSectionsContainer,
} from "../components/styled/profile-style-comp/Profile.styled";
import Parse from "parse";

export default function Profile() {
  const user = Parse.User.current();

  return (
    <ProfilePageContainer>
      <NavBar />
      <MainContainer>
        <ProfileMainContent>
          <Cover user={user} />
          <ProfileSectionsContainer>
            <About user={user} />
            <ActivityStatus />
          </ProfileSectionsContainer>
        </ProfileMainContent>
      </MainContainer>
      <Footer />
    </ProfilePageContainer>
  );
}
