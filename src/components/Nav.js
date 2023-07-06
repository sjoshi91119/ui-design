import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <>
      <div className="navbar">
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faCircleUser} />
      </div>

      <div className="header">
        <p id="greeting">Good Morning!</p>
        <p id="time">08:24</p> <br></br>
      </div>

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
          <div class="rounded">bla bla bla</div>
          <div class="digged">
            {" "}
            <br />
            <br />
            or yada yada yada{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
