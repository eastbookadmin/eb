import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

const CardContents = function () {
  const [company_db, setCompany_db] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://343f1e8e-b631-4d85-a997-c3e4912f25bc.mock.pstmn.io/companydb"
      )
      .then(function (result) {
        const company_db = result.data.company_db;
        setCompany_db(company_db);
      })
      .catch(function (error) {
        console.error("error :", error);
      });
  }, []);

  return (
    <div className="contents_list">
      {company_db.map(function (content, index) {
        return (
          <div className="content_card">
            <Link className="content-link" to={`/contents/${content.id}`}>
              <h2>{content.company_name}</h2>
              <p>{content.about}</p>
              <img
                className="contents_media"
                src="images/icons/img_thumb@2x.png"
              />
              <img className="author_company" src="images/logo/wato.jpg" />
              <span>{content.author_company}</span>
              <br />
              <img
                className="post_footer_icon"
                src="images/icons/ic_count_save_12px.svg"
              />
              <span className="post_footer_info">saved_num</span>
              <img
                className="post_footer_icon"
                src="images/icons/ic_count_comment_12px.svg"
              />
              <span className="post_footer_info">comment_num</span>
              <span className="post_footer_info">date</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardContents;
