import React from "react";
import Navbar from "../Landing/components/nav/Navbar";
// import { HashLink as Link } from "react-router-hash-link";

const Docs = ({ auth }) => {
  const menu = {
    minWidth: "180px",
    padding: "10px",
    height: "1000px",
    overflow: "auto",
    background: "#FC5185",
    color: "#E5E5E6",
    fontSize: "16px",
    fontWeight: "bold"
  };

  const docsMenu = {
    width: "100%",
    fontSize: "16px",
    margin: "5px"
  };

  const listItems = [{ id: 1, name: "First Item", link: "link stuff" }];

  const scrollFunc = id => {
    let element = document.getElementById(id);
    element.scrollIntoView();
  };

  return (
    <div>
      <Navbar auth={auth} />
      <div style={{ height: "200px" }}></div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={menu}>
          <ul>
            {listItems.map(item => (
              <li onClick={() => scrollFunc(item.id)}>
                {item.id}. {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div style={docsMenu}>
          <div>
            <h3>First thing first</h3>
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
          <div>
            <h3 id="1">First thing first</h3>
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
          <div>
            <h3>First thing first</h3>
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
          <div>
            <h3>First thing first</h3>
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
