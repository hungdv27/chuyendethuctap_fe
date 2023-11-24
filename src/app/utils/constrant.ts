export const SCROLL_TABLE = {
  SCROLL_X: '1500px',
  SCROLL_Y: '',
};
export const defaultRequestList = {
  listTextSearch: [],
  code: null,
  page: 1,
  name: null,
  currentPage: 0,
  pageSize: 10,
  sort: 'created_Date,DESC', // -: desc | +: asc,
};
export const TOOLTIP = {
  PLACEMENT_TOP: 'top',
};
export const RESPONSE_STATUS_CODES = {
  200: 'OK',
  400: 'NG',
};
export const Validate = {
  Name: /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆẾỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴýÝỶỸÝửữựỳỵỷỹ -]{0,1000}$/,
  Phone: /(^[+]?(|0-9)+([0-9]){10}$)/,
  Content:
    /^[a-zA-Z0-9_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆẾỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴýÝỶỸÝửữựỳỵỷỹ -]{0,1000}$/,
  Email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/,
  Number: /^[0-9]/,
};
