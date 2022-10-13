import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCollection } from "../../store/shop/shop.selectors";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = (props) => {
  const { category } = useParams();
  const collections = selectCollection(category)(useSelector((state) => state));
  return (
    <div className="collection-page">
      <h2 className="title">{collections?.title}</h2>
      <div className="items">
        {collections?.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
