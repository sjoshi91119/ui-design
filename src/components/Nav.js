import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPlug } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
function Nav() {
  return (
    <>
      <div className="navbar">
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faCircleUser} />
      </div>

      <Header />

      <div className="mid">
        <h3>Room</h3>
        <select name="View All" id="dropdown" value="view All">
          <option value="">living room</option>
          <option value="">Kitchen</option>
          <option value="">dining room</option>
          <option value="">study room</option>
        </select>
      </div>
      <div id="rooms">
        <div className="card">
          <FontAwesomeIcon icon={faBed} />
          <br />
          <br />
          <br />
          <h4>Living room</h4>

          <p>3 Devices</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faKitchenSet} />
          <br />
          <br />
          <br />
          <h4>Kitchen</h4>
          <p>5 Devices</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faUtensils} />
          <br />
          <br />
          <br />
          <h4>Dining room</h4>
          <p>4 Devices</p>
        </div>

        <div className="card">
          <FontAwesomeIcon icon={faBookOpen} />
          <br />
          <br />
          <br />
          <h4>Study room</h4>
          <p>2 Devices</p>
        </div>

        <div class="container">
          <div class="rounded">
            <FontAwesomeIcon icon={faMicrophone} />
          </div>
          <div class="digged">
            <br />
            <br />
            <div class="logos">
              <FontAwesomeIcon icon={faHouse} />
              <FontAwesomeIcon icon={faCalendarDays} />
              <FontAwesomeIcon icon={faPlug} />
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
// idk just commiting to not break the streak
