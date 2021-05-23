import { FilteredListAction } from "action/FilteredListAction";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducer";
import "../css/ContentList.scss";

const ContentList = () => {
  const stateData = useSelector((state: RootState) => state);
  let filteringOption = {
    city: stateData.listCityUpdateReducer.city,
    budget: stateData.listBudgetUpdateReducer.budget,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FilteredListAction(filteringOption.city, filteringOption.budget));
  }, [filteringOption.city, filteringOption.budget]);

  let renderList = stateData.filteredListReducer.list;
  console.log("render", renderList);

  const [lastnum, setLastnum] = useState(10);
  let page = renderList?.slice(lastnum - 10, lastnum);

  const click = (data: any) => {
    setLastnum((data.selected + 1) * 10);
  };

  return (
    <>
      <section className="cardTable">
        {renderList?.length ? null : (
          <div className="noInfo">
            아직 정보가 없습니다. 첫번째 여행자가 되어주세요!
          </div>
        )}
        {page?.map((el) => (
          <>
            <div key={page?.indexOf(el)} className="contentCard">
              <img className="contentThumbnail" src={el.thumbnail[0]} />
              <div className="budget">{el.totalCost}원으로 다녀온</div>
              <div className="condom">{el.touristSpot} 여행</div>
            </div>
          </>
        ))}
        {!renderList?.length ? null : (
          <ReactPaginate
            pageCount={Math.ceil(Number(renderList?.length) / 10)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
            onPageChange={click}
            pageClassName="paginateNum"
            pageLinkClassName="pageIdx"
            containerClassName="paginateContainer"
          ></ReactPaginate>
        )}
      </section>
    </>
  );
};

export default ContentList;
