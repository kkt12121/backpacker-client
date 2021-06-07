import ContentPageInvite from "component/ContentPageInvite";
import { useHistory } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import "../css/Invite.scss";
function Invite() {
  const history = useHistory();
  return (
    <>
      <div className="invitePageModalOn">
        <IoClose
          size={30}
          className="invitePageModalClose"
          onClick={() => {
            history.push("/");
          }}
        />
        <ContentPageInvite />
      </div>
    </>
  );
}

export default Invite;
