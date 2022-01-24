import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ContentPage() {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://343f1e8e-b631-4d85-a997-c3e4912f25bc.mock.pstmn.io/contents/${id}`
      )
      .then(function (result) {
        setContent(result.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (content === null) {
    return <h1>Now Loading~!!!</h1>;
  }

  return (
    <div>
      <h1>{content.company_name}</h1>
      <div id="company_logo">
        <img className="contents_media" src="/images/icons/img_thumb@2x.png" />
      </div>
      <div id="contents_text">
        <p>{content.about}</p>
        <p>{content.about_industry}</p>
      </div>
      <img className="author_company" src="/images/logo/wato.jpg" />
      <span>{content.author_company}</span>
      <br />
      <img
        className="post_footer_icon"
        src="/images/icons/ic_count_save_12px.svg"
      />
      <span className="post_footer_info">saved_num</span>
      <img
        className="post_footer_icon"
        src="/images/icons/ic_count_comment_12px.svg"
      />
      <span className="post_footer_info">comment_num</span>
      <span className="post_footer_info">date</span>
    </div>
  );
}

export default ContentPage;
