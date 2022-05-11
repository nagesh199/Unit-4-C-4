import {
  ERR_DATA, FILTER_DATA, GET_DATA,REQ_DATA, SORT_DATA} from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case REQ_DATA:
      return {
        ...state,
        isLoading: true,
        isError: false,
        filterData: [],
        products: [],
      };
   
    case GET_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [],
        products: payload,
      };
    case SORT_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: [],
        products: state.products.sort((x, y) => {
          if (payload === "asc") {
            return x.price - y.price;
          } else {
            return y.price - x.price;
          }
        }),
      };
    case FILTER_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        filterData: state.products.filter((item) => {
          return item.category === payload;
        }),
      };
    default:
      return state;
  }
};
export { reducer };
