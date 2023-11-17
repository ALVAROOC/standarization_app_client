import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

const DashFooter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate("/dash");

  let goHomeButton = null;
  if (pathname !== "/dash") {
    goHomeButton = (
      <button className="" title="Home" onClick={onGoHomeClicked}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
    );
  }

  const content = (
    <div className="p-4 sm:ml-64 mt-20">
        <div className="">
          <footer className="footer footer-center p-4 bg-base-300 text-base-content text-sm text-gray-500">
            <aside>
              <p>Copyright © 2023 - All right reserved by ALVAROOC Industries Ltd</p>
            </aside>
          </footer>
        </div>
    </div>
  );
  return content;
};

export default DashFooter;
