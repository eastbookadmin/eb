import { useParams } from "react-router-dom";

function ContentPage() {
  const { id } = useParams();
  return <h1>컨텐츠 상세 페이지 {id}</h1>;
}

export default ContentPage;
