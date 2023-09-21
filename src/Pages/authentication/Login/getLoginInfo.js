import axios from "axios";

import { URL } from "../../../Assets/environment/url";
import { loginSliceActions } from "../../../Store/loginSlice";
import { cartSliceActions } from "../../../Store/cartSlice";

export const getLoginInfo = async (dispatch) => {
  await axios({
    method: "GET",
    url: `${URL}user/isLoggedIn`,
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch(loginSliceActions.setLogin(true));
        dispatch(loginSliceActions.setUserInfo(res.data.userData));
        dispatch(cartSliceActions.setItems(res.data.userData.cart));
        dispatch(cartSliceActions.setCount(res.data.userData.cart.length));
      } else {
        dispatch(loginSliceActions.setLogin(false));
        dispatch(loginSliceActions.setUserInfo(null));
      }
    })
    .catch((e) => console.log(e));
};
