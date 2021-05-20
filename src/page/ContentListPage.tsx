import ContentList from "component/ContentList";
import ListCarousel from "component/ListCarousel";
import RangeSliderContent from "component/RangeSliderContent";

function ContentListPage() {
  return (
    <div className="contentListPage">
      <ListCarousel />
      <RangeSliderContent />
      <ContentList />
    </div>
  );
}

export default ContentListPage;
