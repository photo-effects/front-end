import React from "react";
import Navbar from "../Landing/components/nav/Navbar";
import dashState from "../../assetts/dashboardState.png";
// import { HashLink as Link } from "react-router-hash-link";

const Docs = ({ auth }) => {
  const h3s = {
    fontSize: "24px",
    marginTop: "10px"
  };

  const sections = {
    marginTop: "15px"
  };

  const menu = {
    minWidth: "180px",
    padding: "16px",
    height: "850px",
    overflow: "auto",
    background: "#FC5185",
    color: "#E5E5E6",
    fontSize: "16px",
    fontWeight: "bold"
  };

  const docsMenu = {
    width: "100%",
    height: "850px",
    fontSize: "16px",
    margin: "5px",
    overflow: "auto"
  };

  const listItems = [
    { id: 1, name: "Tech Stack", link: "link stuff" },
    { id: 2, name: "Dependencies", link: "link stuff" },
    { id: 3, name: "Overview", link: "link stuff" },
    { id: 4, name: "Links, Docs and more", link: "link stuff" },
    { id: 5, name: "5th Item", link: "link stuff" },
    { id: 6, name: "Dashboard", link: "link stuff" },
    { id: 7, name: "7th Item", link: "link stuff" },
    { id: 8, name: "8th Item", link: "link stuff" },
    { id: 9, name: "9th Item", link: "link stuff" },
    { id: 10, name: "10th Item", link: "link stuff" }
  ];

  const scrollFunc = id => {
    // let scrollId = id + 1;
    console.log(id);

    let element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ height: "937px", overflow: "hidden" }}>
      <Navbar auth={auth} />
      <div style={{ height: "105px" }}></div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={menu}>
          <ul>
            {listItems.map(item => (
              <li
                style={{ marginTop: "10px" }}
                onClick={() => scrollFunc(item.id)}
              >
                {item.id}. {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div id="1" style={docsMenu}>
          <div style={sections}>
            <h3 style={h3s}>Our Tech Stack!</h3>
            <h4>FrontEnd:</h4>
            <ul>
              <li>React</li>
            </ul>
            <h4>Backend:</h4>
            <ul>
              <li>PostgreSQL</li>
              <li>Cloudinary</li>
              <li>Node.js</li>
            </ul>
            <h4>DevOps</h4>
            <ul>
              <li>Auth0</li>
            </ul>
            <h4>Wireframes/Planning Docs</h4>
            <ul>
              <li>
                <a
                  href="https://drive.google.com/file/d/10MtSzS81h8kgcXFGgP7RC0pwSsfDttqx/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Folder Structure Diagram
                </a>
              </li>
              Trello Board
              <li>
                <a
                  href="https://www.notion.so/Product-Cycle-Planning-Release-Canvas-fb376825344f46b6a88d377d7a6f7201"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Labs Training Kit
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/18PuWgQFjPMBCSf_lHWWZeb_bbdelXd_X/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wireframe
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/Photo-Effects-Words-Layout-Overlay-Filters-dbad058a07cc4646b3c0b583249d14a6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Product Board Notion Doc
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/1st-Feature-Canvas-Template-9f0ec58b922340e0a84fdc253ea274a3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canvas 1 Notion Doc
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/2nd-Feature-Canvas-Template-79bd25ff5b564c488aae5f9281a5722d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canvas 2 Notion Doc
                </a>
              </li>
              <li>
                <a
                  href="https://www.notion.so/3rd-Feature-Canvas-Template-8f70dfc9fb9f4912862327e9cb656105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canvas 3 Notion Doc
                </a>
              </li>
            </ul>
          </div>
          <span id="2"></span>
          <div style={sections}>
            <h3 style={h3s}>Dependencies </h3>
            <ul>
              <li>
                <a
                  href="https://www.npmjs.com/package/auth0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auth0
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.npmjs.com/package/auth0-js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auth0-js
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/auth0-lock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  auth0-lock
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/axios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  axios
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/cloudinary-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cloudinary-react
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/html2canvas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  html2canvas
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/jwt-decode"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  jwt-decode
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/react-dropzone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-dropzone
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/react-id-swiper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-id-swiper
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/swiper"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  swiper
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/react-particles-js"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  react-particles-js
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/react-reveal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-reveal
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/uuid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  uuid
                </a>
              </li>
            </ul>
          </div>
          <span id="3"></span>
          <div style={sections}>
            <h3 style={h3s}>Overview </h3>
            This product was made with non-tech-savvie users in mind. It is, at
            this point, strictly a desktop application. Users can login using
            either thier Google username/password, or make a new account. Once
            logged in, they are redirected to the dashboard where the user can
            either choose to continue a previous project or start a new project
            by uploading a photo. Once the existing or new photo is chosen, the
            user is redirected to the canvas to decorate their photo. The
            completed photo can be saved for later, or downloaded to the users
            device.
          </div>
          <span id="4"></span>
          <div style={sections}>
            <h3 style={h3s}>Links, Docs and More</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/photo-effects/front-end/tree/feature/refactoring"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FontEnd Github
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/photo-effects/back-end"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Backend Github
                </a>
              </li>
              <li>
                <a
                  href="https://photo-effect-backend.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API: https://photo-effect-backend.herokuapp.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.draw.io/?lightbox=1&target=blank&edit=_blank&layers=1&nav=1&title=docs#Uhttps%3A%2F%2Fdrive.google.com%2Fuc%3Fid%3D10MtSzS81h8kgcXFGgP7RC0pwSsfDttqx%26export%3Ddownload"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Folder Structure Diagram
                </a>
              </li>
            </ul>
          </div>
          <span id="5"></span>
          <div style={sections}>
            <h3>5th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="6"></span>
          <div style={sections}>
            <h3>Dashboard</h3>
            <p>To find the Dashboard component go into Pages --> Dashboard.</p>
            <div>
              <img
                style={{ width: "300px", height: "200px" }}
                src={dashState}
              />
            </div>
            <p>This is the state in Dashboard</p>
            <p> users: Obtaining users from our backend</p>
            <p>
              images: This is where the image from cloudinary is stored
              initially when the user chooses an image from their computer to
              use via dragndrop or choosing file.
            </p>
            <p>
              uploading: Used when user chooses a photo to tell them the photo
              is waiting to load to be displayed from Cloudinary
            </p>
            <p>
              error: Error will be displayed if user chooses image that is too
              big or if trying to upload multiple images at once
            </p>
            <p>
              inputKey: Needed to reset the "Choose File" option if user decides
              to choose a differnt photo.(It's a little hack)
            </p>
            <p>exist: Used for conditional rendering</p>
            <p>canvasprojects: Pulling projects from our backend</p>
            <div>
              <h3>Methods:</h3>
              <p>
                onChange: There are two of these in Dashboard.jsx. Two is needed
                because one is used for when a user clicks "Choose File" and the
                second is used if the user uploads a photo via DragNDrop.
              </p>
            </div>
            <div>
              <p>
                {" "}
                Dashboard has 4 components which are DashNav, Image, Projects,
                and Upload
              </p>
              <p>DashNav is simply the component that deals with the navbar</p>
              <p>
                Image component also holds a component called PhotoLink. These
                components deal with the image that is being displayed ot the
                user. The image is being displayed by returning a "secure_url"
                from Cloudinary. The image has all of the data coming back from
                Cloudinary in Dashboard.jsx state mentioned above. In PhotoLink
                is where the user can click "Go to canvas" or to "Choose a
                different Image". Going to canvas will push the data to our
                backend(see the info pushed in PhotoLink component) and "Choose
                a different image" will delete the image from Cloudinary and
                allow the user to choose another image
              </p>
              <p>
                Projects is the component that displays the specific user's
                projects on the bottom of the Dashboard page. It is being mapped
                from canvasprojects from the state in Dashboard.jsx. A user can
                click on a photo to go to the canvas with the image displayed
                and edit the image{" "}
              </p>
              <p>
                Upload component has the react-dragndrop code for when a user
                wants to choose a file to upload
              </p>
            </div>
          </div>

          <span id="7"></span>
          <div style={sections}>
            <h3>7th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="8"></span>
          <div style={sections}>
            <h3>8th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="9"></span>
          <div style={sections}>
            <h3>9th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="10"></span>
          <div style={sections}>
            <h3>10th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="11"></span>
          <div style={sections}>
            <h3>11th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="12"></span>
          <div style={sections}>
            <h3>12th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="13"></span>
          <div style={sections}>
            <h3>13th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="14"></span>
          <div style={sections}>
            <h3>14th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="15"></span>
          <div style={sections}>
            <h3>15th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
          <span id="16"></span>
          <div style={sections}>
            <h3>16th thing</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            sed pariatur illum facilis modi neque, esse repellat iste ipsa
            ipsum, fuga nobis! Vitae exercitationem incidunt impedit doloribus
            distinctio! Delectus, aliquid. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Cumque odit excepturi fuga fugit quod,
            odio aliquam nihil sint explicabo tempora minus ratione tempore
            laborum nam repellendus esse iusto maiores alias. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Accusantium tenetur ab autem
            eius? Non blanditiis unde ipsum expedita in explicabo commodi. Dolor
            vitae labore enim natus quasi laborum culpa mollitia?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;
